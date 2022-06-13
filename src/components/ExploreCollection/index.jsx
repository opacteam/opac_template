import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled, useTheme } from "@mui/material/styles";
import { Container, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  const theme = useTheme();
  const ec = useSelector(
    (state) => state.template.pages.home.exploreCollection
  );
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { heading, description, items } = ec;
  return (
    <Container>
      {" "}
      <Box sx={{ width: "100%", minHeight: 829 }}>
        <Masonry columns={matches ? 2 : 3} spacing={2}>
          {items.map((item, index) => (
            <div key={index}>
              <Label>{index + 1}</Label>
              <img
                src={`${item.thumbnail}?w=162&auto=format`}
                srcSet={`${item.thumbnail}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}
