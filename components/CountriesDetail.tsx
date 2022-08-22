/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const CountriesDetail = () => {
	return (
		<div className='m-10 max-w-xs'>
			<button
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
			<div className='mt-20'>
				<img
					className='h-full w-full'
					src='https://flagcdn.com/et.svg'
					alt='ethiopian flag'
				/>
			</div>
			<div className='font-bole mt-10 text-sm font-bold text-blue-3'>
				<div>
					<h1 className='mb-5 text-2xl '>Ethiopia</h1>
					<p className='mb-2 '>
						Native Name: <span className='text-gray-2'>native name</span>
					</p>
					<p className='mb-2'>
						Population: <span className='text-gray-2'>native name</span>
					</p>
					<p className='mb-2'>
						Region: <span className='text-gray-2'>native name</span>
					</p>
					<p className='mb-2'>
						Sub Region: <span className='text-gray-2'>native name</span>
					</p>
					<p className='mb-2'>
						Capital: <span className='text-gray-2'>native name</span>
					</p>
				</div>
				<div className='mt-10'>
					<p className='mb-2'>
						Top Level Domain: <span className='text-gray-2'>native name</span>
					</p>
					<p className='mb-2'>
						Currencies: <span className='text-gray-2'>native name</span>
					</p>
					<p className='mb-2'>
						Languages: <span className='text-gray-2'>native name</span>
					</p>
				</div>
				<div className='mt-10'>
					<h2 className='text-lg'>Border Countries:</h2>
					<div className='mt-4 flex gap-2'>
						<button
							className='rounded bg-white px-5 py-2 shadow-lg drop-shadow-2xl'
							type='button'
						>
							France
						</button>
						<button
							className=' rounded bg-white px-5 py-2 shadow-lg drop-shadow-2xl'
							type='button'
						>
							France
						</button>
						<button
							className='rounded bg-white px-5 py-2 shadow-lg drop-shadow-2xl'
							type='button'
						>
							France
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountriesDetail;
