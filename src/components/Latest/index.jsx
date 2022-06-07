import React from "react";
import { LatestBox, LatestContainer, LatestCarousel } from "./Latest.style";
// Import Swiper React components

import { Paper, Button } from "@mui/material";

const Latest = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <LatestContainer maxWidth="false">
      <LatestBox>
        <LatestCarousel height="100%">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </LatestCarousel>
      </LatestBox>
    </LatestContainer>
  );
};

function Item(props) {
  return (
    <Paper style={{height: '100%', backgroundColor:'red'}}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Latest;
