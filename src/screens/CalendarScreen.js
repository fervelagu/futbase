import React from "react";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { Subscribe } from "unstated";
import moment from "moment";
import { COLORS } from "../styles";
import homeContainer from "../containers/home.container";

export default class CalendarScreen extends React.Component {
    calendarTheme = {
        calendarBackground: COLORS.TEAM_PRIMARY,
        dayTextColor: COLORS.WHITE,
        monthTextColor: COLORS.WHITE,
        todayTextColor: COLORS.TEAM_SECONDARY,
    }

    constructor(props) {
        super(props);

        this.state = {
            dates: {}
        }
    }

    async componentDidMount() {
        homeContainer.getCalendarMatches();
        const { matches } = homeContainer.state;

        let _dates = {}
        matches.map(item => {
            _dates[moment(item.globalDate).format('YYYY-MM-DD')] = {
                id: item.id,
                customStyles: {
                    // backgroundSrc: IMGS.getTeamLogo(item),
                    container: {
                        backgroundColor: COLORS.TEAM_SECONDARY
                    },
                    text: {
                        color: COLORS.TEAM_PRIMARY,
                        fontWeight: 'bold'
                    }
                }
            }
        })

        homeContainer.setState(state => ({
            ...state,
            dates: _dates
        }))
    }

    openDetail = matchId => {
        this.props.navigation.navigate("MatchCalendar", {
            matchId: matchId
        });
    };

    renderView(hc) {
        const { dates } = hc.state;

        LocaleConfig.locales['es'] = {
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene.', 'Feb.', 'Mar', 'Abr', 'May', 'Jun', 'Jul.', 'Ago', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.']
        };

        LocaleConfig.defaultLocale = 'es';

        return (
            <CalendarList
                removeClippedSubviews={false}
                current={moment().format('YYYY-MM-DD')}
                minDate={moment().startOf('year').format('YYYY-MM-DD')}
                pastScrollRange={4}
                futureScrollRange={7}
                scrollEnabled={true}
                showScrollIndicator={true}
                theme={this.calendarTheme}
                markingType={'custom'}
                markedDates={dates}
                onDayPress={(day) => {
                    if (this.state.dates[String(day.dateString)])
                        this.openDetail(this.state.dates[String(day.dateString)].id)
                }}
            />
        )
    }

    render = () => (
        <Subscribe to={[homeContainer]}>
            {() => this.renderView(homeContainer)}
        </Subscribe>
    )
}