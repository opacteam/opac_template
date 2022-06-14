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
import JSONEditor from "jsoneditor";
const Editor = () => {
  const open = useSelector((state) => state.editor.open);
  const TEMPLATE = useSelector((state) => state.template);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        sx={{ width: "600px" }}
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

        <JsonEditor
          value={TEMPLATE}
          onChange={(e) => dispatch(setTemplate(e))}
        />
      </Drawer>
    </React.Fragment>
  );
};

export default Editor;
