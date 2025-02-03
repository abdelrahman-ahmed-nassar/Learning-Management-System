import React from 'react';

import "./user.scss";


function Page(props) {
	return (
		<div className="user-page">
			<div className="card-body">
				<h5 className="card-title">User Info</h5>
				<p className="card-text">Name: {props.name}</p>
				<p className="card-text">Email: {props.email}</p>
			</div>
		</div>
	);
}

export default Page;