import React from 'react';
import Month from './restaurantmap.jsx';

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
                <Month />
            </div>
        )
    }
}

export default App;