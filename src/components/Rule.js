/*
 *  Rule contains a single rule: the input, the output, and the delete button
 */

import React from "react";

const Rule = props => {
	const { inRule, editIn, outRule, editOut, delRule } = props;

	return (
		<div>
			<input value={inRule} onChange={editIn} />
			<input value={outRule} onChange={editOut} />
			<button onClick={delRule}>x</button>
		</div>
	);
};

export default Rule;
