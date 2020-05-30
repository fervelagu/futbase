import { Container } from "unstated";
import Http from "../utils/api/http.request";
import ENV from "../ENV";

class VideosContainer extends Container {
	state = {
		loading: false,
		error: false,
		refreshing: false,
		videos: null,
		total: 0
	};

	async getTotalVideos() {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/video/total`);

		if (res.success) {
			await this.setState({
				loading: false,
				total: res.data.total
			});

		} else await this.setState({ loading: false, error: true });
	}

	async getVideos(args) {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/video?skip=${args.skip}&limit=${args.limit}`);

		if (res.success) {
			await this.setState({
				loading: false,
				videos: res.data
			});
		} else await this.setState({ loading: false, error: true });
	}
}

const videosContainer = new VideosContainer();
export default videosContainer;
