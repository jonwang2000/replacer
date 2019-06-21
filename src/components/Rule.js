/*
 *  Rule contains a single rule: the input, the output, and the delete button
 *  Fairly simple component relying on ReplaceRules for logic/functions
 *
 */

import React from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	ruleDiv: {
		display: "flex",
		alignItems: "center"
	},
	button: {
		right: 5
	}
}));

const Rule = props => {
	const classes = useStyles();

	const { inRule, editIn, outRule, editOut, delRule } = props;

	return (
		<Grid
			container
			spacing={2}
			maxWidth="xs"
			className={classes.ruleDiv}
			style={{ marginTop: "-13px" }}
		>
			<Grid item xs={1} />
			<Grid item xs={5}>
				<TextField
					label="input"
					value={inRule}
					onChange={editIn}
					margin="dense"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={5}>
				<TextField
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
