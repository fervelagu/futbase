import { Container } from "unstated";
import Http from "../utils/api/http.request";
import ENV from "../ENV";

class PostsContainer extends Container {
	state = {
		loading: false,
		error: false,
		refreshing: false,
		posts: null,
		post: null,
		total: 0
	};

	async getTotalPosts() {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/post/total`);

		if (res.success) {
			await this.setState({
				loading: false,
				total: res.data.total
			});
		} else await this.setState({ loading: false, error: true });
	}

	async getPosts(args) {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/post?skip=${args.skip}&limit=${args.limit}`);

		if (res.success) {
			await this.setState({
				loading: false,
				posts: res.data
			});
		} else await this.setState({ loading: false, error: true });
	}
}

const postContainer = new PostsContainer();
export default postContainer;
