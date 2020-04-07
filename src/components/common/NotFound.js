import React, { Component } from 'react'
import {
    Button,
    Badge
  } from "reactstrap";

import { Link } from "react-router-dom";
export default class NotFound extends Component {
    render() {
        return (
            <div className="mt-5">
                <h2><Badge color="danger">Sayfa bulunamadı ya da hatalı işlem gerçekleştirildi.</Badge></h2>
                <Link to={"/"}><Button color="info">Ana sayfa</Button></Link>
            </div>
        )
    }
}
