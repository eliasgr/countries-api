export type CountryModel = {
	name: {
		common: 'string';
		official: 'string';
	};
	population: string;
	region: string;
	subRegion: string;
	capital: string;
	topLevelDomain: string;
	// currencies: string;
	languages: string;
	flags: {
		png: 'https://flagcdn.com/w320/kw.png';
		svg: 'https://flagcdn.com/kw.svg';
	};
};
