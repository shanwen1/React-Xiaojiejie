import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem';

class Xiaojiejie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: [ '基础按摩', '精油推背' ]
		};
	}

	render() {
		return (
			<Fragment>
				<div>
					<input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
					<button onClick={this.addList.bind(this)}>增加服务</button>
				</div>
				<ul>
					{this.state.list.map((item, index) => {
						return (
							<XiaojiejieItem
								key={index + item}
								content={item}
								index={index}
								deleteItem={this.deleteItem.bind(this)}
							/>
						);
					})}
				</ul>
			</Fragment>
		);
	}

	inputChange(element) {
		this.setState({
			inputValue: element.target.value
		});
	}

	addList() {
		this.setState({
			list: [ ...this.state.list, this.state.inputValue ]
		});
	}

	deleteItem(index) {
		let list = this.state.list;
		list.splice(index, 1);
		this.setState({
			list: list
		});
	}
}

export default Xiaojiejie;
