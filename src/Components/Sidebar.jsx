import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory, open }) => (
  <Stack
    direction="column"
    sx={{
      overflowY: "auto",
      height: {
        xs: "auto",
        md: "95%",
      },
      flexDirection: { xs: "row", md: "column" },
      display: { xs: open ? "flex" : "none", md: "flex" },
    }}
  >
    {categories.map((Category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(Category.name)}
        style={{
          backgroundColor: Category.name === selectedCategory && "#fc1503",
          paddingTop: 0,
          display: { md: "none" },
          position: { xs: "absolute" },
        }}
        key={Category.name}
      >
        <span
          style={{
            color: Category.name === selectedCategory ? "white" : "red",
            marginRight: "16px",
          }}
        >
          {Category.icon}
        </span>
        <span
          style={{
            color: "white",
            opacity: Category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {Category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
