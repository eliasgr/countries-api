const Filter = () => {
	return (
		<div className='w-48'>
			<select
				title='SelectRegion'
				className=' mx-5 block max-w-xs rounded-lg py-3 px-4 text-base  text-gray-2 shadow-md outline-none'
			>
				<option selected>Filter by Region</option>
				<option value='US'>Africa</option>
				<option value='CA'>America</option>
				<option value='FR'>Asia</option>
				<option value='DE'>Europe</option>
				<option value='DE'>Oceania</option>
			</select>
		</div>
	);
};

export default Filter;
