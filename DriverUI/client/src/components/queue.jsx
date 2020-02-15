import React from 'react';

class Queue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null
        }
    }
    
    render () {
        return (
            <div id="queue">
              This is the queue component
            </div>
        )
    }
}

export default Queue;