import React, { Component, Fragment } from 'react';
class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '', password: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//监听用户名和密码两个input值的变化
	handleChange(event) {
		const target = event.target;
		this.setState({ [target.name]: target.value });
	}
	//表单提交的响应函数
	handleSubmit(event) {
		console.log('login successfully');
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					用户名：
					<input
						type="text"
						name="name"
						value={this.state.name} //通过value设置input显示内容
						onChange={this.handleChange} //通过onChange监听value的变化
					/>
				</label>

				<label>
					密码：
					<input
						type="password"
						name="password"
						value={this.state.password} //通过value设置input显示内容
						onChange={this.handleChange} //通过onChange监听value的变化
					/>
				</label>
				<input type="submit" value="登录" />
			</form>
		);
	}
}

export default LoginForm;
