import React, {useState} from 'react';

import './App.css';
import Trades from '../components/Trades';
import Header from '../components/Header';
import Menu from "../components/Header/Menu";

export default () => {
    const [isOpen, triggerMenu] = useState(false);
    return (
        <div className="App" >
            <Menu isOpen={isOpen} triggerMenu={triggerMenu}/>
            <main id="page-wrap">
                <Header triggerMenu={triggerMenu} isOpen={isOpen} />
                <Trades />
            </main>
        </div>
    );
}

