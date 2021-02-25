import { Container } from "unstated";
import Http from "../utils/api/http.request";
import ENV from "../ENV";

class PlayersContainer extends Container {
    state = {
        loading: false,
        error: false,
        players: null
    };

    async getPlayers() {
        await this.setState({ loading: true });
        const res = await Http.get(`${ENV.API_URL}team/${ENV.TEAM_ID}/player?mobile=true`);

        if (res.success) {
            await this.setState({
                loading: false,
                players: res.data
            });
        } else await this.setState({ loading: false, error: true, players: [] });
    }
}

const playerContainer = new PlayersContainer();
export default playerContainer;
