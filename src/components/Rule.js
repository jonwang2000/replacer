/*
 *  Rule contains a single rule: the input, the output, and the delete button
 *  Fairly simple component relying on ReplaceRules for logic/functions
 *
 */

import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	ruleDiv: {
		display: "flex",
		alignItems: "center"
    },
    button: {
        top: "3px"
    }
}));

const Rule = props => {
	const classes = useStyles();

	const { inRule, editIn, outRule, editOut, delRule } = props;

	return (
		<Grid container spacing={1} maxWidth="xs" className={classes.ruleDiv}>
            <Grid item xs={1}/>
			<Grid item xs>
				<TextField
					label="input"
					value={inRule}
					onChange={editIn}
					margin="normal"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs>
				<TextField
					label="output"
					value={outRule}
					onChange={editOut}
					margin="normal"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={1}>
				<Button
					onClick={delRule}
					variant="default"
					size="large"
					className={classes.button}
				>
					<RemoveCircleOutline />
				</Button>
			</Grid>
		</Grid>
	);
};

export default Rule;
