import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import topponcino from "./images/topponcino.jpg"
import kit from "./images/kit.jpg"
import lit from "./images/lit.jpg"
import tapis from "./images/tapis.jpg"
import baby from "./images/babyphone.jpg"

export default class Liste extends Component {


    constructor(){
        super()
        
        this.handleclick = this.handleclick.bind(this)
    }

    handleclick(e){
        const target = e.target
        const ref = target.name
        window.open(ref)
    }

    render() {
        return (
            <Carousel>
                <div>
                    <img alt="Topponcino" src={topponcino} className="photo"/>
                    <button name='https://www.etsy.com/fr/listing/808414372?fbclid=IwAR1EV72xb5i9LL8gr0pGooi7MhbrNWxUm9zy7nDZ0573A1Zj01eCYpWHZLU' className="legend" onClick={this.handleclick}>Topponcino</button>
                </div>
                <div>
                    <img alt="kit" src={kit} className="photo"/>
                    <button name='https://manamani.com/produit/kit-bebe/?wpam_id=11&fbclid=IwAR0RanHOwjaBJ24x4F59brU-f3c3eOU1gOA3eZVSWlCWCldKaOCWLLHXRM8' className="legend" onClick={this.handleclick}>Kit lingettes lavables bébé</button>
                </div>
                <div>
                    <img alt="Lit parapluie" src={lit} className="photo"/>
                    <button name='https://www.bebe9.com/lit-parapluie-easy-2.html' className="legend" onClick={this.handleclick}>Lit parapluie</button>
                </div>
                <div>
                    <img alt="Tapis d'éveil" src={tapis} className="photo"/>
                    <button name='https://fr.shop-orchestra.com/fr/tapis-d%26%2339eveil-multipoches-a-details-en-relief-PEVFW1.html' className="legend" onClick={this.handleclick}>Tapis d'éveil</button>
                </div>
                <div>
                    <img alt="baby phone" src={baby} className="photo"/>
                    <button name='https://www.bebe9.com/babyphone-simply-care-2-adaptateurs-inclus.html' className="legend" onClick={this.handleclick}>Babyphone</button>
                </div>
            </Carousel>
        )
    }
}
