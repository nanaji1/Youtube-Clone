import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
function Videos({ videos, direction }) {
  if (!videos?.length) return <p>Loding...</p>;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      className="videos"
      justifyContent="center"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
