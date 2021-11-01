import Button from 'react-bootstrap/Button';
import Backdrop from './Backdrop';
import Modal from './Modal';
import { useState } from 'react';
export default function Todo(props){

   const [isConfirmationBoxNeedtoShow,setConfirmationBoxFlag]= useState(false);
    function showConfirmationBox(){
        setConfirmationBoxFlag(true);
    }

    return (
        <div className={"card "+props.className}>
            <h2>{props.name}</h2>
            <Button className="btn"onClick={showConfirmationBox} variant={props.name}>{props.name}</Button>
            <div>
                {isConfirmationBoxNeedtoShow && <Backdrop/>}
                {isConfirmationBoxNeedtoShow && <Modal/>}
            </div>

        </div>
        )
}