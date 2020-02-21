import React, { useEffect } from 'react';
import PlayerCard from './PlayerCard';
import { connect } from 'react-redux';

import { fetchPlayer } from "../actions";


const PlayerList = (props) => {

    useEffect(() => {
        props.fetchPlayer();
    }, [])


    return (
        <>            
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
    { fetchPlayer }
)(PlayerList);
