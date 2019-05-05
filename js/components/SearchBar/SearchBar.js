import React from 'react';
import TrashList from './TrashList/TrashList';
import './SearchBar.css'
import allTrash from '../../data/allTrash.js'


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            filteredTrash: allTrash,
            text:''

        };
    }
    filterTrash(e) {
        const text = e.currentTarget.value;
        const filteredTrash = this.getFilteredTrashForText(text);
        this.setState({
            filteredTrash
        });
    }
    getFilteredTrashForText(text) {
        return allTrash.filter(trash => trash.name.toLowerCase().includes(text.toLowerCase()))
    }
    handleChange=(event)=>{
        this.setState({text:event.target.value})
    };

    render() {
        if(this.state.text !=='' && this.state.text.length>3) {
            return (
                <div className='searchBarWrapper'>
                    <p>Wpisz co chcesz wyrzucić. Poniżej wyświetli się typ pojemnika ;D</p>
                    <input value={this.state.text} onChange={this.handleChange} onInput={this.filterTrash.bind(this)}/>
                    <p>{this.state.text}  </p>
                    <TrashList trash={this.state.filteredTrash}/>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Wpisz co chcesz wyrzucić. Poniżej wyświetli się typ pojemnika ;D</p>
                    <input value={this.state.text} onChange={this.handleChange} onInput={this.filterTrash.bind(this)}/>
                </div>
            )

        }
    }
}

export default SearchBar;