import React, { Component } from "react";

class Search extends Component {
    state = {
        
    }
    render() {
        return (
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search.."/>
            </div>
        )
    }
}

export default Search;