import { RequestInfo } from 'node-fetch';
declare const getSitemapLinks: (url: RequestInfo, timeout: number) => Promise<string[]>;
export default getSitemapLinks;
