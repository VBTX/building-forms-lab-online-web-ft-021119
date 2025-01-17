// Add BandInput component
import React, { Component } from 'react'
// import uuid from 'uuid';
// import { connect } from 'react-redux';

class BandInput extends Component {

	state ={
		name: ""
	}


	handleOnChange = event =>{
		this.setState({
			[event.target.name]:event.target.value
		})

	}


	handleOnSubmit = event => {
		event.preventDefault()
		this.props.addBand(this.state);
		this.setState({
			name: ""
		});


	}


  render() {
    return(
      <div>
      <form onSubmit = {(event) => this.handleOnSubmit(event)}>
      <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
