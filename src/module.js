export default function yournotifyModule() { return { name: 'yournotify-nuxt' }; }
export function createYournotifyClient({ apiKey, apiUrl = 'https://api.yournotify.com/' } = {}) {
  const base = String(apiUrl).replace(/\/?$/, '/');
  const request = async (endpoint, method = 'GET', data = undefined) => {
    let url = base + String(endpoint).replace(/^\//, '');
    if (method === 'GET' && data && Object.keys(data).length) {
      const qs = new URLSearchParams(Object.entries(data).filter(([,v]) => v != null).map(([k,v]) => [k, String(v)])).toString();
      if (qs) url += (url.includes('?') ? '&' : '?') + qs;
    }
    return $fetch(url, { method, headers: { Authorization: `Bearer ${apiKey}` }, body: method === 'GET' ? undefined : data });
  };
  return { request, getProfile: () => request('account/profile') };
}
