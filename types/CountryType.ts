import { LanguageType } from './LanguageType';
import { CurrencyType } from './CurrencyType';

export type CountryType = {
	name: string;
	nativeName: string;
	population: string;
	region: string;
	subRegion: string;
	capital: string;
	topLevelDomain: string;
	currencies: CurrencyType[];
	languages: LanguageType[];
	flags: {
		png: 'https://flagcdn.com/w320/kw.png';
		svg: 'https://flagcdn.com/kw.svg';
	};
};
