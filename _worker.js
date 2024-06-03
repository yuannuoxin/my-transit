export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		console.log('url:' + url);
		const pathp = url.pathname.replace(/^\/|\/$/g, '');
		console.log('pathp:' + pathp);
		const addrPath = url.pathname.replace(/^\/|\/$/g, '');
		console.log('addrPath:' + addrPath);
		const newUrl = new URL('https://' + addrPath)+ url.search + url.hash;
		console.log('newUrl:' + newUrl);
		return fetch(new Request(newUrl, request));
	}
};
