import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import "../App.css"

export default class Modal extends Component {
    render() {
        return (
            <div className="row confirmationBox">
                <p className="text-justify col-sm-12">Are you sure? </p>
                <Button className="col-sm-6">YES</Button>
                <Button className="col-sm-6 btn-danger">NO</Button>
            </div>
        )
    }
}
