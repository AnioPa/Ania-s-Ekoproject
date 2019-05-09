import React from 'react';
require ('./ColorOFBaskets.css');

class ColorOfBaskets extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            papier:''
        }
    }
    handleChange=()=>{
        this.setState({
            papier:'nie wyrzucamy...'
        })
    }
    handleChangeOn=()=>{
        this.setState({
            papier:''
        })
    }



    render() {
        return <div className='colorOfBaskets'>
            <div onMouseEnter={this.handleChange} onMouseLeave={this.handleChangeOn} className='papier' >{this.state.papier}</div>
            <div className='bio' ></div>
            <div className='zmieszane'></div>
            <div className='szklo' ></div>
            <div className='metale' ></div>
            <div className='zielone' ></div>
            <div className='wielkogabarytowe'></div>
        </div>

    }
}


export default ColorOfBaskets;