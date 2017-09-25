import PropTypes from 'prop-types'
import React from 'react'
import Boulders from '../utils/boulders.json'

const Beta = props => {
  if (props.routeName) {
    return (<div className="beta" id="beta">
      <h3>Problem Beta</h3>
      <p>
        {Boulders["the-pearl"].routes[props.routeName].beta.map((chunk, index) => (<a
          href="#beta"
          key={index}
          style={chunk.activeHolds ? { backgroundColor: '#eee' } : null}
          className={props.activeBeta === index ? 'selected-beta' : null}
          onClick={(e) => {
            props.updateHighlights(chunk.activeHolds, e)
            props.setActiveBeta(index, e)
          }}
        >
          {chunk.chunk}</a>),
        )}
      </p>
    </div>
    )
  } else {
    return <div></div>
  }
}
Beta.propTypes = {
  activeBeta: PropTypes.number,
}

Beta.defaultProps = {
  activeBeta: null,
}

export default Beta
