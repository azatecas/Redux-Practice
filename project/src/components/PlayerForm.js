import React, { useState } from 'react';
import { connect } from 'react-redux';

const PlayerForm = (props) => {

    const [player, setPlayer] = useState({
        name:'',
        rank:'',
        nickname: ''
    })

    const inputHandler = e => {
        setPlayer({
            [e.target.name]: e.target.name
        })

    }
    const submitHandler = e => {
        
    }

    return (
        <div>
        <form id="playerForm">
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                name="name"
                label="name"
                placeholder="Lionel Richie"
                value={props.name}
                onChange={inputHandler}
                className="input"
            />
            <label htmlFor="rank">Rank</label>
            <input 
                type="text"
                name="rank"
                label="rank"
                placeholder="1"
                value={props.rank}
                onChange={inputHandler}
                className="input"
            />
            <label htmlFor="nickname">Name</label>
            <input 
                type="text"
                name="nickname"
                label="nickname"
                placeholder="la pulga"
                value={props.nickname}
                onChange={inputHandler}
                className="input"
            />
            <button onClick={submitHandler}>ADD</button>
        </form>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players,        
        errors: state.errors,        
    }
}

export default connect(
    mapStateToProps,
    {}
)(PlayerForm);
