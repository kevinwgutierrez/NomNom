import React from 'react';
import Queue from './queue.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map : {}
        }
    }

    componentDidMount () {
      tt.setProductInfo('com.company-name.product-name', '3.0');
      const map = tt.map({
          key: 'PcAGcI30kBAzzNfuBQTzZ0oGgnRNL7LQ',
          container: 'map',
          style: 'tomtom://vector/1/basic-main',
          center: [-122.396525, 37.787415],
          zoom: 15
      });
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());
      this.setState({
        map: map
      })
    }

    updateRoute() {
      
    }

    render () {
        return (
            <div id="main">
              <Queue />
            </div>
        )
    }
}

export default App;