const get = function(url, params = {}){
	return request({
		url,
		params,
		method: 'GET'
	});
}

const post = function(url, params = {}){
	return request({
		url,
		params,
		method: 'POST'
	});
}

const request = function(options){
	return new Promise(function(resolve, reject) {
		uni.request({
			url: options.url,
			method: options.method,
			data: options.params,
			success: res => {
				resolve(res.data)
			},
			fail: (error) => {
				reject(error);
			},
			complete: () => {}
		});
	});
}

export default {
	get,
	post
}