import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import API from '../utils/API';
import {Card} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export default function SafetySquad() {
    const userContext = useContext(UserContext);

    const [squad, setSquad] = useState({
        isLoading: true,
        data: null
    })

    useEffect(() => {
        API.getSafetySquad(userContext.id)
            .then(res => setSquad({...squad, isLoading: false, data: res.data}) )
            .catch(err => console.log(err))
            console.log('SQUAD', squad)
    }, [])

    return (
        <div style={{margin: "3em 2em"}}>
            {squad.isLoading ? (
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
                <div>
                    <h2>Safety Squad</h2>
                    <div style={{display:"flex", flexDirection:"row", width: "30em", flexWrap: "wrap"}}>
                    
                    {squad.data.map((member) => (
                    <Card border="light" style={{ width: '10rem', display: "flex" }}>
                    <Card.Title>{member.member_first_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.member_phone_number}</Card.Subtitle>
                    </Card>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}