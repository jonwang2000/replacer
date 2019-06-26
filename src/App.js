/*
 *  App.js is the primary application.
 *  Nothing too out of ordinary.
 *  State:  inputText - stores current text in the input field
 *			rules - contains array of objects with inRule, outRule, id, turned into functions
 *					by functionArr constant.
 *
 */

// Import statements
// ============================================================================
import React, { useState } from "react";
import TextZone from "./components/TextZone";
import ReplaceRules from "./components/ReplaceRules";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

import uuidv4 from "uuid/v4";
import { Grid } from "@material-ui/core";

// Styles 
// ============================================================================
const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "70px",
        paddingBottom: "100px"
    }
}));

// Component
// ============================================================================

const App = () => {

    // Styles
    const classes = useStyles();

    // State hook setup
    const [inputText, setInputText] = useState("");
    const [rules, setRules] = useState([
        { inRule: "", outRule: "", id: uuidv4() }
    ]);

    // Handlers and Helpers
    // ========================================================================

    // For input change
    const inputHandle = event => {
        setInputText(event.target.value);
    };

    // Helper function for assisting RegExp with special characters
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
    }

    // Creates an array of functions based on the current rules
    const functionArr = rules
        .filter(rule => rule.inRule !== "")
        .map(rule => text =>
            text.replace(
                // Changed so that special characters no longer cause app to crash
                new RegExp(escapeRegExp(rule.inRule), "g"),
                rule.outRule
            )
        );

    // Runs the rules against a copy of inputText
    let transitionText = inputText;
    functionArr.forEach(func => {
        transitionText = func(transitionText);
    });

    // Set output to transformed text
    const output = transitionText;

    // Component Return
    // ========================================================================

    return (
        <Container className={classes.root} component="main" maxWidth="sm">
            <CssBaseline />

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" align="center">
                        Replacer
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextZone
                        inputText={inputText}
                        inputHandle={inputHandle}
                        outputText={output}
                    />
                </Grid>

                <Grid item xs={12}>
                    <ReplaceRules rules={rules} setRules={setRules} />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body1" component="p" align="center">
                        Made with React and Material UI
                        <br />
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() =>
                                window.open(
                                    "https://github.com/jonwang2000/replacer",
                                    "_blank"
                                )
                            }
                        >
                            Github link
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
