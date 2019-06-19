/*
 *  ReplaceRules contains the interface for all rules, including add and clear all.
 */
import React from "react";
import Rule from "./Rule";

const ReplaceRules = props => {
	const { rules, setRules } = props;

    const addRule = () => {
        console.log('add');
    }

    const clearRules = () => {
        console.log('clearall')
    }

	return (
		<div>
			<div>
				<button onClick={addRule}>+</button>
				<button onClick={clearRules}>x</button>
			</div>
		</div>
	);
};

export default ReplaceRules;
