import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext';
import API from '../utils/API';

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
    }, [])

    return (
        <div>
            {squad.isLoading ? (
                <p>I'm loading</p>
            ) : (
                <div>
                    <p>done loading!!!</p>
                    <h2>Safety Squad</h2>
                    <ul>
                        {squad.data.map((member) => (<li>{member.member_first_name}</li>))}
                        <li>Safe Squad #1</li>
                        <li>Safe Squad #2</li>
                        <li>Safe Squad #3</li>
                    </ul>
                </div>
            )}
            </div>
    )
}