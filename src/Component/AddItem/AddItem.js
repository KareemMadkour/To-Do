import React, { Component } from 'react';
import './AddItem.css'
class AddItem extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === '') {
            return false
        }
        else {
            this.props.addItem(this.state)
            this.setState({
                name: ''
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Enter name' id='name'
                    onChange={this.handleChange} value={this.state.name} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem;