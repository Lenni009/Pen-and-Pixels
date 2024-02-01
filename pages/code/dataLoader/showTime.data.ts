import { loadEnv } from 'vitepress';

import { defineLoader } from 'vitepress';

export interface Data {
  showTime: boolean;
}

declare const data: Data;
export { data };

export default defineLoader({
  load(): Data {
    const env = loadEnv('', process.cwd());
    const showTime = env.VITE_SHOWTIME === 'true';
    return {
      showTime,
    };
  },
});
