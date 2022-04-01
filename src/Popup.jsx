import React, { Component } from 'react'

export default class Popup extends Component {

    constructor(props) {
        super()
        this.state={
            sel:props.Selected
        }
        this.cancel = this.cancel.bind(this)
        this.Validation =this.Validation.bind(this)
    }

    cancel(){
        this.props.setToHidden()
    }

    Validation(){
        let header = new Headers();
        header.append('Content-Type', 'application/json')
        header.append('Access-Control-Allow-Origin','*')
        fetch('https://birthlist-api.herokuapp.com/api/BirthItem/'+this.state.sel, {
            method:'PUT',
            headers:header,
            body:JSON.stringify({"isAvaillable": false})
        }).then(response =>{
            this.props.loaddata()
            this.props.setToHidden()
        })
    }

  render() {
    return (
      <div className='popup'>
          <p>On réserve le produit ? il ne sera plus accéssible !!</p>
          <div className='info'>
              <button className='validate' onClick={this.Validation}>On réserve</button>
              <button className='cancel' onClick={this.cancel}>On annule</button>
          </div>
      </div>
    )
  }
}
