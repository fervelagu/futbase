import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Subscribe } from "unstated";
import Carousel from "react-native-snap-carousel";
import { Wrapper } from "../components/Wrapper";
import { HeaderMatch } from "../components/HeaderMatch";
import { Loading } from "../components/Loading";
import matchContainer from "../containers/matches.container";

export default class MatchesScreen extends React.Component {
	async componentDidMount() {
		await matchContainer.getMatches();
	}

	onChangeMatch() {
		console.log("onChangeMatch");
	}

	_renderItem = ({ item, index }) => <HeaderMatch match={item} />

	renderPoll() {

	}

	renderView(mc) {
		const { matches } = mc.state;
		return (
			<Wrapper>
				{!!matches && !!matches.length ? (
					<Carousel
						data={matches}
						renderItem={this._renderItem}
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
			{() => this.renderView(matchContainer)}
		</Subscribe>
	);
}

const styles = StyleSheet.create({});
