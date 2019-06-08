import React, { Component } from "react";

class Search extends Component {
    state = {
        
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand" href="https://patportfolio.herokuapp.com/">Find Your Cannabis</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="https://patportfolio.herokuapp.com/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About the Developer
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="https://github.com/discopat1">Github</a>
                                <a class="dropdown-item" href="https://www.linkedin.com/in/patrick-neff/">Linkedin</a>
                            <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="https://patportfolio.herokuapp.com/">Portfolio</a>
                            </div>
                        </li>
                    </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
        )
    }
}

export default Search;