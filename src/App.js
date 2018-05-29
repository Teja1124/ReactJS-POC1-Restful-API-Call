import React, { Component } from 'react';
import './App.css';
import Authenticate from './Components/Authenticate';
import SimpleReactFileUpload from './Components/SimpleReactFileUpload';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Authenticate />,
            <SimpleReactFileUpload />
        )
    }
}
export default App;
