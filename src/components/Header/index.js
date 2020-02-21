import React from 'react';
import { faBars, faSort } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default ({triggerMenu, isOpen}) => {
    return <div className="header">
        <div className="header-top-panel">
            <div className="menu-burger" onClick={() => triggerMenu(!isOpen)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="btc-info">
                <p>My BTC</p>
                <p>12.00</p>
            </div>
        </div>
        <div className="header-actions">
            <a className="btn btn-primary">
                Add trade
            </a>
            <a className="btn btn-secondary">
                10€
            </a>
            <div className="sort">
                <FontAwesomeIcon icon={faSort} />
            </div>
        </div>
    </div>
}
