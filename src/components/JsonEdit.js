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

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    marginer: {
        marginTop: theme.spacing(2)
    }
}));

const JsonEdit = props => {
    const [show, setShow] = useState(false);

    const { className, rules } = props;
    const classes = useStyles();

    const onButtonClick = () => {
        setShow(true);
    };

    const onClose = () => {
        setShow(false);
    };

    const handleImport = () => {
        setShow(false);
    }
    
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
                        defaultValue={JSON.stringify(rules,["inRule" , "outRule"])}
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
