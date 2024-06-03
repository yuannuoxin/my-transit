export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		console.log('url:' + url);
		if (url.pathname === '/') {
			return new Response(JSON.stringify(request.cf), { status: 200 });
		}
		const pathp = url.pathname.replace(/^\/|\/$/g, '');
		console.log('pathp:' + pathp);
		const addrPath = url.pathname.replace(/^\/|\/$/g, '');
		console.log('addrPath:' + addrPath);
		const newUrl = new URL('https://' + addrPath);
		console.log('newUrl:' + newUrl);
		return fetch(new Request(newUrl, request));
	}
};
