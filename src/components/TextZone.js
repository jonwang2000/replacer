/*
 *  TextZone consists of the input and output text fields.
 *  It only should be inputting data from the input field.
 */

import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Styling for arrow
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

// Unholy ground, used for Textfields
// ****** DON'T MESS WITH THIS I NEED TO DO MORE RESEARCH *******
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

const TextZone = props => {
	const { inputText, inputHandle, outputText } = props;

	const classes = useStyles();

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
