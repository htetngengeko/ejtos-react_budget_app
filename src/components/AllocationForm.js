import React,{useState, useContext} from "react";
import {AppContext} from "../context/AppContext";

const AllocationForm = () => {
    const {dispatch, remaining} = useContext(AppContext)

    const [name, setName] = useState('');
    const [action, setAction] = useState('');
    const [cost, setCost] = useState('');

    const submitEvent = () =>{
        if(cost > remaining ){
            alert(`The value cannot exceed remaining funds  £ ${remaining}`)
            setCost('');
        }
        const expense ={
            name: name,
            cost: parseInt(cost)
        }

        if(action === "Add") {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        }

    }

    return(<div>
        <h2>Change Allocation</h2>
        <div className="row">
            <div className="input-group mb-3" style={{marginleft: "10px"}}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => {
                    setName(event.target.value)
                }}>
                    <option selected>Choose...</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="IT">IT</option>
                </select>


                <div className="input-group-prepend" style={{marginLeft: '2rem'}}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                <select
                    className="custom-select"
                    id="inputGroupSelect01"
                    onChange={(event) => {
                        setAction(event.target.value)
                    }}>
                    <option selected>Choose...</option>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce">Reduce</option>
                </select>

                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={cost}
                    style={{marginLeft: '2rem', size: 10}}
                    onChange={(event) => setCost(event.target.value)}>
                </input>

                <button className="btn btn-primary" onClick={submitEvent} style={{marginLeft: '2rem'}}>Save</button>

            </div>
        </div>
    </div>)
}

export default AllocationForm;
