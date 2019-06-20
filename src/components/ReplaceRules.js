/*
 *  ReplaceRules contains the interface for all rules, including add and clear all.
 *  Probably the most complex component, updateProp is fragile
 *
 */

import React from "react";
import Rule from "./Rule";
import uuidv4 from "uuid/v4";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Delete from "@material-ui/icons/Delete";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
    },
    alignDiv: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const ReplaceRules = props => {
	const { rules, setRules } = props;

	const classes = useStyles();

	// Add object to rule array
	const addRule = () => {
		setRules([
			...rules,
			{ inRule: "Input", outRule: "Output", id: uuidv4() }
		]);
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

	return (
		<Container maxWidth="xs">
			<div className={classes.alignDiv}>
				<Button
					variant="outlined"
					className={classes.button}
					onClick={addRule}
				>
					<AddCircleOutline />
				</Button>
				<Button
					variant="outlined"
					className={classes.button}
					onClick={clearRules}
				>
					<Delete />
				</Button>
			</div>
			{displayRules}
		</Container>
	);
};

export default ReplaceRules;
