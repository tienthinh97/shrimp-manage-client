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
import { connect } from 'react-redux';
import axios from 'axios';
import cookie from 'react-cookies';
import { newValue } from '../redux/actions';
// import moment from "moment";
import Moment from 'react-moment';

// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
  luxChart
} from "variables/charts.jsx";
// import {
//   dashboardNASDAQChart
// } from "variables/temp.jsx";


class Dashboard extends React.Component {
  state = {
    data: [],
    temp: null,
    chart: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.getNewValue()
      // this.getChartLocal()
    }, 100);
  }
  getNewValue() {
    axios.get('http://103.137.184.84:3001/newValue')
      .then(result => {
        this.setState({ data: result.data[0] })
        console.log("new value:", result.data[0])
      })
      .catch(err => console.log("loi", err))
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
                {parseFloat(data.amoniac) > 5 ?
                  <div style={{ color: 'red' }} className="stats">
                    <i className="fas fa-sync-alt" /> Cảnh báo vượt ngưỡng
                    </div> :
                  <div className="stats">
                    {/* <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()} */}
                    <i className="fas fa-sync-alt" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                  </div>
                }
                {/* <div className="stats">
                    <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()}
                  </div> */}
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
                {parseFloat(data.temp) > 25 ?
                  <div style={{ color: 'red' }} className="stats">
                    <i className="far fa-calendar" /> Cảnh báo vượt ngưỡng
                    </div> :
                  <div className="stats">
                    <i className="far fa-calendar" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                  </div>
                }
                {/* <div className="stats">
                    <i className="far fa-calendar" /> {moment(data.createdAt).fromNow()}
                  </div> */}
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
                {parseFloat(data.cacbonic) > 10 ?
                  <div style={{ color: 'red' }} className="stats">
                    <i className="far fa-clock" /> Cảnh báo vượt ngưỡng
                  </div> :
                  <div className="stats">
                    <i className="far fa-clock" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                  </div>
                }
                {/* <div className="stats">
                  <i className="far fa-clock" /> {moment(data.createdAt).fromNow()}
                </div> */}
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
                {parseFloat(data.cacbonic) > 10 ?
                  <div style={{ color: 'red' }} className="stats">
                    <i className="fas fa-sync-alt" /> Cảnh báo vượt ngưỡng
                </div> :
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                  </div>
                }
                {/* <div className="stats">
                  <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()}
                </div> */}
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
                {parseFloat(data.lux) > 4500 ?
                  <div style={{ color: 'red' }} className="stats">
                    <i className="fas fa-sync-alt" /> Cảnh báo vượt ngưỡng
                </div> :
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                  </div>
                }
                {/* <div className="stats">
                  <i className="fas fa-sync-alt" /> {moment(data.createdAt).fromNow()}
                </div> */}
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
                {parseFloat(data.turb) >= 30 ?
                  <div style={{ color: 'red' }} className="stats">
                    <i className="far fa-calendar" /> Cảnh báo vượt ngưỡng
                </div> :
                  <div className="stats">
                    <i className="far fa-calendar" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                  </div>
                }
                {/* <div className="stats">
                  <i className="far fa-calendar" /> {moment(data.createdAt).fromNow()}
                </div> */}
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
                {parseFloat(data.ph) >= 8.1 ?
                  <div style={{ color: 'red' }} className="stats">
                    <i className="far fa-clock" /> Cảnh báo vượt ngưỡng
                </div> :
                  <div className="stats">
                    <i className="far fa-clock" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                  </div>
                }
                {/* <div className="stats">
                  <i className="far fa-clock" /> {moment(data.createdAt).fromNow()}
                </div> */}
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
                  <i className="fas fa-sync-alt" /> <Moment format="DD/MM/YYYY - hh:mm:ss" date={data.createdAt} />
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Lux</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={luxChart.data}
                  options={luxChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  {/* <i className="fa fa-circle text-info" /> pH */}
                  <i className="fa fa-circle text-warning" /> lux
                  </div>
                {/* <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                  </div> */}
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">
                  <span style={{color: '#6bd098'}}>Oxy</span> / 
                  <span style={{color: '#0000FF'}}>Amoniac</span> / 
                  <span style={{color: '#f17e5d'}}>Cacbonic</span> / 
                  <span style={{color: '#fcc468'}}>Turbidity</span>
                  </CardTitle>
                <p className="card-category">10 times lastest</p>
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
                {/* <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                  </div> */}
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
                {/* <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Update Later
                  </div> */}
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Temperature / pH</CardTitle>
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
                  <i className="fa fa-circle text-info" /> pH
                  <i style={{ marginLeft: "25px" }} className="fa fa-circle text-warning" /> °C
                  </div>
                {/* <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                  </div> */}
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
