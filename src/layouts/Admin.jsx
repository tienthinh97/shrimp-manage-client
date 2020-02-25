import {isLogin, fetchDataSuccess, newValue}from '../redux/actions';
import cookie from 'react-cookies';
import socketIOClient from "socket.io-client";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import React from "react";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";


import routes from "routes.js";

// var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
      endPoint: "https://longuit.herokuapp.com/",
			deviceOneOn: false,
			deviceOneOff: false,
      data: null,
      newValue: null
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    this.checkLogin();
    // this.getData();
    // const { dispatch } = this.props;
    // // const url = 'http://localhost:3001/newValue'
    // const url = 'http://103.137.184.84:3001/newValue'
    // const token = cookie.load('token');
    // axios.get(url, {
    //   headers: {
		// 		'token': token,
    //     'Content-Type': 'application/json'
		// 	}
    // })
    // .then(function (response) {
    //   dispatch(newValue(response.data))
    //   // this.props.newValue = response.data
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
		// const socket = socketIOClient(this.state.endPoint);
		// socket.on("deviceOne", function(data) {
		// 	console.log(data)
		// 	alert(data);
    // })
  }
  checkLogin() {
		// const url = 'http://localhost:3001/';
		const url = 'http://103.137.184.84:3001/';
		const { dispatch } = this.props;
		const token = cookie.load('token');
		axios.get(url, {
			headers: {
				'token': token,
        'Content-Type': 'application/json'
			}
		})
		.then(res => {
				dispatch(fetchDataSuccess(res.data.fullname))
				dispatch(isLogin())
		})
		.catch(err => console.log(err))
  }
  getData() {
    const { dispatch } = this.props;
    // const url = 'http://localhost:3001/newValue'
    const url = 'http://103.137.184.84:3001/newValue'
    const token = cookie.load('token');
    axios.get(url, {
      headers: {
				'token': token,
        'Content-Type': 'application/json'
			}
    })
    .then(function (response) {
      dispatch(newValue(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  sendOn() {
		const socket = socketIOClient(this.state.endPoint);
			socket.emit("device-one","on")
	}

	sendOff() {
		const socket = socketIOClient(this.state.endPoint);
			socket.emit("device-one","off")
  }
  
  
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    const login = this.props.isLogin;
    if(!login) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  {...this.props}
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  isLogin: state.login.isLogin,
  token: state.login.token,
  newValue: state.sensor.newValue
})
export default connect(mapStateToProps)(Dashboard)

