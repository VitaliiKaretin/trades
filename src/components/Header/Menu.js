import React from 'react';
import {push as Menu} from "react-burger-menu";

const styles = {
    bmBurgerButton: {
        display: 'none'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        display: 'none',
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#eaf4ff',
        padding: '60% 20px 0',
        fontSize: '15px',
        textAlign: 'left'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
    },
    bmItem: {
        display: 'inline-block',
        cursor: 'pointer',
        outline: 'none',
        marginBottom: '35px',
        color: '#10254b',
        fontWeight: '500'
    },
    bmItemHover: {
        fontWeight: '600'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0)'
    }
};

export default ({ isOpen, triggerMenu }) => {
    return (
        <Menu
            width={ 200 }
            isOpen={isOpen}
            styles={styles}
            pageWrapId={ "page-wrap" }
            onStateChange={ ({ isOpen }) => triggerMenu(isOpen) }
        >
            <span>Members Chat</span>
            <span>Account Overview</span>
            <span>Add trade</span>
            <span>How it works</span>
            <span>Contact us</span>
        </Menu>
    )
}
