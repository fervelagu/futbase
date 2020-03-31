export const SPLASH = require("../../assets/splash.png");
export const BALL_ICON = require("../../assets/icon.png");

export const getTeamLogo = (logo, inactive = false) => {
	switch (logo) {
		case "america":
			if (!inactive) return require("../../assets/teams/america.png");
			else return require("../../assets/teams/inactive/america.png");
		case "veracruz":
			if (!inactive)
				return require("../../assets/teams/veracruz.png");
			else return require("../../assets/teams/inactive/veracruz.png");
		case "lobos":
			if (!inactive) return require("../../assets/teams/lobos.png");
			else return require("../../assets/teams/inactive/lobos.png");
		case "atlas":
			if (!inactive) return require("../../assets/teams/atlas.png");
			else return require("../../assets/teams/inactive/atlas.png");
		case "dorados":
			if (!inactive) return require("../../assets/teams/dorados.png");
			else return require("../../assets/teams/inactive/dorados.png");
		case "cruzazul":
			if (!inactive)
				return require("../../assets/teams/cruzazul.png");
			else return require("../../assets/teams/inactive/cruzazul.png");
		case "guadalajara":
			if (!inactive)
				return require("../../assets/teams/guadalajara.png");
			else
				return require("../../assets/teams/inactive/guadalajara.png");
		case "leon":
			if (!inactive) return require("../../assets/teams/leon.png");
			else return require("../../assets/teams/inactive/leon.png");
		case "monarcas":
			if (!inactive)
				return require("../../assets/teams/monarcas.png");
			else return require("../../assets/teams/inactive/monarcas.png");
		case "monterrey":
			if (!inactive)
				return require("../../assets/teams/monterrey.png");
			else
				return require("../../assets/teams/inactive/monterrey.png");
		case "necaxa":
			if (!inactive) return require("../../assets/teams/necaxa.png");
			else return require("../../assets/teams/inactive/necaxa.png");
		case "pachuca":
			if (!inactive) return require("../../assets/teams/pachuca.png");
			else return require("../../assets/teams/inactive/pachuca.png");
		case "puebla":
			if (!inactive) return require("../../assets/teams/puebla.png");
			else return require("../../assets/teams/inactive/puebla.png");
		case "pumas":
			if (!inactive) return require("../../assets/teams/pumas.png");
			else return require("../../assets/teams/inactive/pumas.png");
		case "queretaro":
			if (!inactive)
				return require("../../assets/teams/queretaro.png");
			else
				return require("../../assets/teams/inactive/queretaro.png");
		case "santos":
			if (!inactive) return require("../../assets/teams/santos.png");
			else return require("../../assets/teams/inactive/santos.png");
		case "tigres":
			if (!inactive) return require("../../assets/teams/tigres.png");
			else return require("../../assets/teams/inactive/tigres.png");
		case "toluca":
			if (!inactive) return require("../../assets/teams/toluca.png");
			else return require("../../assets/teams/inactive/toluca.png");
		case "xolos":
			if (!inactive) return require("../../assets/teams/xolos.png");
			else return require("../../assets/teams/inactive/xolos.png");
		case "mineros":
			if (!inactive) return require("../../assets/teams/mineros.png");
			else return require("../../assets/teams/inactive/mineros.png");
		case "lobos":
			if (!inactive) return require("../../assets/teams/lobos.png");
			else return require("../../assets/teams/inactive/lobos.png");
		case "zacatepec":
			if (!inactive)
				return require("../../assets/teams/zacatepec.png");
			else
				return require("../../assets/teams/inactive/zacatepec.png");
		case "juarez":
			if (!inactive) return require("../../assets/teams/bravos.png");
			else return require("../../assets/teams/inactive/juarez.png");
		case "sanluis":
			if (!inactive) return require("../../assets/teams/sanluis.png");
			else return require("../../assets/teams/inactive/sanluis.png");
		case "uaem":
			if (!inactive) return require("../../assets/teams/uaem.png");
			else return require("../../assets/teams/inactive/uaem.png");
		default:
			return BALL_ICON;
	}
};


