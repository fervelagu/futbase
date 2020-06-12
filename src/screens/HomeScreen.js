import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Subscribe } from "unstated";
import { Wrapper } from "../components/Wrapper";
import { HeaderMatch } from "../components/HeaderMatch";
import TabsNavigator from "../navigation/HomeTabsNavigator";
import homeContainer from "../containers/home.container";
import { Loading } from "../components/Loading";
import { NoData } from "../components/NoData";
import { i18n } from "../utils/i18n";

export default class HomeScreen extends React.Component {
	async componentDidMount() {
		await homeContainer.getCurrentMatch();
	}

	renderView(hc) {
		const { headerMatch, noHeaderMatch, loading, error } = hc.state;
		const showNoData = ((!loading && !headerMatch) && noHeaderMatch) || error;
		const showMatch = (!loading && !noHeaderMatch) && headerMatch;

		return (
			<Wrapper container>
				<TouchableHighlight
					underlayColor="transparent"
					style={styles.header}
					onPress={() => this.props.navigation.navigate("Matches")}>
					<View>
						{loading && <Loading transparent />}
						{showMatch && <HeaderMatch match={headerMatch} />}
						{showNoData && <NoData message={i18n.t("Global.noCurrentMatch")} />}
					</View>
				</TouchableHighlight>
				<TabsNavigator />
			</Wrapper>
		);
	}

	render = () => (
		<Subscribe to={[homeContainer]}>
			{() => this.renderView(homeContainer)}
		</Subscribe>
	);
}

const styles = StyleSheet.create({
	header: {
		alignSelf: "center",
		justifyContent: "center",
		height: heightPercentageToDP("25%")
	}
});
