// var log = require('./log');
// log('hello world');

// import log from './log.js';
// log('hello world');

import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			items: 0,
		};
	}
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({ data });
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({ data: remainder });
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title title="ToDo List" items={this.state.items} />
				Tutaj pojawią się komponenty naszej aplikacji.
			</div>
		);
	}
}

export default App;
