import React, { Component } from 'react';

class List extends Component {
	render() {
		return (
			<div className="List">
				<h4>List to Map</h4>
	      <ul>
	        {this.props.items.map((item) => <li key={item.id}>{item.text}</li>)}
	      </ul>
	    </div>
		);
	}
}

export default List;