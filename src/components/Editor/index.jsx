import React from "react";
import {
  Button,
  Drawer,
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./editorSlice";
import { toggleTheme } from "../../theme/themeSlice";
import { setHeading, setTemplate } from "../../constant";
import { MaterialUISwitch } from "./Editor.style";
import { toggleLanguage } from "../../i18n/languageSlice";
import { JsonEditor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import { updateFrTranslation } from "../../i18n/frTranslation";
import { updateEnTranslation } from "../../i18n/enTranslation";
import axios from "axios";
const Editor = () => {
  const open = useSelector((state) => state.editor.open);
  const TEMPLATE = useSelector((state) => state.template);
  const enTranslation = useSelector((state) => state.enTranslation);
  const frTranslation = useSelector((state) => state.frTranslation);
  const dispatch = useDispatch();

  const exportJSON = (data) => {
    // const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    //   JSON.stringify(data)
    // )}`;
    // const link = document.createElement("a");
    // link.href = jsonString;
    // link.download = "data.json";
    // link.click();
    let api = "hhttps://opac-template-server.onrender.com/api/upload";
    console.log(data);
    axios({
      method: "post",
      url: api,
      data,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <React.Fragment>
      <Drawer
        className="editorDrawer"
        anchor="right"
        sx={{ width: "600px", maxWidth: "60vw" }}
        open={open}
        onClose={(_) => dispatch(toggle())}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            label="Site Name"
            defaultValue={useSelector((state) => state.template.heading)}
            variant="standard"
            onChange={(e) => dispatch(setHeading(e.target.value))}
          />
        </Box>
        <Box>
          <FormGroup>
            <FormControlLabel
              onChange={(_) => dispatch(toggleTheme())}
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              label="Switch theme"
            />
          </FormGroup>
        </Box>
        <Box>
          <FormGroup>
            <FormControlLabel
              onChange={(_) => dispatch(toggleLanguage())}
              control={<Switch sx={{ m: 1 }} defaultChecked />}
              label="Switch Language"
            />
          </FormGroup>
        </Box>
        <Box>
          <Button
            type="button"
            variant="contained"
            onClick={(_) => exportJSON(TEMPLATE)}
          >
            Save Site Settings
          </Button>
        </Box>
        <Box>
          {" "}
          <Button
            type="button"
            variant="contained"
            onClick={(_) => exportJSON(enTranslation)}
          >
            Save English Translation
          </Button>{" "}
        </Box>
        <Box>
          {" "}
          <Button
            type="button"
            variant="contained"
            onClick={(_) => exportJSON(frTranslation)}
          >
            Save French Translation
          </Button>
        </Box>
        <JsonEditor
          value={TEMPLATE}
          onChange={(e) => dispatch(setTemplate(e))}
        />
        <JsonEditor
          value={enTranslation}
          onChange={(e) => dispatch(updateEnTranslation(e))}
        />
        <JsonEditor
          value={frTranslation}
          onChange={(e) => dispatch(updateFrTranslation(e))}
        />
      </Drawer>
    </React.Fragment>
  );
};

export default Editor;
