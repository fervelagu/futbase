import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Subscribe } from "unstated";
import { Wrapper } from "../components/Wrapper";
import { HeaderMatch } from "../components/HeaderMatch";
import TabsNavigator from "../navigation/HomeTabsNavigator";
import homeContainer from "../containers/home.container";
import { Loading } from "../components/Loading";

export default class HomeScreen extends React.Component {
	async componentDidMount() {
		await homeContainer.getCurrentMatch();
	}

	renderView(hc) {
		const { headerMatch } = hc.state;
		return (
			<Wrapper>
				<TouchableHighlight
					underlayColor="transparent"
					style={styles.header}
					onPress={() => this.props.navigation.navigate("Matches")}>
					{headerMatch ?
						<HeaderMatch match={headerMatch} />
						:
						<Loading transparent />
					}
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
