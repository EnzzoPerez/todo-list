import React, { Component } from 'react';
import "../App.css";

class ListTask extends Component {
    constructor(){
        super()
        this.delete=this.delete.bind(this)
    }

    delete(index){
        this.props.onRemove(index)
    }

    render() {
        let list = this.props.list
        return (
                <div className="container-list">
                    <div id="list" className="ui middle aligned divided list">
                    {list.map((item, index) => (
                        <div key={index} className="item">
                            <div className="right floated content">
                                <button onClick={()=>this.delete(index)} className="negative ui button">
                                    <i className="trash alternate icon"></i>
                                    Delete task
                                    </button>
                            </div>
                            <div className="content">
                                {item}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                    
        );
    }
}

export default ListTask;