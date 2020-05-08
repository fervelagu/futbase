export const toFormData = object => {
	const formData = new FormData();
	Object.keys(object).forEach(key => formData.append(key, object[key]));
	return formData;
};

export const urlify = obj => {
	var arr = [];
	for (var key of Object.keys(obj)) arr.push(isObject(obj[key]) ? urlify(obj[key]) : key + "=" + obj[key]);
	return "?" + arr.join("&");
};
