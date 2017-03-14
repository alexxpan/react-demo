import React, { Component } from 'react';

require('./Form.css')

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
		}

		this._handleName = this._handleName.bind(this);
		this._handleEmail = this._handleEmail.bind(this);
		this._handlePhone = this._handlePhone.bind(this);
	}

	_handleName(e) {
		var name = e.target.value;
		var validate = true;
		var character = name.charAt(0);
		if (character != character.toUpperCase()) {
			alert('Name not in correct format');
		}
		var i = 1;
		while (i <= name.length) {
			character = name.charAt(i);
			if (character != character.toLowerCase()) {
				alert('Name not in correct format');
				validate = false;
				break;
			}
			i = i + 1;
		}
		const field = e.target.name;
		if (validate) {
			this.setState({
		    	[name]: e.target.value,
		    });
		}
	}

	_handleEmail(e) {
		var email = e.target.value;
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	var validate = re.test(email);
		if (validate) {
			this.setState({
				email: e.target.value,
			});
		} else {
			alert('Email not in correct format');
		}
	}

	_handlePhone(e) {
		var phone = e.target.value;
		var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
		var validate = re.test(phone);
		if (validate) {
			this.setState({
				phone: e.target.value,
			});
		} else {
			alert('Phone number not in correct format');
		}
	}

	render() {
		return (
			<div className="field">
				<Field header="First Name" name="firstName" handler={ this._handleName }/>
				<Field header="Last Name" name="lastName" handler={ this._handleName }/>
				<Field header="Email Address" name="email" handler={ this._handleEmail }/>
				<Field header="Phone Number" name="phone" handler={ this._handlePhone }/>
			</div>
		)
	}
}

class Field extends Component {
	render() {
		return (
			<div className="field">
				<div className="field__header">{ this.props.header }</div>
				<input className="field__input" type="text" name = { this.props.name } onChange={ this.props.handler }/>
			</div>
		);
	}
}







