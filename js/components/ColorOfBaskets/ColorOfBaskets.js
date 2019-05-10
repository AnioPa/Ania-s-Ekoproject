import React from 'react';

require('./ColorOFBaskets.css');
import papier from "../../../images/papier.png";
import bio from "../../../images/bio.png";
import metale_i_tworzywasztuczne from "../../../images/metale_i_tworzywasztuczne.png";
import odpady_wielkogabarytowe from "../../../images/odpady_wielkogabarytowe.png";
import szklo from "../../../images/szklo.png";
import zielone from "../../../images/zielone.png";
import zmieszane from "../../../images/zmieszane.png";

class ColorOfBaskets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            papier: '',
            bio: '',
            zmieszane: '',
            szklo: '',
            metale: '',
            zielone: '',
            wielkgabarytowe: ''
        }
    }

    handleChange = () => {
        this.setState({
            papier: 'nie wyrzucamy...'
        })
    };
    handleChangeOn = () => {
        this.setState({
            papier: ''
        })
    };
    handleChange1 = () => {
        this.setState({
            bio: 'nie wyrzucamy...'
        })
    };
    handleChangeOn1 = () => {
        this.setState({
            bio: ''
        })
    };
    handleChange2 = () => {
        this.setState({
            zmieszane: 'nie wyrzucamy...'
        })
    };
    handleChangeOn2 = () => {
        this.setState({
            zmieszane: ''
        })
    };
    handleChange3 = () => {
        this.setState({
            szklo: 'nie wyrzucamy...'
        })
    };
    handleChangeOn3 = () => {
        this.setState({
            szklo: ''
        })
    };
    handleChange4 = () => {
        this.setState({
            metale: 'nie wyrzucamy...'
        })
    };
    handleChangeOn4 = () => {
        this.setState({
            metale: ''
        })
    };
    handleChange5 = () => {
        this.setState({
            zielone: 'nie wyrzucamy...'
        })
    };
    handleChangeOn5 = () => {
        this.setState({
            zielone: ''
        })
    };
    handleChange6 = () => {
        this.setState({
            wielkgabarytowe: 'nie wyrzucamy...'
        })
    };
    handleChangeOn6 = () => {
        this.setState({
            wielkgabarytowe: ''
        })

    };


    render() {
        return <div className='colorOfBaskets'>
            <div onMouseEnter={this.handleChange} onMouseLeave={this.handleChangeOn}
                 className='papier'>{this.state.papier}<p>Papier</p>
                <img src={papier}/></div>
            <div onMouseEnter={this.handleChange1} onMouseLeave={this.handleChangeOn1} className='bio'>{this.state.bio}
                <p>bio</p>
                <img src={bio}/>
            </div>
            <div onMouseEnter={this.handleChange2} onMouseLeave={this.handleChangeOn2}
                 className='zmieszane'>{this.state.zmieszane}<p>zmieszane</p>
                <img src={zmieszane}/></div>
            <div onMouseEnter={this.handleChange3} onMouseLeave={this.handleChangeOn3}
                 className='szklo'>{this.state.szklo}<p>szkło</p>
                <img src={szklo}/></div>
            <div onMouseEnter={this.handleChange4} onMouseLeave={this.handleChangeOn4}
                 className='metale'>{this.state.metale}<p>metale i tworzywa sztuczne</p>
                <img src={metale_i_tworzywasztuczne}/></div>
            <div onMouseEnter={this.handleChange5} onMouseLeave={this.handleChangeOn5}
                 className='zielone'>{this.state.zielone}<p>zielone</p>
                <img src={zielone}/></div>
            <div onMouseEnter={this.handleChange6} onMouseLeave={this.handleChangeOn6}
                 className='wielkogabarytowe'>{this.state.wielkgabarytowe}<p>odpady wielkogabarytowe</p>
                <img src={odpady_wielkogabarytowe}/></div>
        </div>

    }
}


export default ColorOfBaskets;