import { MdFormatListBulleted } from "react-icons/md";
import './Forms.scss'
import React, { useState } from 'react';

function Forms({onSubmit}){
    const [formData, setformData] = useState(
        {
            givenName:'',
            firstName:'',
            birthday:'',
            time:'',
        }
    );
    // set data in formData
    const handleOnChange = (e)=> {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };
    //
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setformData(
            {
                givenName:'',
                firstName:'',
                birthday:'',
                time:'',
            }           
        );
    };

    return(
        <>
            <div className="container-forms">
                <header>
                    <span className="form-icon">
                    <MdFormatListBulleted />
                    </span>
                    Add Appointment
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="formGroups">
                    <label htmlFor="gname">Given Name:</label>
                    <input type="text" name="givenName" id="givenName" value={formData.givenName} onChange={handleOnChange} placeholder='type your given name' />
                    </div>
                    <div className="formGroups">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleOnChange} placeholder='type your frist name' />
                    </div>
                    <div className="formGroups">
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" name="birthday" id="birthday" value={formData.birthday} onChange={handleOnChange} />
                    </div>
                    <div className="formGroups">
                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time" value={formData.time} onChange={handleOnChange} />
                    </div>
                    <input className="submit-btn" type="submit" value="submit" />
                </form>
            </div>
        </>
    )
}

export default Forms;