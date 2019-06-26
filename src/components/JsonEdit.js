/*
 * JsonEdit gives the user of importing/exporting rule setups,
 *      through a dialog and various states.
 * 
 */

// Import statments
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
import Edit from "@material-ui/icons/Edit"
import uuidv4 from "uuid/v4";

// Component
// ============================================================================

const JsonEdit = props => {

    // Props and Styles
    const { titleStyle, buttonStyle, rules, setRules } = props;

    // Constant representing stringify'd data
    const strJSON = JSON.stringify(rules, ["inRule", "outRule"]);

    // State hooks
    const [show, setShow] = useState(false);
    const [text, setText] = useState(strJSON);

    // Handlers
    // ========================================================================
    const onButtonClick = () => {
        setShow(true);
        setText(strJSON);
    };

    const onClose = () => {
        setShow(false);
        setText(strJSON);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
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
        setRules(parsed);
        setShow(false);
        setText(strJSON);
    };

    // Component return 
    // ========================================================================
    return (
        <div>
            <Tooltip title="Import/Copy" placement="top">
                <Button
                    variant="outlined"
                    className={buttonStyle}
                    onClick={onButtonClick}
                >
                    <Edit/>
                </Button>
            </Tooltip>

            <Dialog open={show} onClose={onClose}>
                <DialogTitle>
                    <Typography
                        variant="h4"
                        component="p"
                        align="center"
                        className={titleStyle}
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
                            onClick={handleCopy}
                            style={{ justifyContent: "center" }}
                        >
                            Copy
                        </Button>
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
