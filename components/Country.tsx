/* eslint-disable @next/next/no-img-element */
const Country = () => {
	return (
		<div className='my-10 mx-auto h-96 max-w-xs overflow-hidden rounded-md shadow-lg '>
			<div className='h-2/5 w-full'>
				<img
					className='h-full w-full'
					src='https://flagcdn.com/et.svg'
					alt='ethiopian flag'
				/>
			</div>
			<div className='m-5 font-bold text-blue-3'>
				<h3 className='pb-4 text-lg  '>Ethiopia</h3>
				<p>
					Population:<span className='pl-1 text-gray-2'>110,000,000</span>
				</p>
				<p>
					Region:<span className='pl-1 text-gray-2'>Africa</span>
				</p>
				<p>
					Capital:<span className='pl-1 text-gray-2'>Addis Ababa</span>
				</p>
			</div>
		</div>
	);
};

export default Country;
