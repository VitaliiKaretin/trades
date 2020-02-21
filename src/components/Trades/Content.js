import React from 'react';
import BTCimg from '../../assets/btc.png';
import ETHimg from '../../assets/eth.png';

const renderImage = value => {
    if(value)
        switch (value) {
            case "BTC":
                return BTCimg;
            case "ETH":
                return ETHimg;
            default:
                return null;
        }
    return null;
};

export default ({ data }) =>
    <div className="tab-content">
        {
            data && data.map( item =>
                <div className="trade-item">
                    <div className="trade-info">
                        <div className="coin">
                            <img src={renderImage(item.coin)} alt="" height="30px"/>
                        </div>
                        <div className="trade-descr">
                            <div className="title">{item.exchangeTitle}</div>
                            <div className="subtitle">{item.exchangename}</div>
                        </div>
                    </div>
                    <div className={`trade-amount ${item.amount > 0 ? 'positive':'negative'}`}>
                        {item.amount}€
                    </div>
                    {console.log(item)}
                </div>
            )
        }
    </div>
