import React, {useState} from 'react'
import { ChromePicker } from "react-color";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Picker() {
    const [startDate, setStartDate] = useState(new Date());
    const [colors, setColors] = useState(null);
  const colorPicker = e => {
    const newColor = {
      hex: e.hex,
      rgb: "(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")"
    };
    setColors(newColor);
  };
    return (
        <div>
             <h1>Balaji color Picker</h1>
      <div style={{ width: "50%", marginLeft:"675px" }}>
        <ChromePicker
          color={colors !== null && colors.hex}
          onChange={e => colorPicker(e)}
          disableAlpha
          renderers={false}
        />
      </div>
      {colors !== null && (
        <React.Fragment>
          Hex: {colors.hex}
          <br />
          RGBa: {colors.rgb}
        </React.Fragment>
      )}


      <div style={{ width: "30%", marginLeft:"560px", marginTop:"20px" }}>

          <h2> date Picker Balaji</h2>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </div>
    )
}

export default Picker

