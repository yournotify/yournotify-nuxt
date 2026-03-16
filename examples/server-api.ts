import { createYournotifyClient } from '../src/module.js';
export default defineEventHandler(async () => {
  const yn = createYournotifyClient({ apiKey: process.env.YOURNOTIFY_API_KEY });
  return await yn.getProfile();
});
