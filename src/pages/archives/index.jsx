import React from "react";
import { Button } from "@mui/material";
import Fab from "@mui/material/Fab";

import EditIcon from "@mui/icons-material/Edit";

import Banner from "../../components/Banner";
import Latest from "../../components/Latest";
import ExploreCollection from "../../components/ExploreCollection";
import { toggle } from "../../components/Editor/editorSlice";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../../components/Editor";
import About from "../../components/About";
import FeaturedCollection from "../../components/FeaturedCollection";
import Timeline from "../../components/Timeline";
import Map from "../../components/Map";
const Archives = () => {
  const dispatch = useDispatch();
  return (
    <>
     
      <Fab
        onClick={(_) => {
          dispatch(toggle());
        }}
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
        color="secondary"
        aria-label="edit"
      >
        <EditIcon />
      </Fab>
      <Editor />
    </>
  );
};

export default Archives;
