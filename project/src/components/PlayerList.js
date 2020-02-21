import React from 'react';
import PlayerCard from './PlayerCard'

import { connect } from 'react-redux';


const PlayerList = (props) => {
    return (
        <>
            <h1>Hello from PlayerList Component</h1>
            <PlayerCard /> 
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        isFetching: state.isFetching,
        errors: state.errors,        
    }
}

export default connect(
    mapStateToProps,
    {}
)(PlayerList);
