import React from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import HeadLine from "./components/HeadLine/HeadLine";
import ColorOfBaskets from './components/ColorOfBaskets/ColorOfBaskets'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <HeadLine/>
            <SearchBar/>
            <ColorOfBaskets/>

        </div>
    }
}


export default App;