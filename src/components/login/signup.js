import React, {Component} from 'react';
import {Row, Col, Icon,  } from 'antd';
import './login.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {signup }from '../../redux/actions';
import {Redirect} from 'react-router-dom';


class Signup extends Component {
	constructor(props) {
    super(props);
    this.state = {
			fullname: null,
			email: null,
			username: null, 
			password: null,
			redirect: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
		const value = e.target.value;
		this.setState({
			...this.state,
			[e.target.name]: value
		});
  }	

 
  handleSubmit(event) {
		event.preventDefault();
		console.log(this.state)
		const url = 'http://localhost:3001/signup';
		// const url = 'http://103.137.184.84:3001/signup';
		const {fullname, email, username, password} = this.state;
    axios.post(url, {
			'fullname': fullname,
			'email': email,
			'username': username,
      'password': password
    })
  .then((res) => { 
    if (res.status === 200){
			// const data = res.data;
			// console.log(data);
			const {dispatch} = this.props;
			dispatch(signup());
			this.setState({redirect: true})
  } else {
      throw new Error ('User not found!');
    }
	})
	.catch((err)=>{
		console.log(err)
	})
  }

  render() {
		const {redirect} = this.state;
		if(redirect) {
			return <Redirect to="/login" />
		}
		return(
			<Row className="container-signup" type="flex" justify="space-around" align="middle">
				<Col className="wrap-login" span={16}>
				<form onSubmit={this.handleSubmit}>
						<div className="wrapper-form">
							<span className="login-form-title">Sign Up</span>
							<div className="wrap-input validate-input" >
								<input onChange={this.handleChange} className="input" type="text" name="fullname" placeholder="Fullname" />
								<span className="focus-input"></span>
								<span className="symbol-input">
									<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />
								</span>
							</div>

							<div className="wrap-input validate-input" >
								<input onChange={this.handleChange} className="input" type="text" name="email" placeholder="Email" />
								<span className="focus-input"></span>
								<span className="symbol-input">
									<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
								</span>
							</div>

							<div className="wrap-input validate-input" >
								<input onChange={this.handleChange} className="input" type="text" name="username" placeholder="Username" />
								<span className="focus-input"></span>
								<span className="symbol-input">
									<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
								</span>
							</div>

							<div className="wrap-input validate-input" >
								<input onChange={this.handleChange} className="input" type="password" name="password" placeholder="Password" />
								<span className="focus-input"></span>
								<span className="symbol-input">
									<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
								</span>
							</div>
						
							<div className="container-login-form-btn">
								<button style={{marginBottom: 80}} className="login-form-btn">
									Sign Up
								</button>
							</div>
						</div>
					</form>
					<div className="login-pic">
						<img alt="" src="imgs/img-01.png" />
					</div>
					
				</Col>
			</Row>
		)
	}
}
const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
	isLogin: state.login.isLogin,
	success: state.login.success
})
export default connect(mapStateToProps)(Signup)