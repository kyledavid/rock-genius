import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {formatBoulderName} from '../utils/helpers'

const RouteName = ({routeName, boulderName, boulderData}) => {
  let route = formatBoulderName(routeName)

  return (
    <div className="boulder-name">
      <h2>{route}<span> {boulderData[boulderName].routes[routeName].rating}</span></h2>
      <Link to={`/boulders/${boulderName}`}>Other Routes</Link>
    </div>
  )
}

RouteName.propTypes = {
  routeName: PropTypes.string.isRequired,
  boulderName: PropTypes.string.isRequired,
}

export default RouteName
