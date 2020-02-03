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

class Tables extends React.Component {
  state = {data: []}
  componentDidMount() {
    axios.get('http://localhost:3001/sensor')
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
                        <th>Sensor</th>
                        <th>Oxy</th>
                        <th>Cacbonic</th>
                        <th>pH</th>
                        <th>Temperature</th>
                        <th>Turbidity</th>
                        <th>Light</th>
                        <th>Amoniac</th>
                        <th>Battery</th>
                        {/* <th className="text-right">Date</th> */}
                        <th className="text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((element, index) => {
                        return(
                          <tr key={index}>
                            <td>{element.addr}</td>
                            <td>{element.oxy}</td>
                            <td>{element.cacbonic}</td>
                            <td>{element.ph}</td>
                            <td>{element.temp} °C</td>
                            <td>{element.turb}</td>
                            <td>{element.lux}</td>
                            <td>{element.amoniac}</td>
                            <td>{element.bat} %</td>
                            <td className="text-right">{element.createdAt}</td>
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
