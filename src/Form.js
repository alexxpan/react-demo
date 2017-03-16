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
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleName(name, type) {
		var validate = true;
		var character = name.charAt(0);
		if (character !== character.toUpperCase()) {
			validate = false;
		}
		var i = 1;
		while (i <= name.length && validate !== false) {
			character = name.charAt(i);
			if (character !== character.toLowerCase()) {
				validate = false;
			}
			i += 1;
		}
		if (validate === false) {
			if (type === "first") {
				console.log("hello")
				this.setState({
			    	firstName: null,
				});
			
			} else if (type === "last") {
				this.setState({
			    	lastName: null,
				});
			}
		}
	}

	_handleEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	var validate = re.test(email);
		if (validate === false) {
			alert('Email not in correct format');
			this.setState({
		    	email: null,
			});
		} 
	}

	_handlePhone(phone) {
		var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
		var validate = re.test(phone);
		if (validate === false) {
			alert('Phone not in correct format');
			this.setState({
		    	phone: null,
			});
		} 
	}

	_handleSubmit(e) {
		var firstName = this.state.firstName;
		var lastName = this.state.lastName;
		var email = this.state.email;
		var phone = this.state.phone;

		this._handleName(firstName, "first");
		this._handleName(lastName, "last");
		this._handleEmail(email);
		this._handlePhone(phone);

		e.preventDefault();
	}

	_handleChange(e) {
		const field = e.target.name;
    	this.setState({
		    [field]: e.target.value,
		});
  	}

	render() {
		return (
			<form onSubmit={ this._handleSubmit }>
				<Field header="First Name" name="firstName" handler={ this._handleChange }/>
				<Field header="Last Name" name="lastName" handler={ this._handleChange }/>
				<Field header="Email Address" name="email" handler={ this._handleChange }/>
				<Field header="Phone Number" name="phone" handler={ this._handleChange }/>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

class Field extends Component {
	render() {
		return (
			<div className="field">
				<div className="field__header">{ this.props.header }</div>
				<input className="field__input" type="text" name={ this.props.name } onChange={ this.props.handler }/>
			</div>
		);
	}
}







