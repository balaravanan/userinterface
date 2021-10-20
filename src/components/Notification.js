import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
    const notify = () => toast("Hii Jai Balaji!");
    return (
        <div>
            <h1>Notification Balaji</h1>
            <button onClick={notify}>Notify!</button>
        <ToastContainer />
        </div>
    )
}

export default Notification
