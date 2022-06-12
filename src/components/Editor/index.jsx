import React from 'react'
import { Button, Drawer, Box, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './editorSlice';
import { toggleTheme } from '../../theme/themeSlice';
import { setHeading } from '../../constant';
import { MaterialUISwitch } from './Editor.style';
import { toggleLanguage } from '../../i18n/languageSlice';
const Editor = () => {
    const open = useSelector((state) => state.editor.open);
    const dispatch = useDispatch();
    return (
        <React.Fragment >
            <Drawer
                anchor='right'

                open={open}
                onClose={_ => dispatch(toggle())}
            >
                <Box

                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}


                >
                    <TextField label="Site Name"
                        defaultValue={useSelector(state => state.template.heading)}
                        variant="standard" onChange={e => dispatch(setHeading(e.target.value))} />


                </Box>
                <Box>
                    <FormGroup>
                        <FormControlLabel onChange={_ => dispatch(toggleTheme())}
                            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                            label="Switch theme"
                        />
                    </FormGroup>


                </Box>
                <Box>
                    <FormGroup>
                        <FormControlLabel onChange={_ => dispatch(toggleLanguage())}
                            control={<Switch sx={{ m: 1 }} defaultChecked />}
                            label="Switch Language"
                        />
                    </FormGroup>


                </Box>
            </Drawer>
        </React.Fragment>
    )
}

export default Editor;