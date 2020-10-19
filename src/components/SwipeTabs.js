import React from "react";
import { ScrollView, RefreshControl, Text, View, TouchableHighlight, Dimensions, StyleSheet } from "react-native";
import { ScrollableTabView, DefaultTabBar } from "@valdio/react-native-scrollable-tabview";
import { COLORS } from "../styles";

export const SwipeTabs = ({ tabs, containers, initialPage, refreshing, onRefresh }) => (
	<View style={styles.container}>
		<View style={styles.containerTabs}>
			<ScrollableTabView
				initialPage={initialPage ? initialPage : 0}
				tabBarUnderlineStyle={{ backgroundColor: "transparent" }}
				tabBarActiveTextColor={COLORS.TEAM_SECONDARY}
				tabBarInactiveTextColor={COLORS.WHITE}
				renderTabBar={() => <DefaultTabBar />}>
				{containers.map((value, index) => (
					<View tabLabel={tabs[index].title}>
						<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
							{value.container}
						</ScrollView>
					</View>
				))}
			</ScrollableTabView>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE
	},
	containerTabs: {
		height: "100%"
	},
	tab: {
		backgroundColor: COLORS.WHITE,
		top: 45,
		height: 4,
		position: "absolute",
		width: Dimensions.get("screen").width,
		zIndex: 1
	},
	tabContainer: {
		height: 30,
		marginHorizontal: 6,
		borderColor: COLORS.GRAY,
		borderRadius: 20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		flexDirection: "row",
		overflow: "hidden"
	},
	inactive: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 20,
		paddingVertical: 6
	},
	active: {
		backgroundColor: COLORS.TEAM_PRIMARY,
		borderRadius: 20,
		paddingVertical: 6
	},
	activeLabel: {
		color: COLORS.WHITE,
		fontSize: 12,
		textAlign: "center"
	},
	inactiveLabel: {
		color: COLORS.TEAM_PRIMARY,
		fontSize: 12,
		textAlign: "center"
	},
	contentDescription: {
		width: "100%",
		height: 25,
		flexDirection: "row"
	},
	contentLocal: {
		width: "50%",
		height: 25,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	contentVisitor: {
		width: "50%",
		height: 25,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	localCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: COLORS.TEAM_PRIMARY,
		backgroundColor: COLORS.TEAM_PRIMARY,
		marginRight: 5
	},
	visitorCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: COLORS.TEAM_SECONDARY,
		backgroundColor: COLORS.TEAM_SECONDARY,
		marginRight: 5
	}
});
