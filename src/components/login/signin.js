import React, {Component} from 'react';
import {Row, Col, Icon,   } from 'antd';
import {Link, Redirect} from 'react-router-dom';
import './login.css';
import cookie from 'react-cookies';
import axios from 'axios';
import {fetchDataBegin, fetchDataSuccess, fetchDataFailure, isLogin, }from '../../redux/actions';
import {connect} from 'react-redux';

class Signin extends Component {
	constructor(props) {
    super(props);
    this.state = {username: null, password: null};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


	componentWillMount() {
		const {success} = this.props;
		if(success) {
			alert("Sign Up Success. Now you can login!")
		}
	}
  usernameChange(e){
   
    const user = e.target.value;
    const {dispatch} = this.props;
    dispatch({type: 'USERNAME', username: user});
  }

  passwordChange(event){
    const pass = event.target.value;
    const {dispatch} = this.props;
    dispatch({type: 'PASSWORD', password: pass});
  }

  handleSubmit(event) {
		event.preventDefault();
		const url = 'http://localhost:3001/signin';
		// const url = 'http://103.137.184.84:3001/signin';
		const {username, password, dispatch} = this.props;
		dispatch(fetchDataBegin());
    axios.post(url, {
      'username': username,
      'password': password
    })
  .then((res) => {
    if (res.status === 200){
			const token = res.data;
			return cookie.save('token', token, { path: '/', maxAge: 600000 })
  } else {
      throw new Error ('User not found!');
    }
		})
		.then((token) => {
			// console.log("Cookie:", cookie.load('token'));
      dispatch(fetchDataSuccess(token));
      dispatch(isLogin());
    })
    .catch((err)=>{
      dispatch(fetchDataFailure(err));
    })
  }

  render() {
		const login = this.props.isLogin;
    if(login === true) {
			// console.log("REDIRECT")
      return <Redirect to="/" />;
    }
		return(
			<Row className="container-login" type="flex" justify="space-around" align="middle">
				<Col className="wrap-login" span={16}>
					<div className="login-pic">
						<img alt="" src="imgs/img-01.png" />
					</div>
					<form onSubmit={this.handleSubmit}>
						<div className="wrapper-form">
							<span className="login-form-title">Admin Login</span>
							<div className="wrap-input validate-input" >
								<input onChange={this.usernameChange.bind(this)} className="input" type="text" name="username" placeholder="Username" />
								<span className="focus-input"></span>
								<span className="symbol-input">
									<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
								</span>
							</div>

							<div className="wrap-input validate-input" >
								<input onChange={this.passwordChange.bind(this)} className="input" type="password" name="password" placeholder="Password" />
								<span className="focus-input"></span>
								<span className="symbol-input">
									<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
								</span>
							</div>
						
							<div className="container-login-form-btn">
								<button className="login-form-btn">
									Login
								</button>
							</div>

							<div style={{textAlign:'center', marginTop: '80px', marginBottom: '20px'}} className="link-signup">
								<Link style={{textDecoration:'none'}}  to="/signup" className="txt2">
									Create your Account
									<Icon style={{fontSize: '9px',marginLeft: 2}} type="arrow-right" />
								</Link>
							</div>
						</div>
					</form>
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
export default connect(mapStateToProps)(Signin)