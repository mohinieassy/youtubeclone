import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"
const ChannelCard = ({ channelDetail,marginTop }) => {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:{xs:'356px',md:'320px'},
            height:'326px',
            margin:'auto',
            marginTop,
        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50px', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}>

                    </CardMedia>
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontsize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscribercount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscribercount).toLocaleString()} subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard