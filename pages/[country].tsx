/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import CountriesDetail from '../components/CountriesDetail';
import { CountryType } from '../types/CountryType';
import { CountryProps } from '../types/CountryPropsType';
import Header from '../components/Header';

const CountryDetail = ({ countries }: CountryProps) => {
	console.log('Client Side: ', countries);
	return (
		<>
			<Header />

			{countries?.map((country, index) => (
				<CountriesDetail key={index} {...country} />
			))}
		</>
	);
};
export const getServerSideProps: GetServerSideProps = async (
	pageContext: any
) => {
	const countryName: string = pageContext.query.country;
	const apiUrl = `https://restcountries.com/v2/name/${countryName}?fullText=true`;

	const apiResponse = await fetch(apiUrl).then((res) => res.json());
	// console.log(apiResponse);
	const countries: CountryType[] = apiResponse;
	return {
		props: {
			countries: countries,
		},
	};
};
export default CountryDetail;
