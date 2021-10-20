import React from 'react'
import Select from 'react-select';

function Dropdown() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    return (
       
        <div style={{width:"550px", marginLeft:"520px"}}>
             <h3>Jai Dropdown</h3>
             <Select
        options={options}
        placeholder="Jai icecream Dropdown"
      />
        </div>
    )
}

export default Dropdown
