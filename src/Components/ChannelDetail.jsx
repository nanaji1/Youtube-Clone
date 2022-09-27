import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&=data`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,218,255,1) 0%, rgba(255,0,192,1) 100%)",
            zIndex: 10,
            height: "160px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }}>
            <Videos videos={videos} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
