import { urlify } from "../utils";
import { Web } from "./Web";

const get = async (
	endpoint,
	query_params,
	opts = {
		token_required: true
	}
) => {
	const params = query_params ? urlify(query_params) : undefined;
	return await Web.get(`${endpoint}${!!params ? params : ""}`, {}, opts)
		.then(res => ({
			data: res,
			success: true
		}))
		.catch(err => ({
			success: false,
			message: err
		}));
};

const post = async (endpoint, body) => {
	return await Web.post(`${endpoint}`, body)
		.then(res => ({
			success: res.success,
			message: res.message ? res.message : null
		}))
		.catch(err => ({
			success: false,
			message: err
		}));
};

const patch = async (endpoint, post_data) => {
	return await Web.patch(endpoint, post_data)
		.then(res => ({
			success: true
		}))
		.catch(err => ({
			success: false,
			message: err
		}));
};

const put = async (endpoint, body) => {
	return await Web.put(`${endpoint}`, body)
		.then(res => ({
			success: true
		}))
		.catch(err => ({
			success: false,
			message: err
		}));
};

const remove = async (endpoint, post_data) => {
	return await Web.del(endpoint, post_data)
		.then(res => ({
			success: true
		}))
		.catch(err => ({
			success: false,
			message: err
		}));
};

const Http = { get, post, patch, put, remove };

export default Http;
