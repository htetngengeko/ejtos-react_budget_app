//

import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";
import {IconName, TiDelete} from "react-icons/ti";


const ExpenseList = (props) => {
    const {dispatch} = useContext(AppContext);

    const increaseAllocation = (name) =>{
        const expense ={
            name: name,
            cost: 10,
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })
    }

    const handleDeleteExpense = () =>{
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        })
    }

    return(
        <tr>
            <td>{props.name}</td>
            <td>£ {props.cost}</td>
            <td><button onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>


        </tr>
    )
}

export default ExpenseList