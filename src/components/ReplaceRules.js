/*
 *  ReplaceRules contains the interface for all rules, including add and clear all.
 */
import React from "react";
import Rule from "./Rule";
import uuidv4 from "uuid/v4";

const ReplaceRules = props => {
	const { rules, setRules } = props;

	const addRule = () => {
		setRules([
			...rules,
			{ inRule: "Input", outRule: "Output", id: uuidv4() }
		]);
	};

	const clearRules = () => {
		setRules([]);
	};

	const deleter = delID => {
		const newRules = rules.filter(rule => rule.id !== delID);
		setRules(newRules);
	};

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
		<div>
			<div>
				<button onClick={addRule}>+</button>
				<button onClick={clearRules}>x</button>
				{displayRules}
			</div>
		</div>
	);
};

export default ReplaceRules;
