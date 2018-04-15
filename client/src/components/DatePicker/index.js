import React from "react";
import DatePicker from "material-ui/DatePicker";
import "./style.css";

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */



  // const textFieldStyle ={
  //   fontweight: 500,
  //   fontsize: 500
  // }

const DatePicker1 = (props) => {
	return <div>

  <div className="DatePickerClass">
    <DatePicker
      hintText="Choose Moving Date "
      locale="en-US"
      style={{
        width: "50%",
        borderBottom: "2px solid #9e9e9e",
        // backgroundColor: "#ffd699"
      }}
    />
  </div>
  </div>

    };

export default DatePicker1;
