import { loadEnv } from 'vitepress';

import { defineLoader } from 'vitepress';

export interface Data {
  isShowTime: boolean;
}

declare const data: Data;

const env = loadEnv('', process.cwd());
const isShowTime = env.VITE_SHOWTIME === 'true';

export { data, isShowTime };

export default defineLoader({
  load(): Data {
    return {
      isShowTime,
    };
  },
});
