import React, { useState } from "react";

import {
    Tooltip,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Typography
} from "@material-ui/core";

import uuidv4 from "uuid/v4";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    marginer: {
        marginTop: theme.spacing(2)
    }
}));

const JsonEdit = props => {
    const { className, rules } = props;
    const classes = useStyles();

    const [show, setShow] = useState(false);

    const strJSON = JSON.stringify(rules, ["inRule", "outRule"]);

    const [text, setText] = useState(strJSON);

    const onButtonClick = () => {
        setShow(true);
        setText(strJSON);
    };

    const onClose = () => {
        setShow(false);
        setText(strJSON);
    };

    const handleChange = e => {
        setText(e.target.value);
    };

    const handleImport = () => {
        let parsed;
        try {
            parsed = JSON.parse(text);
        } catch (e) {
            alert("Invalid Input.");
            setShow(false);
            setText(strJSON);
            return;
        }
        parsed.forEach(entry => (entry.id = uuidv4()));
        console.log(parsed);
        setShow(false);
        setText(strJSON);
    };

    return (
        <div>
            <Tooltip title="Edit Directly" placement="top">
                <Button
                    variant="outlined"
                    className={className}
                    onClick={onButtonClick}
                >
                    JSON
                </Button>
            </Tooltip>

            <Dialog open={show} onClose={onClose}>
                <DialogTitle>
                    <Typography
                        variant="h4"
                        component="p"
                        align="center"
                        className={classes.marginer}
                    >
                        JSON Edit
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography component="p" paragraph={true}>
                        You can import or export your rules here in JSON format.
                    </Typography>
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rows={8}
                        rowsMax={10}
                        fullWidth={true}
                        value={text}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <DialogActions>
                        <Button
                            onClick={handleImport}
                            style={{ justifyContent: "center" }}
                        >
                            Import
                        </Button>
                        <Button
                            onClick={onClose}
                            style={{ justifyContent: "center" }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </DialogContent>
                <br />
            </Dialog>
        </div>
    );
};

export default JsonEdit;
