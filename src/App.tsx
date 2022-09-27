import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./Components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const showSlider = () => setIsOpen(!isOpen);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Navbar showSlider={showSlider} />
        <Routes>
          <Route path="/" element={<Feed open={isOpen} />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
