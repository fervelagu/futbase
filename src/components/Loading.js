import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../styles";
import { i18n } from "../utils/i18n";

export const Loading = ({
	message = i18n.t("Global.loading"),
	transparent,
	nomsg
}) => (
	<View style={transparent ? styles.noBackground : styles.container}>
		<ActivityIndicator
			size={"large"}
			color={COLORS.WHITE}
			style={{
				paddingTop: 30,
				paddingBottom: 15,
				paddingHorizontal: 50
			}}
		/>
		{!nomsg && <Text style={styles.text}>{message}</Text>}
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		alignSelf: "center",
		alignItems: "center",
		backgroundColor: COLORS.BLACK_BLUR
	},
	noBackground: {
		borderRadius: 20,
		alignSelf: "center",
		alignItems: "center"
	},
	text: {
		paddingVertical: 12,
		color: COLORS.WHITE
	}
});
