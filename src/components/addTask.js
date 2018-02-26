import React, { Component } from 'react';

class AddTask extends Component {
    constructor(){
        super()
        this.handleAdd = this.handleAdd.bind(this)
        this.handleValue=this.handleValue.bind(this)
    }

    handleAdd(event){
        event.preventDefault()
        let task = event.target['task'].value
        this.props.handleState(task)
    }

    handleValue(event){
        let task = event.target.value
        this.props.handleInput(task)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    
                    <div className="ui action input">
                        <input name="task" type="text" value={this.props.input} onChange={this.handleValue}/>
                        <button type="submit" className="ui primary button">
                            <i className="plus circle icon"></i>
                            Add Task
                        </button>
                    </div>

                    
                </form>
            </div>
        );
    }
}

export default AddTask;