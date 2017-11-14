import React, { Component } from 'react'

import { Input, Menu, Segment, Form } from 'semantic-ui-react'

class Permissions extends Component {

    state = { activeItem: 'home', name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state

        this.setState({ submittedName: name, submittedEmail: email })
    }

    render() {

        const { name, email, submittedName, submittedEmail } = this.state

        return (
            <div>
                <h1>Permissions Page</h1>
                <p>Permission: Did you get here via Redux?</p>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                        <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
                <strong>onChange:</strong>
                <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
                <strong>onSubmit:</strong>
                <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
            </div>
        )
    }
}

export default Permissions
