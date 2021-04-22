import React, { Component } from 'react'
import {Card, Table} from 'react-bootstrap';

export default class GroupAdminPage extends Component {
    render() {
        return (
            <Card className = {"border border-dark bg-dark text-white"}>
            <Card.Header>Added Group</Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Назва групи</th>
                            <th>Люди</th>
                            <th>Дата початку</th>
                            <th>Дата закінчення</th>
                            <th>Година початку</th>
                            <th>Година закінчення</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr align="center">
                                <td colSpan="7">No groups available.</td>
                            </tr>
                        </tbody>
                    
                </Table>
            </Card.Body>
        </Card>
        )
    }
}
