import React from "react"
import { Link, Route, useHistory } from 'react-router-dom';
import CurrentEvent from './CurrentEvent';
import SafetySquad from './SafetySquad';
import AddMember from './AddMember';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import NewEvent from './NewEvent';
;
export default function LoginSideBar(props) {
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.logout(history);
    }

    return (

        <div className="loginsidebar">
            {props.isLoggedIn ? (
                <div>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">

                        <Col
                            lg={3}
                        >
                                <ListGroup defaultActiveKey="#link1">
                                    <ListGroup.Item >
                                        <Link to="/home" className="btn btn-link text-secondary">
                                            <span className="text-secondary">Home</span>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item >
                                        <Link to="/newevent" className="btn btn-link text-secondary">
                                            <span className="text-secondary">Create Event</span>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item >
                                        <Link to="/profile" className="btn btn-link text-secondary">
                                            <span className="text-secondary">Profile Information</span>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item >
                                        <Link to="/safetysquad" className="btn btn-link text-secondary">
                                            <span className="text-secondary">Safety Squad</span>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item >
                                        <Link to="/addmember" className="btn btn-link text-secondary">
                                            <span className="text-secondary">Add Safety Squad Member</span>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item >
                                        <Link to="#" className="btn btn-link text-secondary" onClick={handleSubmit}>
                                            <span className="text-secondary">Logout</span>
                                        </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                        </Col>

                        <Route>
                            <Route path="/newevent">
                                <NewEvent />
                            </Route>
                            <Route path="/safetysquad">
                                <SafetySquad />
                            </Route>
                            <Route path="/addmember">
                                <AddMember />
                            </Route>
                        </Route>
                        </Tab.Container>
                    </div>


            )
                : (
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item >
                            <Link to="/" className="btn btn-link text-secondary">
                                <span className="text-secondary">Home</span>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Link to="/login" className="btn btn-link text-secondary">
                                <span className="text-secondary">Login</span>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Link to="/register" className="btn btn-link">
                                <span className="text-secondary">Register</span>
                            </Link>
                        </ListGroup.Item>

                    </ListGroup>
                )}
                </div>

            )
}