import { Container } from "unstated";
import Http from "../utils/api/http.request";
import ENV from "../ENV";

class HomeContainer extends Container {
	state = {
		loading: false,
		error: false,
		headerMatch: null,
		matches: null,
		tournaments: null,
		tournament: null,
		dates: {},
		i: 0
	};

	async getCurrentMatch() {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/match/current`);

		if (res.success) {
			if (!res.data) {
				await this.setState({
					loading: false,
					headerMatch: null,
					noHeaderMatch: true
				});
			} else {
				await this.setState({
					loading: false,
					noHeaderMatch: false,
					headerMatch: res.data
				});
			}
		} else await this.setState({ loading: false, error: true });
	}

	async getCalendarMatches() {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/match/`);

		if (res.success) {
			await this.setState({
				loading: false,
				matches: res.data
			});
		} else await this.setState({ loading: false, error: true });
	}

	async getTournaments() {
		await this.setState({ loading: true });
		const res = await Http.get(`${ENV.API_URL}tournament?team_id=${ENV.TEAM_ID}`);

		if (res.success) {
			await this.setState({
				loading: false,
				tournaments: res.data
			});
		} else await this.setState({ loading: false, error: true });
	}

	async selectTournament() {
		console.log(this.state.i)
		console.log(this.state.tournaments.length)
		if (this.state.i >= this.state.tournaments.length) return;
		await this.setState({
			tournament: this.state.tournaments[this.state.i]
		});
	}
}

const homeContainer = new HomeContainer();
export default homeContainer;
