import React from "react";
import { FlatList } from "react-native";
import { Post } from "../components/Post";
import { NoData } from "../components/NoData";
import postContainer from "../containers/post.container";
import { Subscribe } from "unstated";

export default class PostsScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			skip: 0,
			limit: 5
		};
	}

	async componentDidMount() {
		await postContainer.getTotalPosts();
		this.getPosts({
			skip: 0,
			limit: this.state.limit
		});
	}

	async getPosts(args) {
		await postContainer.getPosts({
			skip: args.skip,
			limit: args.limit,
			accumulate: args.accumulate != undefined ? args.accumulate : true
		});
	}

	_onRefresh() {
		this.getPosts({
			skip: 0,
			limit: this.state.limit,
			accumulate: false
		});
	}

	_morePosts() {
		let { skip, limit } = this.state;

		skip += limit;

		if (skip < postContainer.state.total) {
			this.getPosts({
				skip: skip,
				limit: limit
			});
		}
	}

	_keyExtractor = (index) => index.toString();

	_renderItem(post, index) {
		return (
			<Post
				data={post}
				index={index}
				onPress={() => this.props.navigation.navigate("Detail", { post: post })}
				onLike={this.onLike}
				onShare={this.onShare}
			/>
		);
	}

	renderView() {
		const { posts, refreshing } = postContainer.state;
		if (!posts || !posts.length) return <NoData />;
		return (
			<FlatList
				data={posts}
				onRefresh={() => this._onRefresh()}
				keyExtractor={this._keyExtractor}
				refreshing={refreshing}
				renderItem={({ item, index }) => this._renderItem(item, index)}
				onEndReached={() => this._morePosts()}
				onEndReachedThreshold={0.7}
			/>
		);
	}

	render = () => <Subscribe to={[postContainer]}>{() => this.renderView()}</Subscribe>;
}
