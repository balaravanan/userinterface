import React from 'react'
import ReactTooltip from 'react-tooltip';

function Tooltip() {
    return (
        <div>
            <h3> Jai Tooltip </h3>

            <p data-tip="hello jai">
            <button className="btn warning">Theri</button> &nbsp;
                </p>
            <ReactTooltip />
        </div>
    )
}

export default Tooltip
