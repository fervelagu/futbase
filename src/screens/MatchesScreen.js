import React from "react";
import { StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { HeaderMatch } from "../components/HeaderMatch";
import { Loading } from "../components/Loading";
import { Subscribe } from "unstated";
import matchContainer from "../containers/matches.container";
import Carousel from "react-native-snap-carousel";

export default class MatchesScreen extends React.Component {
	async componentDidMount() {
		await matchContainer.getMatches();
	}

	onChangeMatch() {
		console.log("onChangeMatch");
	}

	_renderItem(item, index) {
		<HeaderMatch match={item} />;
	}

	onRender(mc) {
		const { matches } = mc.state;
		console.log(matches);
		return (
			<Wrapper>
				{matches && matches.length ? (
					<Carousel
						data={matches}
						renderItem={this._renderItem}
						// firstItem={matches[0]}
						itemWidth={Dimensions.get("screen").width}
						sliderWidth={Dimensions.get("screen").width}
						onSnapToItem={this.onChangeMatch}
						ref={(c) => (this._carousel = c)}
					/>
				) : (
					<Loading />
				)}
			</Wrapper>
		);
	}

	render = () => (
		<Subscribe to={[matchContainer]}>
			{(matchContainer) => this.onRender(matchContainer)}
		</Subscribe>
	);
}

const styles = StyleSheet.create({});
