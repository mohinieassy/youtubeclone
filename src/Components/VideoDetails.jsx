import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';

 
const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.item[0]));
  }, [id]);
if(!videoDetails?.snippet) return 'Loading';
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetails;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}  ClassName="react-payer" controls/>
         
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {videoDetails.snippet.title}
          </Typography>
         <stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} py={1} px={2}>
<Link to={`/channel/${channelId}`}>
<Typography>

</Typography>
</Link>
         </stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
