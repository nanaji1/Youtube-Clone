import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", sd: { flexDirection: "row" } }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "white",
          pl: 1,
          position: "fixed",
          top: "2.6rem",
          mb: 2,
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#f31503", fontSize: "26px" }}>{searchTerm}</span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
