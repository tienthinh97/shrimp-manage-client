// import axios from 'axios'
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import ReactDelayRender from 'react-delay-render';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {connect} from 'react-redux';
import axios from 'axios';
import cookie from 'react-cookies';
import {newValue}from '../redux/actions';
import moment from "moment";

// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";


class Dashboard extends React.Component {
  state = {data: []}
  componentDidMount() {
    setTimeout(() => {
      axios.get('http://103.137.184.84:3001/newValue')
    .then(result => {
      this.setState({data: result.data})
      console.log("table:", this.state.data)
    })
    .catch(err => console.log("loi",err))
    }, 100);
  }
  // componentWillMount(){
  //   setTimeout(()=>{}, 100)
  // }
  // componentDidMount() {
  //   const url = 'http://localhost:3001/newValue'
  //   const token = cookie.load('token');
  //   axios.get(url, {
  //     headers: {
	// 			'token': token,
  //       'Content-Type': 'application/json'
	// 		}
  //   })
  //   .then(function (response) {
  //     this.setState({newValue: response.data})
  //     console.log("table:", this.state.newValue)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

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
  
  render() {
    // var data = this.props.newValue
    var data = this.state.data
    console.log(this.props)
    return (
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-support-17 text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Amoniac</p>
                      <CardTitle tag="p">{data.amoniac}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-umbrella-13 text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Temperature</p>
                        <CardTitle tag="p">{data.temp} °C</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-air-baloon text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Cacbonic</p>
                        <CardTitle tag="p">{data.cacbonic} mg/L</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Oxy</p>
                        <CardTitle tag="p">{data.oxy} mg/L</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-bulb-63 text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Light</p>
                      <CardTitle tag="p">{data.lux} lux</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-box text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Turbidity</p>
                        <CardTitle tag="p">{data.turb} mg/L</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart-bar-32 text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">pH</p>
                        <CardTitle tag="p">{data.ph}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-button-power text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Battery</p>
                        <CardTitle tag="p">{data.bat} %</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()}
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Oxy / Amoniac / Cacbonic</CardTitle>
                  <p className="card-category">24 Hours ago</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Update Later</CardTitle>
                  <p className="card-category">Update Later</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> None{" "}
                    <i className="fa fa-circle text-warning" /> None{" "}
                    <i className="fa fa-circle text-danger" /> None{" "}
                    <i className="fa fa-circle text-gray" /> None
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Update Later
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Average temperature</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    {/* <i className="fa fa-circle text-info" /> Tesla Model S{" "} */}
                    <i className="fa fa-circle text-warning" /> °C
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  newValue: state.sensor.newValue
})

// export default connect(mapStateToProps)(Dashboard)
export default ReactDelayRender({ delay: 0 })(connect(mapStateToProps)(Dashboard));
