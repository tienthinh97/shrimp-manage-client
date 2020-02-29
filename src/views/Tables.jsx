import React from "react";
import axios from 'axios';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import Moment from 'react-moment';

class Tables extends React.Component {
  state = {data: []}
  componentDidMount() {
    axios.get('http://103.137.184.84:3001/sensor')
    .then(result => {
      this.setState({data: result.data})
      console.log("table:", this.state.data)
    })
    .catch(err => console.log("loi",err))
  }
  render() {
    let data = this.state.data
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Sensor data</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th style={{textAlign:"center"}}>Sensor</th>
                        <th style={{textAlign:"center"}}>Oxy (mg/L)</th>
                        <th style={{textAlign:"center"}}>Cacbonic (mg/L)</th>
                        <th style={{textAlign:"center"}}>pH</th>
                        <th style={{textAlign:"center"}}>Temperature (°C)</th>
                        <th style={{textAlign:"center"}}>Turbidity (mg/L)</th>
                        <th style={{textAlign:"center"}}>Light (lux)</th>
                        <th style={{textAlign:"center"}}>Amoniac (mg/L)</th>
                        <th style={{textAlign:"center"}}>Battery (%)</th>
                        {/* <th className="text-right">Date</th> */}
                        <th style={{textAlign:"center"}} >Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((element, index) => {
                        return(
                          <tr key={index}>
                            <td style={{textAlign:"center"}}>{element.addr}</td>
                            <td style={{textAlign:"center"}}>{element.oxy}</td>
                            <td style={{textAlign:"center"}}>{element.cacbonic}</td>
                            <td style={{textAlign:"center"}}>{element.ph}</td>
                            <td style={{textAlign:"center"}}>{element.temp}</td>
                            <td style={{textAlign:"center"}}>{element.turb}</td>
                            <td style={{textAlign:"center"}}>{element.lux}</td>
                            <td style={{textAlign:"center"}}>{element.amoniac}</td>
                            <td style={{textAlign:"center"}}>{element.bat}</td>
                            <td style={{textAlign:"center"}}>
                              <Moment format="DD/MM/YYYY" date={element.createdAt} /><br/>
                              <Moment format="hh:mm:ss" date={element.createdAt} />
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
