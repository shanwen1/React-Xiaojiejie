import React, { Component, Fragment } from 'react';
import axios from 'axios';
import XiaojiejieItem from './XiaojiejieItem';

class Xiaojiejie extends Component {
	constructor(props) {
		//super是调用父类的构造函数的固定写法
		super(props);

		//现在的需求是增加小姐姐的服务项，就需要先定义数据
		//数据定义在Xiaojiejie组件中的构造函数里constructor
		this.state = {
			//这里的inputValue是input中的值
			inputValue: '',
			list: [ '基础按摩', '精油推背' ] //state定义组件内部的初始值
		};
	}

	//添加列表
	inputChange(element) {
		this.setState({
			//为什么要加target?有点不懂
			//inputValue:element.target.value
			inputValue: this.input.value
		});
	}

	//删除列表
	addList() {
		this.setState(
			{
				// setState是异步的，所以在console那行显示length的时候是比实际长度小1的，加了一个回调函数才可以对
				// 这里需要说的是...这个是ES6的新语法，叫做扩展运算符。
				// 意思就是把list数组进行了分解，形成了新的数组，然后再进行组合。
				// 这种写法更简单和直观，所以推荐这种写法
				list: [ ...this.state.list, this.state.inputValue ]
			},
			() => {
				console.log(this.ul.querySelectorAll('li').length);
			}
		);
		//显示获得元素所有的长度
	}

	//删除单项列表数据
	deleteItem(index) {
		//声明一个局部变量，获取list对应的下标
		let list = this.state.list;
		//删除对应下标数组的值
		list.splice(index, 1);
		//用setState更新数据
		this.setState({
			list: list
		});
	}

	// componentWillMount() {
	// 	console.log('componentWillMount----组件将要挂载到页面的时刻');
	// }

	componentDidMount() {
		axios
			.get('https://www.easy-mock.com/mock/5f210a388e891b12a0ac5386/ReactDemo01/xiaojiejie')
			.then((res) => {
				console.log('axios 获取数据成功:' + JSON.stringify(res));
				this.setState({
					list: res.data.data
				});
			})
			.catch((error) => {
				console.log('axios 获取数据失败' + error);
			});
	}

	// shouldComponentUpdate() {
	// 	console.log('1-shouldComponentUpdate---组件发生改变前执行');
	// 	return true;
	// }

	// //shouldComponentUpdate返回true才会被执行。
	// componentWillUpdate() {
	// 	console.log('2-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行');
	// }

	// componentDidUpdate() {
	// 	console.log('4-componentDidUpdate----组件更新之后执行');
	// }

	render() {
		//console.log('3-render---组件挂载中.......');
		return (
			<Fragment>
				<div>
					{/*这里就标明了input输入框里的值是this.state里的内容*/}
					{/*同时我们要添加一个onChange的响应事件，同时onChange响应事件要和inputChange绑定*/}
					{/*这样才能inputChan输入的时候将其值绑定到input的输入框中*/}
					<label htmlFor="lzy">增加服务</label>
					<input
						id="lzy"
						className="input"
						value={this.state.inputValue}
						onChange={this.inputChange.bind(this)}
						ref={(input) => {
							this.input = input;
						}}
					/>
					<button onClick={this.addList.bind(this)}>增加服务</button>
				</div>
				<ul
					ref={(ul) => {
						this.ul = ul;
					}}
				>
					{//循环list ES6里面的语法 箭头函数
					this.state.list.map((item, index) => {
						return (
							<XiaojiejieItem
								key={index + item}
								content={item}
								index={index}
								list={this.state.list}
								deleteItem={this.deleteItem.bind(this)}
							/>
							// <li
							//     key={index+item}
							//     //这里表示的是单击的时候让deleteItem和list里面的index（下标）绑定，
							//     onClick={this.deleteItem.bind(this,index)}
							//     dangerouslySetInnerHTML={{__html:item}}
							// >
							// </li>
						);
					})}
				</ul>
			</Fragment>
		);
	}
}

export default Xiaojiejie;
