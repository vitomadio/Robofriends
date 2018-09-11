import React from 'react';

const SearchBox = ({searchfiel, searchChange}) => {
  return (
   <div>
   	 <input 
      aria-label="Search Robots"
   	 	className="pa3 ba b--green bg-lightest-blue"
   		type="search" 
   		placeholder="Search Robots"
   		onChange={searchChange}
   	/>
   </div>
  );
}

export default SearchBox;