/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { getBusinessInfoHandler } from './controller/commonController';

export default {
	async fetch(request: Request, env: any): Promise<Response> {
		const url = new URL(request.url);
		const { pathname } = url;

		if (pathname === '/forrest/common/businessInfo' && request.method === 'GET') {
			return await getBusinessInfoHandler(request, env);
		}

		return new Response(JSON.stringify({ message: 'Not Found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		});
	},
} satisfies ExportedHandler<Env>;
