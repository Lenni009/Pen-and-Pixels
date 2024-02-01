import { loadEnv } from 'vitepress';

import { defineLoader } from 'vitepress';

export interface Data {
  showTime: boolean;
}

declare const data: Data;

const env = loadEnv('', process.cwd());
const showTime = env.VITE_SHOWTIME === 'true';

export { data, showTime };

export default defineLoader({
  load(): Data {
    return {
      showTime,
    };
  },
});
