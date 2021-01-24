import React, { useState } from 'react'
import './input.css'



const useInput = (props) => {
    return (
        <React.Fragment>
        <label htmlFor="search"> </label>
        <input type="text" name="" id="" value={props.editSearchPatient()} onChange={ props.filterPatientHandler} className='search_input'/>
        </React.Fragment>
    )
            
}

export default useInput
