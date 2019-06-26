import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Tooltip
} from "@material-ui/core";
import HelpOutline from "@material-ui/icons/HelpOutline";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    marginer: {
        marginTop: theme.spacing(2)
    }
}));

const Help = props => {
    const [show, setShow] = useState(false);

    const { className } = props;
    const classes = useStyles();

    const onButtonClick = () => {
        setShow(true);
    };

    const onClose = () => {
        setShow(false);
    };

    return (
        <div>
            <Tooltip title="Help" placement="top">
                <Button
                    onClick={onButtonClick}
                    className={className}
                    variant="outlined"
                >
                    <HelpOutline />
                </Button>
            </Tooltip>
            <Dialog open={show} onClose={onClose}>
                <DialogTitle>
                    <Typography
                        variant="h4"
                        align="center"
                        className={classes.marginer}
                    >
                        Help/About
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography paragraph="true" variant="body1">
                        This is a React app meant change and manipulate text
                        based on user-defined rules using Material-UI for UI.
                    </Typography>
                    <Typography paragraph="true" variant="body1">
                        To use, simply create a rule, place in what you want
                        replaced to the input field, and what you want to
                        replace it in the output field.
                    </Typography>
                    <Typography variant="body1">
                        Replacer works through rules top down, so outputs that
                        match later inputs will also be replaced.
                    </Typography>
                    <DialogActions>
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

export default Help;
