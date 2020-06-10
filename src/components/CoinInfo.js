import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinInfo = (props) => {
    const [coinValue, setCoinValue] = useState('coin');

    useEffect(() => {
        axios
            .get(`https://www.coingecko.com/en/api/coins/${coinValue}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [coinValue])

    /* const search = (e) => {
        e.preventDefault();
        console.log('coinValue', coinValue)
    } */

    const changeHandler = e => {
        e.preventDefault();
        setCoinValue(e.target.value);
    }

    return (
        <div>
            <p>Coin Info</p>
            <form>
                <label htmlFor="coins">Find a coin:</label>
                <select name="coins" id="coins" onChange={changeHandler}>
                    <option value="" key={Date.now()}>Select a coin...</option>
                    {props.coinData.map(coin => {
                        return (
                            <option value={coin.id} key={coin.id} >{coin.id}</option>
                        )
                    })}
                </select>
                {/* <button onClick={search}>Search</button> */}
            </form>
        </div>
    )
}

export default CoinInfo;