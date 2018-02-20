import React, { Component } from 'react';

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
            <div>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>
                            {item}<button onClick={()=>this.delete(index)}>Borrar</button>
                        </li>
                        
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListTask;