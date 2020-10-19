import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { COLORS } from "../../styles";
import { getTeamLogo } from "../../styles/images";

export const General = ({ table }) =>
	table.map(item => (
		<View style={styles.table}>
			<View style={styles.row}>
				<Text>{item.id}</Text>
			</View>
			<View style={styles.row}>
				<Image source={getTeamLogo(item.asset)} style={styles.icon} />
			</View>
			<View style={styles.largeRow}>
				<Text>{item.team}</Text>
			</View>
			<View style={styles.row}>
				<Text>{item.points}</Text>
			</View>
		</View>
	));

export const Goals = ({ table }) =>
	table.map(item => (
		<View style={styles.table}>
			<View style={styles.row}>
				<Text>{item.id}</Text>
			</View>
			<View style={styles.row}>
				<Image source={getTeamLogo(item.asset)} style={styles.icon} resizeMode="contain" />
			</View>
			<View style={styles.largeRow}>
				<Text>{item.player}</Text>
			</View>
			<View style={styles.row}>
				<Text>{item.goals}</Text>
			</View>
		</View>
	));

const styles = StyleSheet.create({
	table: {
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 5
	},
	row: {
		alignItems: "center",
		width: (Dimensions.get("screen").width - 20) / 10
	},
	icon: {
		height: 30,
		width: 30
	},
	largeRow: {
		width: ((Dimensions.get("screen").width - 20) / 10) * 7
	}
});
