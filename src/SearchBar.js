import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            filter: {
                error:null,
                name: 'all',
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const searchValue= document.getElementById('search').value;
        
    }

    fetchCharacters = searchValue => {
        let name = this.state.filter.name;
        let newChar= [];
        fetch(`https://swapi.co/api/people?q=${searchValue}&name=${name}`)
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                Promise.reject(this.setState({error: 'error'}));
            }
        })
        .then(characters => {
            if(characters.results){
                newChar = characters.results.map(char => {
                    return {
                        name: char.results.name, 
                        height: char.results.height, 
                        mass: char.results.mass, 
                        hair_color: char.results.hair_color, 
                        // "skin_color": "fair", 
                        // "eye_color": "blue", 
                        // "birth_year": "19BBY", 
                        gender: char.results.gender, 
                        homeworld: char.results.homeworld, 
                        films: char.results.films, 
                        species: char.results.species, 
                        vehicles: char.results.vehicles, 
                        starships: char.results.starships, 
                        created: char.results.created, 
                        edited: char.results.edited, 
                        url: char.results.url
                    };
                });
            }else{
                this.setState({error: 'error'});
                alert(this.state.error);
            }
            this.props.ParentCallback(newChar);
        })
    };

    render() {
        return (
            <div>
                <form id='char-search' onSubmit={this.handleSubmit}>
                    <label htmlFor='search'>Search:</label>
                    <input type= 'text' name='search' id='search' placeholder='The Search Awakens'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        );
    }
}
