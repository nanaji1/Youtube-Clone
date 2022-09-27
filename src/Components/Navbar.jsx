import { Stack, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import Searchbar from "./Searchbar";

function Navbar({ showSlider }) {
  return (
    <Stack
      direction="row"
      alignItem="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000000",
        top: 0,
        justifyContent: "space-between",
        height: "50px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Menu
            sx={{
              color: "#fff",
              width: "36px",
              height: "36px",
              mr: 2,
            }}
            onClick={showSlider}
          />
        </Box>
        <Link to="/">
          <img src={logo} alt="logo" height={36} />
        </Link>
      </Box>
      <Searchbar />
    </Stack>
  );
}

export default Navbar;
