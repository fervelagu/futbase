import { DeviceStorage } from "../storage";
import { merge } from "lodash";

const get = async (endpoint, params, { extra_headers, token_required } = {}) => {
	return new Promise(async (resolve, reject) => {
		let params_str = "";
		let headers = {
			Accept: "application/json",
			"Content-Type": "application/json"
		};
		try {
			let key;
			for (key in params) {
				if (params_str !== "") {
					params_str += "&";
				}
				params_str += key + "=" + params[key];
			}
			if (params_str) {
				if (endpoint.indexOf("?") === -1) {
					endpoint = endpoint + "?" + params_str;
				} else {
					endpoint = endpoint + "&" + params_str;
				}
			}
			if (extra_headers) {
				if (typeof extra_headers === "object") {
					headers = merge(headers, extra_headers);
				}
			}
			if (token_required) {
				let local_token = await DeviceStorage.getItem("accessToken", "");
				let auth_header = {
					Authorization: "Bearer " + local_token //Bearer or JWT
				};
				headers = merge(headers, auth_header);
			}
		} catch (err) {
			console.warn("Error before executing petition");
			console.warn(err);
			reject(err);
		}
		fetch(endpoint, {
			method: "GET",
			headers: headers
		})
			.then(async response => {
				try {
					const res = await response.json();
					// console.info("API REQUEST GET", endpoint, headers, res);
					return res;
				} catch (err) {
					console.info("NOT A JSON:");
					console.info(response);
					reject(err);
				}
			})
			.then(responseData => {
				// console.info("GET RESPONSE", responseData);
				resolve(responseData);
			})
			.catch(err => {
				console.warn("API REQUEST GET", endpoint, headers, err);
				reject(err);
			});
	});
};

const post = async (endpoint, params, { extra_headers, token_required } = {}) => {
	return new Promise(async (resolve, reject) => {
		let headers = {
			Accept: "application/json",
			"Content-Type": "application/json"
		};
		let post_params;
		try {
			post_params = JSON.stringify(params);

			if (extra_headers) {
				if (typeof extra_headers === "object") {
					headers = merge(headers, extra_headers);
				}
			}
			if (token_required) {
				let local_token = await DeviceStorage.getItem("accessToken", "");
				let auth_header = {
					Authorization: "Bearer " + local_token //could be Bearer or JWT
				};
				headers = merge(headers, auth_header);
			}
		} catch (err) {
			console.warn("Error before executing petition");
			console.log(err);
			reject(err);
		}
		return fetch(endpoint, {
			method: "POST",
			headers: headers,
			body: post_params
		})
			.then(response => {
				return response.json();
			})
			.then(res => {
				console.info(endpoint, params, headers, res);
				resolve(res);
			})
			.catch(err => {
				console.info(`API REQUEST POST`, endpoint, params, headers, err);
				reject(err);
			});
	});
};

const patch = async (endpoint, params, { extra_headers, token_required } = {}) => {
	return new Promise(async (resolve, reject) => {
		var headers = {
			Accept: "application/json",
			"Content-Type": "application/json"
		};
		let post_params;
		try {
			post_params = JSON.stringify(params);

			if (extra_headers) {
				if (typeof extra_headers === "object") {
					headers = merge(headers, extra_headers);
				}
			}
			if (token_required) {
				let local_token = await DeviceStorage.getItem("accessToken", "");
				let auth_header = {
					Authorization: "Bearer " + local_token //JWT
				};
				headers = merge(headers, auth_header);
			}
		} catch (err) {
			console.warn("Error before executing petition");
			console.log(err);
			reject(err);
		}
		console.info("EXECUTING PATCH PETITION: ");
		console.info(endpoint, params, headers);
		fetch(endpoint, {
			method: "PATCH",
			headers: headers,
			body: post_params
		})
			.then(response => {
				return response.json();
			})
			.catch(err => {
				console.info("NOT A JSON:");
				console.info(err);
				reject(err);
			})
			.then(responseData => {
				console.info("PATCH RESPONSE:", responseData);
				resolve(responseData);
			})
			.catch(err => {
				console.info("Error:");
				reject(err);
			});
	});
};

const put = async (endpoint, params, { extra_headers, token_required } = {}) => {
	return new Promise(async (resolve, reject) => {
		var headers = {
			Accept: "application/json",
			"Content-Type": "application/json"
		};
		let post_params;
		try {
			post_params = JSON.stringify(params);

			if (extra_headers) {
				if (typeof extra_headers === "object") {
					headers = merge(headers, extra_headers);
				}
			}
			if (token_required) {
				let local_token = await DeviceStorage.getItem("accessToken", "");
				let auth_header = {
					Authorization: "Bearer " + local_token
				};
				headers = merge(headers, auth_header);
			}
		} catch (err) {
			console.warn("Error before executing petition");
			console.log(err);
			reject(err);
		}
		console.info("EXECUTING PUT PETITION: ");
		console.info(endpoint, post_params, headers);
		fetch(endpoint, {
			method: "PUT",
			headers: headers,
			body: post_params
		})
			.then(response => {
				return response.json();
			})
			.catch(err => {
				console.info("NOT A JSON:");
				console.info(err);
				reject(err);
			})
			.then(responseData => {
				console.info("PUT RESPONSE:", responseData);
				resolve(responseData);
			})
			.catch(err => {
				console.info("Error:");
				reject(err);
			});
	});
};

const del = async (endpoint, params, { extra_headers, token_required } = {}) => {
	return new Promise(async (resolve, reject) => {
		var headers = {
			Accept: "application/json",
			"Content-Type": "application/json"
		};
		let post_params;
		try {
			post_params = JSON.stringify(params);

			if (extra_headers) {
				if (typeof extra_headers === "object") {
					headers = merge(headers, extra_headers);
				}
			}
			if (token_required) {
				let local_token = await DeviceStorage.getItem("accessToken", "");
				let auth_header = {
					Authorization: "Bearer " + local_token
				};
				headers = merge(headers, auth_header);
			}
		} catch (err) {
			console.warn("Error before executing petition");
			console.log(err);
			reject(err);
		}
		console.info("EXECUTING DELETE PETITION: ");
		console.info(endpoint, params, headers);
		fetch(endpoint, {
			method: "DELETE",
			headers: headers,
			body: post_params
		})
			.then(response => {
				return response.json();
			})
			.catch(err => {
				console.info("No es un JSON:");
				console.info(err);
				reject(err);
			})
			.then(responseData => {
				console.info("DELETE response:", responseData);
				resolve(responseData);
			})
			.catch(err => {
				console.info("Error:");
				reject(err);
			});
	});
};

const Web = {
	get,
	post,
	patch,
	put,
	del
};

export { Web };
