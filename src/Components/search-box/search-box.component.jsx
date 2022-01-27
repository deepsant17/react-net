import React from "react";
import './search-box.styles.css'

let SearchBox = ({placeholder,handlechange})=>{
return  <div>
<input className="search"
type='search' 
placeholder={placeholder} 
onChange={handlechange}/>
</div>
}
export default SearchBox;