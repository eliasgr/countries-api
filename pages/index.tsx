import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Country from '../components/Country';
import Header from '../components/Header';
import { CountryProps } from '../types/CountryPropsType';
import { CountryType } from '../types/CountryType';

const Home = ({ countries }: CountryProps) => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	let filteredcountries = countries.filter((country) =>
		country.name.toLowerCase().includes(searchTerm)
	);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};
	return (
		<>
			<Head>
				<title>Where in the world</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<div className=' items-center justify-between md:flex '>
				{/* <Search /> */}
				<div className='relative my-10 mx-5'>
					<div className='absolute inset-y-0 left-0 flex items-center pl-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-gray-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</div>
					<input
						onChange={handleOnChange}
						type='search'
						className='block w-full rounded-lg p-4 pl-12 shadow-md outline-none focus:ring-2 focus:ring-blue-3 '
						placeholder='Search for countries...'
					/>
				</div>
				{/* <Filter /> */}
				<div className='w-48'>
					<select
						title='SelectRegion'
						className=' mx-5 block max-w-xs rounded-lg py-3 px-4 text-base  text-gray-2 shadow-md outline-none'
					>
						<option value=''>Filter by Region</option>
						<option value='US'>Africa</option>
						<option value='CA'>America</option>
						<option value='FR'>Asia</option>
						<option value='DE'>Europe</option>
						<option value='DE'>Oceania</option>
					</select>
				</div>
			</div>

			<div className='md:grid md:grid-cols-4 '>
				{filteredcountries.map((country, index) => (
					<div key={index}>
						<Country {...country} />
					</div>
				))}
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (
	pageContext: any
) => {
	const pageNumber = pageContext.query.id;
	const apiUrl = 'http://localhost:3000/data-v2.json';

	const apiResponse = await fetch(apiUrl).then((res) => res.json());
	const countries: CountryType[] = apiResponse;
	return {
		props: {
			countries: countries,
		},
	};
};

export default Home;
