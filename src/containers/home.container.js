import { Container } from "unstated";
import Http from "../utils/api/http.request";
import ENV from "../ENV";

class HomeContainer extends Container {
	state = {
		loading: false,
		error: false,
		headerMatch: null,
		matches: null,
		dates: []
	};

	async getCurrentMatch() {
		await this.setState({ loading: true });
		const res = await Http.get(
			`${ENV.API_URL}team/${ENV.TEAM_ID}/match/current`
		);

		if (res.success) {
			await this.setState({
				loading: false,
				headerMatch: res.data
			});
		} else await this.setState({ loading: false, error: true });
	}

	async getAllMatches() {
		await this.setState({ loading: true });
		const res = await Http.get(
			`${ENV.API_URL}team/${ENV.TEAM_ID}/match/`
		);

		if (res.success) {
			await this.setState({
				loading: false,
				matches: res.data
			});
		} else await this.setState({ loading: false, error: true });
	}
}

const homeContainer = new HomeContainer();
export default homeContainer;
