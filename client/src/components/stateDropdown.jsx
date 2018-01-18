import React from 'react';

const states = ['', 'AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI','WY']

let stateDropdown = (props) => (

  <div>
	  <form onChange={props.selectstate}>
		<label>{'What state do you live in?'}</label>
			<select type='text' name='state'>{states.map(state => <option type='text' name='nada'>{state}</option>)}
			</select>
		</form>
	</div>
)

export default stateDropdown;