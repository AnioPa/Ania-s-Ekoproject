import React from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import HeadLine from "./components/HeadLine/HeadLine";

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <HeadLine/>
            <SearchBar/>
        </div>
    }
}


export default App;