/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { CountryType } from '../types/CountryType';

const Country = (country: CountryType) => {
	return (
		<Link href={`/${country.name}`}>
			<div className='my-10 mx-auto h-[320px] max-w-xs cursor-pointer overflow-hidden rounded-md bg-white shadow-lg '>
				<div className='h-2/5 w-full'>
					<img
						className='h-full w-full'
						src={country.flags.svg}
						alt={country.name}
					/>
				</div>
				<div className='m-5 font-bold text-blue-3'>
					<h3 className='pb-4 text-lg  '>{country.name}</h3>
					<p>
						Population:
						<span className='pl-1 text-gray-2'>{country.population}</span>
					</p>
					<p>
						Region:<span className='pl-1 text-gray-2'>{country.region}</span>
					</p>
					<p>
						Capital:<span className='pl-1 text-gray-2'>{country.capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Country;
