import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null
        }
    }

    render () {
        return (
            <div>
                <h3>This is the month component</h3>
            </div>
        )
    }
}

export default Map;