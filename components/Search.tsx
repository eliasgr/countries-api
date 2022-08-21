const Search = () => {
	return (
		<>
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
					type='search'
					className='block w-full rounded-lg p-4 pl-12 shadow-md outline-none focus:ring-2 focus:ring-blue-3 '
					placeholder='Search for countries...'
				/>
			</div>
		</>
	);
};

export default Search;
