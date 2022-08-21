const Header = () => {
	return (
		<>
			<div className='flex h-20 justify-between bg-white p-5 shadow-md'>
				<div className='text-3xl font-bold text-blue-3'>
					<h1>Where in the world ?</h1>
				</div>
				<div className=' flex items-center space-x-2  text-2xl font-semibold text-blue-3 '>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
							/>
						</svg>
					</span>
					<span>Dark Mode</span>
				</div>
			</div>
		</>
	);
};

export default Header;
