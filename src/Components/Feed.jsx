import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Feed({ open }) {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },

          width: { xs: "400px", md: "150px" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          open={open}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          p: 2,
        }}
      >
        <Typography
          sx={{
            color: "white",
            pl: 1,
            fontSize: "20px",
            fontWeight: "bold",
            variant: "h5",
            mb: 2,
            position: "fixed",
            top: "3.3rem",
          }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503", fontSize: "20px" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
