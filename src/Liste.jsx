import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FcPlus } from "react-icons/fc";
import Popup from "./Popup"

export default class Liste extends Component {


    constructor() {
        super()

        this.state ={
            Items:[],
            FilteredItems:[],
            Selected:null,
            popupvisible:false
        }
        this.loaddata = this.loaddata.bind(this)
        this.handleclick = this.handleclick.bind(this)
        this.Order = this.Order.bind(this)
        this.setToHidden = this.setToHidden.bind(this)
        this.setSelected = this.setSelected.bind(this)
    }


    componentDidMount(){
        this.loaddata()
    }

    setToHidden(){
        this.setState({popupvisible:false})
    }

    loaddata() {
        let header = new Headers();
        header.append('Content-Type', 'application/json')
        header.append('Access-Control-Allow-Origin','*')

        fetch('https://birthlist-api.herokuapp.com/api/BirthItem', {
            method: 'GET',
            headers: header
        }).then(response => response.json()
            .then(response => {
                this.setState({ Items: response })
                var temp = [];
                this.state.Items.forEach(item => {
                    if (item.isAvaillable) {
                        temp.push(item)
                    }
                });
                this.setState({FilteredItems:temp})
            })
        );
        
    }

    handleclick(e) {
        const target = e.target
        const ref = target.name
        window.open(ref)
    }

    Order(){

        if(this.state.Selected){
            this.setState({popupvisible:true});
        }

    }

    setSelected(e){
        const target= e.target;
        const name = target.name;

        this.setState({Selected:name})
    }

    render() {
        return (
            <div> 
                <Carousel>
                    {
                        this.state.FilteredItems.map((value) =>{
                            return(
                                <div key={value.id}>
                                    <img alt={value.name} src={require("./"+value.filePath)} className="photo" />
                                    <button name={value.linkTo} className="legend" onClick={this.handleclick}>{value.name}</button>
                                    <button name={value.id} className="Order" onMouseDown={this.setSelected} onClick={this.Order}><FcPlus name={value.id}/></button>
                                </div>
                            )
                        })
                    }
                </Carousel>
                {
                    this.state.popupvisible ?
                    <Popup Selected={this.state.Selected} loaddata={this.loaddata} setToHidden={this.setToHidden}></Popup>
                    :
                    null
                }
            </div>
        )
    }
}
