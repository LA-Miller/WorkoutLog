import React, { useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';

const WorkoutIndex = (props) => {
    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = () => {
        fetch('http://localhost:3000/log', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            setWorkouts(logData)
        })
    }

    useEffect(() => {
        fetchWorkouts();
    }, [])
    
    return(
        <div>
            Workout Index
        </div>
    )
}

export default WorkoutIndex;