import React from 'react';
import Map from './restaurantmap.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null
        }
    }

    render () {
        return (
            <div id="main">
                <Map />
            </div>
        )
    }
}

export default App;