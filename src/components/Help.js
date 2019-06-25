import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Dialog } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
}));

const Help = () => {
    const [show, setShow] = useState(false);

    const classes = useStyles();

    const onButtonClick = () => {
        setShow(true);
    };

    const onClose = () => {
        setShow(false);
    };

    return (
        <div>
            <Button onClick={onButtonClick}> ? </Button>
            <Dialog className={classes.x} open={show} onClose={onClose}>
                Hello
            </Dialog>
        </div>
    );
};

export default Help;
