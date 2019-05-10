import React from 'react';
import TrashList from './TrashList/TrashList';
require ('./SearchBar.css');
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
                <div className='searchBarDiv' >
                    <p className='searchBarP'>Ta wyszukiwarka powstała aby ułatwić Ci segregacje odpadów.</p>
                    <input className='searchBarInput' value={this.state.text} onChange={this.handleChange} onInput={this.filterTrash.bind(this)} placeholder='Wpisz co chcesz wyrzucić. Poniżej wyświetli się kolor pojemnika'/>
                    <p className='searchBarPToo'>{this.state.text}  </p>
                    <TrashList trash={this.state.filteredTrash}/>
                </div>
            )
        } else {
            return (
                <div className='searchBarDiv'>
                    <p className='searchBarP'>Ta wyszukiwarka powstała aby ułatwić Ci segregacje odpadów.</p>
                    <input className='searchBarInput' value={this.state.text} onChange={this.handleChange} onInput={this.filterTrash.bind(this)} placeholder='Wpisz co chcesz wyrzucić. Poniżej wyświetli się typ pojemnika'/>
                </div>
            )

        }
    }
}

export default SearchBar;