import React from "react";
import DatePicker from "react-datepicker";
import Alert from 'react-bootstrap/Alert';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Dates extends React.Component {
  state = {
    startDate: new Date(),
    startDate2: new Date(),
  };


  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  handleChange2 = date => {
    this.setState({
      startDate2: date
    });
  };

  render() {

    return (
        <>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                // startDate={this.state.startDate}
            />
            <DatePicker
                selected={this.state.startDate2}
                onChange={this.handleChange2}
                // endDate={endDate}
            />

                <Alert variant="info">
                <Alert.Heading>No.Days</Alert.Heading>
                <p>
                    {this.state.startDate.getDay()-this.state.startDate2.getDay()}
                </p>
                </Alert>
      </>
    );
  }
}

export default Dates;
