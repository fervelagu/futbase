import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import { Subscribe } from "unstated";
import { ScrollableTabView } from "@valdio/react-native-scrollable-tabview";
import homeContainer from "../containers/home.container";
import { General, Goals } from "../components/statistics/Tables";
import { COLORS } from "../styles";
import { NoData } from "../components/NoData";

export default class StatisticsScreen extends React.Component {
	async componentDidMount() {
		await homeContainer.getTournaments();
		await homeContainer.selectTournament();
	}

	async selectLabel(i, plus) {
		if (i == 0 && plus == false) return;
		if (i > homeContainer.state.tournaments.length && plus == true) return;
		await homeContainer.setState({ i: plus ? i + 1 : i - 1 }, () => {
			homeContainer.selectTournament();
		})
	}

	renderView(hc) {
		const { tournament, i } = hc.state;
		console.log("tournaments", tournament)
		return (
			<View style={styles.container}>
				{tournament ? (
					<View style={styles.header}>
						<View style={styles.selector}>
							<TouchableHighlight
								underlayColor={"transparent"}
								style={styles.arrowButton}
								onPress={() => this.selectLabel(i, false)}>
								<Text>L</Text>
							</TouchableHighlight>
							<Text style={styles.headerTitle}>{tournament.label}</Text>
							<TouchableHighlight
								underlayColor={"transparent"}
								style={styles.arrowButton}
								onPress={() => this.selectLabel(i, true)}>
								<Text>R</Text>
							</TouchableHighlight>
						</View>
					</View>
				) : (
						<NoData />
					)}
			</View>
		);
	}

	render = () => <Subscribe to={[homeContainer]}>{() => this.renderView(homeContainer)}</Subscribe>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		height: "100%"
	},
	header: {
		height: "10%",
		width: Dimensions.get("screen").width,
		justifyContent: "center",
		alignItems: "center"
	},
	headerIOS: {
		height: "14%",
		width: Dimensions.get("screen").width,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		paddingBottom: 10,
		paddingHorizontal: 10,
		fontSize: 18
	},
	content: {
		marginTop: "2%",
		height: "88%"
	},
	tabsContainer: {
		marginVertical: 10
	},
	tabsOptionsContainer: {
		borderColor: COLORS.YELLOW,
		borderRadius: 20,
		borderWidth: 1,
		flexDirection: "row",
		overflow: "hidden"
	},
	inactive: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 20,
		padding: 8,
		width: (Dimensions.get("screen").width - 20) / 4
	},
	active: {
		backgroundColor: COLORS.YELLOW,
		borderRadius: 20,
		padding: 8,
		width: (Dimensions.get("screen").width - 20) / 4
	},
	activeLabel: {
		color: COLORS.WHITE,
		fontSize: 12,
		textAlign: "center"
	},
	inactiveLabel: {
		color: COLORS.YELLOW,
		fontSize: 12,
		textAlign: "center"
	},
	tabContentContainer: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.WHITE
	},
	rowTable: {
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 5
	},
	rowTableColumntOdd: {
		backgroundColor: COLORS.WHITE
	},
	rowTableColumntEven: {
		backgroundColor: COLORS.GRAY_LIGHT
	},
	team: {
		backgroundColor: COLORS.TEAM_PRIMARY
	},
	rowTableColumnt1: {
		alignItems: "center",
		width: (Dimensions.get("screen").width - 20) / 10
	},
	rowTableColumnt2: {
		alignItems: "center",
		width: (Dimensions.get("screen").width - 20) / 10
	},
	rowTableColumnt3: {
		width: ((Dimensions.get("screen").width - 20) / 10) * 7
	},
	rowTableColumnt4: {
		alignItems: "center",
		width: (Dimensions.get("screen").width - 20) / 10
	},
	rowTableColumntLabel: {
		paddingTop: 5,
		fontSize: 16
	},
	icon: {
		height: 30,
		width: 30
	},
	labelContainer: {
		marginTop: "4%",
		justifyContent: "center",
		alignItems: "center"
	},
	labelIOSContainer: {
		marginTop: 30,
		justifyContent: "center",
		alignItems: "center"
	},
	label: {
		color: COLORS.BLUE,
		fontSize: 17,
		marginBottom: 10
	},
	arrowButtonImage: {
		height: 25,
		width: 25
	},
	arrowButton: {
		alignItems: "center",
		paddingTop: 4,
		width: "20%"
	},
	selector: {
		flexDirection: "row"
	},
	headerTitle: {
		fontSize: 23,
		textAlign: "center",
		width: "60%"
	}
});
