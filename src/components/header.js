import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2 className="ui icon center aligned header">
                        {/* <i aria-hidden="true" className="users circular icon"></i> */}
                        <img src="./assets/todo-icon.png" alt="header" width="150px" height="150px" className="ui large centered image" />
                        <div className="content">To-Do List</div>
                    </h2>
                    
                </div>
            </div>
        );
    }
}

export default Header;