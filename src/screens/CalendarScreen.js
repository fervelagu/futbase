import React from 'react';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import moment from "moment";
import { COLORS, IMGS } from "../styles"
import { matches } from '../constants/matches';
import { TEAM_NAME } from '../constants/TeamConfig';

export default class CalendarScreen extends React.Component {
    calendarTheme = {
        calendarBackground: COLORS.TEAM_PRIMARY,
        dayTextColor: COLORS.WHITE,
        monthTextColor: COLORS.WHITE,
        todayTextColor: COLORS.TEAM_SECONDARY,
    }

    getTeamImg(match) {
        const rivalAsset = match.localAsset == TEAM_NAME ? match.visitorAsset : match.localAsset;
        if (match.visitor_url || match.local_url) {
            const rivalAssetUrl = match.localAsset == TEAM_NAME ? match.visitor_url : match.local_url;
            return { uri: rivalAssetUrl };
        } else return IMGS.getTeamLogo(rivalAsset);
    }

    constructor(props) {
        super(props);

        this.state = {
            dates: {}
        }
    }

    async componentDidMount() {
        const _matches = matches;

        let _dates = {}
        _matches.map((item, index) => {
            _dates[moment(item.globalDate).format('YYYY-MM-DD')] = {
                id: item.id,
                customStyles: {
                    backgroundSrc: this.getTeamImg(item),
                    container: {
                        alignItems: 'flex-start'
                    },
                    text: {
                        color: COLORS.TEAM_SECONDARY,
                        fontWeight: 'bold',
                        fontSize: 12,
                    }
                }
            }
        })

        this.setState(state => ({
            ...state,
            dates: _dates
        }))
    }

    openDetail = (matchId) => {
        this.props.navigation.navigate("MatchCalendar", {
            matchId: matchId
        });
    };

    render() {
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
                pastScrollRange={2}
                futureScrollRange={7}
                scrollEnabled={true}
                showScrollIndicator={true}
                theme={this.calendarTheme}
                markingType={'custom'}
                markedDates={this.state.dates}
                onDayPress={(day) => {
                    if (this.state.dates[String(day.dateString)])
                        this.openDetail(this.state.dates[String(day.dateString)].id)
                }}
            />
        )
    }
}