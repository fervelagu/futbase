import { AsyncStorage } from "react-native";

const saveItem = async (item, value) => {
	try {
		await AsyncStorage.setItem(item, value);
	} catch (error) {
		throw error;
	}
};

const getItem = async (item, defaultValue) => {
	try {
		let value = await AsyncStorage.getItem(item);
		if (value === undefined) {
			value = defaultValue;
		}
		return value;
	} catch (error) {
		throw error;
	}
};

export const DeviceStorage = {
	getItem,
	saveItem
};
