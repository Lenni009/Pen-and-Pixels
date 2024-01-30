import { loadEnv } from 'vitepress';

const env = loadEnv('', process.cwd());
export const showTime = env.VITE_SHOWTIME === 'true';
