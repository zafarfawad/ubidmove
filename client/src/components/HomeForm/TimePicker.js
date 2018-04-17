import React from "react";
import TimePicker from "material-ui/TimePicker";


const TimePicker1 = (props) => {
    return (
      <div>
        <TimePicker
          format="ampm"
          hintText="12hr Format"
          minutesStep = {15}
          value={props.value}
          onChange={props.handleChangeTimePicker}
          style={{
            width: "49%",
            borderBottom: "2px solid #9e9e9e",
            textAlign:'left',
            marginLeft: '1%'
          }}
        />
      </div>
    );
  
}

export default TimePicker1;

// onst DatePicker1 = (props) => {
// 	return <div>

//   <div className="DatePickerClass" style={{ width:'38%'}}>
//     <DatePicker
//       hintText="Choose Moving Date "
//       locale="en-US"
//       value = {props.value}
//       onChange = {props.onChange}
//       style={{
//         width: "170%",
//         borderBottom: "2px solid #9e9e9e",
//         textAlign:'left'
//       }}
//     />
//   </div>
//   </div>

//     };

// export default DatePicker1;