// Write your code here
import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails
    return (
      <li className="list-container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
