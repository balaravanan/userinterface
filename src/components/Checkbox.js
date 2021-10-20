import React from 'react'

function Checkbox() {
    return (
        <div>
           
            <br/>
            <hr/>
            <h3>Jai Checkbox</h3>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> I have a bike</label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> I have a car</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> I have a boat</label><br/><br/>
  <br/>
            <h3>Jai RadioButton</h3>
  <input type="radio" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> I have a bike</label><br/>
  <input type="radio" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> I have a car</label><br/>
  <input type="radio" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> I have a boat</label>
  <hr/>
  <br/><br/>
        </div>
    )
}

export default Checkbox
