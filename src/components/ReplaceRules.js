/*
 *  ReplaceRules contains the interface for all rules, including add and clear all.
 *  Probably the most complex component, updateProp is fragile
 *
 */

 // Import Statements
 // ===========================================================================
import React from "react";
import Rule from "./Rule";
import Help from "./Help";
import JsonEdit from "./JsonEdit";
import uuidv4 from "uuid/v4";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Delete from "@material-ui/icons/Delete";

// Styling definitions, used for Buttons and Dialog titles for children
// ============================================================================

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        top: 0
    },
    alignDiv: {
        display: "flex",
        justifyContent: "center"
    },
    entire: {
        padding: 0,
    },
    marginer: {
        marginTop: theme.spacing(2)
    }
}));

// Component
// ============================================================================

const ReplaceRules = props => {

    // Props and styles
    const { rules, setRules } = props;
    const classes = useStyles();

    // Handlers and Helpers
    // ========================================================================

    // Add object to rule array
    const addRule = () => {
        setRules([...rules, { inRule: "", outRule: "", id: uuidv4() }]);
    };

    // Reset rule array to empty
    const clearRules = () => {
        setRules([]);
    };

    // Delete rule at delID (used for specific del buttons)
    const deleter = delID => {
        const newRules = rules.filter(rule => rule.id !== delID);
        setRules(newRules);
    };

    // Abstract function for updating a prop of item with index upid
    const updateProp = (upid, prop, text) => {
        const newRules = rules.map(rule => {
            if (rule.id === upid) {
                rule[prop] = text;
                return rule;
            }
            return rule;
        });
        setRules(newRules);
    };

    // Parse rules array and turn it into Rule components
    const displayRules = rules.map(rule => {
        return (
            <Rule
                inRule={rule.inRule}
                editIn={event =>
                    updateProp(rule.id, "inRule", event.target.value)
                }
                outRule={rule.outRule}
                editOut={event =>
                    updateProp(rule.id, "outRule", event.target.value)
                }
                delRule={() => deleter(rule.id)}
                key={rule.id}
            />
        );
    });

    // Component Return
    // ========================================================================

    return (
        <Container spacing={0} maxWidth="xs" className={classes.entire}>
            <span className={classes.alignDiv}>
                <Help
                    buttonStyle={classes.button}
                    titleStyle={classes.marginer}
                />
                <Tooltip title="Add Rule" placement="top">
                    <Button
                        variant="outlined"
                        className={classes.button}
                        onClick={addRule}
                    >
                        <AddCircleOutline />
                    </Button>
                </Tooltip>
                <Tooltip title="Clear All" placement="top">
                    <Button
                        variant="outlined"
                        className={classes.button}
                        onClick={clearRules}
                    >
                        <Delete />
                    </Button>
                </Tooltip>
                <JsonEdit
                    titleStyle={classes.marginer}
                    buttonStyle={classes.button}
                    rules={rules}
                    setRules={setRules}
                />
            </span>
            {displayRules}
        </Container>
    );
};

export default ReplaceRules;
