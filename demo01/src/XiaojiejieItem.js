import React, { Component } from 'react';
import propTypes from 'prop-types';

class XiaojiejieItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	//组件第一次在dom中被渲染的时候，函数不会被执行
	//如果已经存在于dom中，发生变化的时候，组件再一次被渲染，函数才会被执行
	// componentWillReceiveProps() {
	// 	console.log('child - componentWillReceiveProps');
	// }
	//当组件从页面中删除的时候执行
	// componentWillUnmount() {
	// 	console.log('child - componentWillUnmount');
	// }

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.content !== this.props.content) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		console.log('child-render');
		return (
			<li onClick={this.handleClick}>
				{this.props.avname}为你作-{this.props.content}
			</li>
		);
	}

	handleClick() {
		//this.props.list=[] 这样的写法是错误的，react是单向数据流，不能从子组件去改变父组件的值
		this.props.deleteItem(this.props.index);
	}
}

XiaojiejieItem.propTypes = {
	avname: propTypes.string.isRequired,
	content: propTypes.string,
	index: propTypes.number,
	deleteItem: propTypes.func
};

XiaojiejieItem.defaultProps = {
	avname: '松岛枫'
};

export default XiaojiejieItem;
