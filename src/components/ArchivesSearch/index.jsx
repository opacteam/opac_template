import React, { useState } from "react";
import { Paper, InputBase, Button, Typography, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ArchivesSearch = () => {
  const { t } = useTranslation();
  const initialState = [
    { key: 0, label: "Maps/Plans", active: false },
    { key: 1, label: "Photographs", active: false },
    { key: 2, label: "Textual Records", active: false },
    { key: 3, label: "Oral Histories", active: false },
  ];
  const [chipData, setChipData] = useState(initialState);
  const handleClick = (key) => {
    let data = chipData.map((e, i) => {
      if (i === key) {
        e.active = !e.active;
      }
      return e;
    });

    setChipData(data);
  };

  const toggleIcon = (key, active) => {};

  return (
    <>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",

          boxShadow: "2px 4px 2px 0px rgba(1,1,1,0.5)",
        }}
      >
        <InputBase
          style={{
            height: "55px",
            fontSize: "1.2rem",
          }}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter your search"
          inputProps={{ "aria-label": "enter your search" }}
        />
        <Button
          style={{
            height: "55px",
            borderTop: "0",
            borderTopLeftRadius: "0",

            borderBottomLeftRadius: "0",
          }}
          type="submit"
          aria-label="search"
          variant="contained"
        >
          Search
        </Button>
      </Paper>
      <Typography
        component="p"
        style={{
          marginTop: "20px",
          color: "black",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        {t("searchIncludeKeyword")}
      </Typography>
      <Paper
        sx={{
          border: "none",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          let icon;

          return (
            <ListItem key={data.key}>
              <Chip
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                color="primary"
                variant={data.active ? "filled" : "outlined"}
                label={data.label}
                onClick={(_) => handleClick(data.key)}
                deleteIcon={data.active ? <ClearIcon /> : <AddIcon />}
                onDelete={(_) => toggleIcon(data.key, data.active)}
              />
            </ListItem>
          );
        })}
      </Paper>
    </>
  );
};

export default ArchivesSearch;
