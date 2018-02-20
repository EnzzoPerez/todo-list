import React, { Component } from 'react';

class AddTask extends Component {
    constructor(){
        super()
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(event){
        event.preventDefault()
        let task = event.target['task'].value
        this.props.handleState(task)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <input name="task" type="text"/>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        );
    }
}

export default AddTask;