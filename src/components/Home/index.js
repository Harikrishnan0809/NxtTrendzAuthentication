// Write your JS code here
import './index.css'
import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <Header />

        <div className="home-content-container">
          <div className="container">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              className="boy-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
            <p className="home-para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a market of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-now-button" type="button">
              Shop Now
            </button>
          </div>

          <img
            className="large-boy-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    )
  }
}

export default Home
