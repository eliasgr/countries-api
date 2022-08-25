/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { CountryType } from '../types/CountryType';
import router from 'next/router';

const CountriesDetail = (country: CountryType) => {
	return (
		<div className='m-10 mx-auto  max-w-xs md:max-w-full '>
			<button
				onClick={() => router.push('/')}
				type='button'
				className='rounded-md bg-white px-5 py-2 text-blue-3 shadow-2xl drop-shadow-2xl  '
			>
				<span className='inline-block pr-2 align-middle'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M7 16l-4-4m0 0l4-4m-4 4h18'
						/>
					</svg>
				</span>
				Back
			</button>
			<div className='items-center justify-between  md:flex  '>
				<div className='mt-20 flex-grow-0 md:mt-10  md:w-2/5 '>
					<img
						className='h-full w-full'
						src={country.flags.svg}
						alt={`flag of ${country.name}`}
					/>
				</div>
				<div className='font-bole mt-10 text-sm  font-bold text-blue-3 md:w-1/2'>
					<div className='items-center justify-between md:flex'>
						<div>
							<h1 className='mb-5 text-2xl '>{country.name}</h1>
							<p className='mb-2 '>
								Native Name:{' '}
								<span className='text-gray-2'>{country.nativeName}</span>
							</p>
							<p className='mb-2'>
								Population:{' '}
								<span className='text-gray-2'>{country.population}</span>
							</p>
							<p className='mb-2'>
								Region: <span className='text-gray-2'>{country.region}</span>
							</p>
							<p className='mb-2'>
								Sub Region:{' '}
								<span className='text-gray-2'>{country.subRegion}</span>
							</p>
							<p className='mb-2'>
								Capital: <span className='text-gray-2'>{country.capital}</span>
							</p>
						</div>
						<div className='mt-10'>
							<p className='mb-2'>
								Top Level Domain:{' '}
								<span className='text-gray-2'>{country.topLevelDomain}</span>
							</p>
							<p className='mb-2'>
								Currencies:{' '}
								<span>
									[
									{country.currencies.map((currency, index) => (
										<span key={index} className='text-gray-2'>
											{currency.name}
										</span>
									))}
									]
								</span>
							</p>
							<p className='mb-2'>
								Languages:{' '}
								<span className='text-gray-2'>
									[
									{country.languages.map((language, index) => (
										<span key={index}>{language.name}</span>
									))}
									]
								</span>
							</p>
						</div>
					</div>
					<div className='mt-10 items-center  gap-2  md:flex'>
						<div className='text-lg'>Border Countries:</div>
						<div className='mt-4 grid grid-cols-3 gap-1 md:grid-cols-6'>
							{country.borders?.map((border, index) => (
								<button
									key={index}
									className='rounded bg-white  shadow-lg drop-shadow-2xl md:px-5 md:py-2'
									type='button'
								>
									{border}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountriesDetail;
