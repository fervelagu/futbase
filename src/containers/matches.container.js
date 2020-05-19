import { Container } from "unstated";
import Http from "../utils/api/http.request";
import ENV from "../ENV";

class MatchesContainer extends Container {
	state = {
		loading: false,
		error: false,
		matches: null
	};

	async getMatches() {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/match`);

		if (res.success) {
			await this.setState({
				loading: false,
				matches: res.data
			});
		} else await this.setState({ loading: false, error: true });
	}
}

const matchContainer = new MatchesContainer();
export default matchContainer;
