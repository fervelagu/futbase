import React from 'react';
import { FlatList } from 'react-native';
import { Post } from '../components/Post';
import { IMGS } from '../styles';

export default class PostsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    title: "notice title",
                    img: IMGS.NOTE_DEFAULT,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    likes: 100,
                    onLike: () => console.log(),
                    onShare: () => console.log()
                }
            ],
            refreshing: false,
            total: 0,
            skip: 0,
            limit: 5
        };
    }

    _onRefresh() {
        console.log("refresh...")
    }

    _morePosts() {
        console.log("more posts...");
    }

    _keyExtractor = (index) => index.toString();

    _renderItem(post, index) {
        return (
            <Post
                data={post}
                index={index}
                onPress={() => this.props.navigation.navigate("Detail", { post: post })}
                onLike={post.onLike}
                onShare={post.onShare}
            />
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.posts}
                onRefresh={() => this._onRefresh()}
                keyExtractor={this._keyExtractor}
                refreshing={this.state.refreshing}
                renderItem={({ item, index }) => this._renderItem(item, index)}
                onEndReached={() => this._morePosts()}
                onEndReachedThreshold={0.7}
            />
        )
    }
}
