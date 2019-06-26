/*
 *  Rule contains a single rule: the input, the output, and the delete button
 *  Fairly simple component relying on ReplaceRules for logic/functions
 *
 */

// Import statements
import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// styles
// ============================================================================
const useStyles = makeStyles(theme => ({
	ruleDiv: {
		display: "flex",
		alignItems: "center"
	},
	button: {
		right: 5
	}
}));

// Custom Colors for textfield
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

const Rule = props => {

	// Props and Styles
	const { inRule, editIn, outRule, editOut, delRule } = props;
    const classes = useStyles();

    // Component Return
    // ========================================================================
	return (
		<Grid
			container
			spacing={2}
			className={classes.ruleDiv}
			style={{ marginTop: "-13px" }}
		>
			<Grid item xs={1} />
			<Grid item xs={5}>
				<CSSTextField
					label="input"
					value={inRule}
					onChange={editIn}
					margin="dense"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={5}>
				<CSSTextField
					label="output"
					value={outRule}
					onChange={editOut}
					margin="dense"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={1}>
				<IconButton
					onClick={delRule}
					variant="default"
					className={classes.button}
				>
					<RemoveCircleOutline />
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default Rule;
