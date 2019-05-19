import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = React.memo(({label = '', value = 0}) => (
  <div className="total-item">
    <div key="total-item_key" className="total-item_key">{label}</div>
    <div key="total-item_value" className="total-item_value">{value} &euro;</div>
  </div>
))

TodoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default TodoItem
