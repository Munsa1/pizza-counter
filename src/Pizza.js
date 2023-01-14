import React, { Component } from 'react'
import pizza from './pizza.jpeg'
export class Pizza extends Component {
  render() {
    return (
      <div>
          <img src={pizza} className="app-logo" alt="Pizza" />
      </div>
      
    )
  }
}

export default Pizza;