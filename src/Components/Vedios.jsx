import React from 'react';
import { Stack,Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

 
const Vedios = ({ vedios }) => {
  if (!Array.isArray(vedios)) {
    // Handle the case where vedios is not a valid array
    return null;
  }

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent="start" gap={2}>
      {vedios.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  );
}

export default Vedios;
