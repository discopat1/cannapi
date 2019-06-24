import React, { Component } from 'react';
import API from "../Utils/API";

import "./strains.css";

const StrainList = [{
   Name: "Afpak",
        "id": 1,
        "race": "hybrid",
        "flavors": [
            "Earthy",
            "Chemical",
            "Pine"
            ],
        "effects": {
            "positive": [
                "Relaxed",
                "Hungry",
                "Happy",
                "Sleepy"
                ],
            "negative": [
                "Dizzy"
                ],
            "medical": [
                "Depression",
                "Insomnia",
                "Pain",
                "Stress",
                "Lack of Appetite"
            ]
        }
    },
        {
            Name: "African",
        "id": 2,
        "race": "sativa",
        "flavors": [
        "Spicy/Herbal",
        "Pungent",
        "Earthy"
        ],
        "effects": {
        "positive": [
        "Euphoric",
        "Happy",
        "Creative",
        "Energetic",
        "Talkative"
        ],
        "negative": [
        "Dry Mouth"
        ],
        "medical": [
        "Depression",
        "Pain",
        "Stress",
        "Lack of Appetite",
        "Nausea",
        "Headache"
        ]
        }
        }]
        

class Strains extends Component {

    componentDidMount() {
        API.findAll()
        .then(res => 
            console.log(res.data)
            )
            .catch(err => console.log(err));
    }

    renderStrainList = strain => (
        <React.Fragment>
            <div class="col-sm-6 work  d-flex justify-content-center">
                <div class="card" style={{width: '75%'}}>
                <img src={strain.Image} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">{strain.Name}</h5>
                        <p class="card-text">{strain.race}</p>
                    </div>     
                </div>
            </div>
        </React.Fragment>
    )


    render() {
        return (
            <div class="container-fluid bg-3 text-center">
                <div class="card-group" >
                    {StrainList.map(this.renderStrainList)}
                </div>
            </div>
        );
      }
    }

export default Strains;