import React from "react";
import { StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { HeaderMatch } from "../components/HeaderMatch";
import TabsNavigator from "../navigation/HomeTabsNavigator";
import { Subscribe } from "unstated";
import homeContainer from "../containers/home.container";
import { Loading } from "../components/Loading";

export default class HomeScreen extends React.Component {
	async componentDidMount() {
		await homeContainer.getCurrentMatch();
	}

	render() {
		const { headerMatch } = homeContainer.state;
		return (
			<Subscribe to={[homeContainer]}>
				{() => (
					<Wrapper>
						<TouchableHighlight
							underlayColor="transparent"
							style={styles.header}
							onPress={() => this.props.navigation.navigate("Matches")}>
							{headerMatch ? (
								<HeaderMatch match={headerMatch} />
							) : (
								<Loading transparent />
							)}
						</TouchableHighlight>
						<TabsNavigator />
					</Wrapper>
				)}
			</Subscribe>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: Dimensions.get("screen").height / 4
	}
});
