import React, { useState} from 'react'
import './SideBar.css'


const SideBar = (props) => {
    const [state, setState] = useState({ show: false })
    const showModal = () => {
        setState({ show: true });
    };

    const hideModal = () => {
        setState({ show: false });
    };

    // const handleLogOut = (e) => {
    //     e.preventDefault()
    //     localStorage.removeItem('token')
    //     props.history.push('/admin/login')
    // }

    return (
        <div className="sidebar">
            <div className="sidebar-head">
                <div className="sidebar-wrapper">
                   
            </div>
                 
            </div>
             <h1>Home</h1>
            </div>
    )
}

export default SideBar