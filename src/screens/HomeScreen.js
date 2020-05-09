import React from "react";
import { StyleSheet } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { HeaderMatch } from "../components/HeaderMatch";
import TabsNavigator from "../navigation/HomeTabsNavigator";
import { Subscribe } from "unstated";
import homeContainer from "../containers/home.container";

export default class HomeScreen extends React.Component {
	async componentDidMount() {
		await homeContainer.getCurrentMatch();
	}

	render() {
		return (
			<Subscribe to={[homeContainer]}>
				{() => (
					<Wrapper>
						<TabsNavigator />
					</Wrapper>
				)}
			</Subscribe>
		);
	}
}

const styles = StyleSheet.create({});
