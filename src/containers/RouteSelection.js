import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default () => (
  <div className="container">
    <h1>Choose a Route</h1>
    <ul className="route-list">
      <li>
        <Link to="/boulder/pearl/the pearl" >The Pearl</Link>
      </li>
    </ul>
  </div>
)
