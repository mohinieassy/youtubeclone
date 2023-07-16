import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';
const SearchBar = () => {
  const [searchTerm,setSearchTerm]=useState('');
const navigate=useNavigate();
const handlesubmit=(e)=>{
  e.preventDefault();
  if(searchTerm){
navigate(`/search/${searchTerm}`);
setSearchTerm('');
  }
}


  return (
   <Paper component="form"
   onSubmit={handlesubmit}
   sx={{borderRadius:20,
border:'1px solid #e3e3e3',
pl:2,
boxshadow:'none',
mr:{sm:5}

}}>

    <input className='search-bar' placeholder='search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value   )}/>
    <IconButton type='submit' sx={{p:'10px',color:'red'}}>
        <Search/>
    </IconButton>
</Paper>
  )
}

export default SearchBar