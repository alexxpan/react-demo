import React, { Component } from 'react';
import logo from './logo.svg';
import classnames from 'classnames';

require('./Navigation.css')

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		}

		this._onNavigationClick = this._onNavigationClick.bind(this);
	}

	_onNavigationClick(e) {
		e.preventDefault();
		this.setState({
			open: !this.state.open,
		});
	}

	render() {
		return (
			<div
				className={ classnames(
					'navigation',
					{
						'navigation--open': this.state.open,
					}
				)}
				onClick={ this._onNavigationClick }
			>
				<img src={ logo } alt="logo" className="navigation__logo"/>
			</div>	
		)
	}
}
