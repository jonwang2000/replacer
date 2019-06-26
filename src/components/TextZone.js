/*
 *  TextZone consists of the input and output text fields.
 *      It only should be inputting data from the input field.
 */

// Import statements
import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// Styling
// ============================================================================
const useStyles = makeStyles(theme => ({
	arrow: {
		position: "relative",
        top: "10px",
        right: "3px"
    },
    inputText: {
        width: "100%",
        paddingBottom: 0
    }
}));

// *** Don't touch too much ***
// This is apparently how you deal with styling a textarea
const CSSTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "grey"
		},
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: "grey"
			},
			"&.Mui-focused fieldset": {
				borderColor: "grey"
			}
		}
	}
})(TextField);

// Component
// ============================================================================

const TextZone = props => {
    
    // Props and Styles
	const { inputText, inputHandle, outputText } = props;
	const classes = useStyles();

    // Component Return
	return (
		<Grid container spacing={4} alignItems="center" justify="center">
			<Grid item xs >
				<CSSTextField
					id="standard-multiline-flexible"
					label="Input"
					multiline
					rows="4"
					rowsMax="8"
					value={inputText}
					onChange={inputHandle}
					margin="normal"
					variant="outlined"
                    className={classes.inputText}
				/>
			</Grid>
			<Grid item className={classes.arrow} xs={1}>
				<ArrowForwardIos color="inherit" />
			</Grid>
			<Grid item xs>
				<CSSTextField
					id="standard-multiline-flexible"
					label="Output"
					multiline
					rows="4"
					rowsMax="8"
					value={outputText}
					readOnly
					margin="normal"
					variant="outlined"
					className={classes.inputText}
				/>
			</Grid>
		</Grid>
	);
};

export default TextZone;
