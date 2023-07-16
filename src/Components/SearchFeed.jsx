import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [video, setVideos] = useState([]);
const {searchTerm}= useParams();
  useEffect(() => {


    fetchFromAPI(`search?part=s nippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        search results for: <span style={{ color: "#FC1503" }}>{searchTerm}</span>video
      </Typography>

      <Videos video={video} />
    </Box>
  );
};

export default SearchFeed;