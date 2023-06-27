
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Box } from '@mui/material';

import ChannelDetail from './Components/ChannelDetail';
import Navbar from './Components/Navbar';
import VedioDetails from './Components/VedioDetails';
import SearchFeed from './Components/SearchFeed';
import Feed from './Components/Feed';
function App() {
  return (
  
     <BrowserRouter>
     <Box sx={{backgroundColor:'#000'}}>
     <Navbar/>
<Routes>
  <Route path='/' exact element={<Feed/>}/>
  <Route path='/vedio/:id'  element={<VedioDetails/>}/>
  <Route path='/channel/:id'  element={ <ChannelDetail/>}/>
  <Route path='/search/:searchTerm'  element={<SearchFeed/>}/>

</Routes>
</Box>
     </BrowserRouter>
     
     
      

  );
}

export default App;
