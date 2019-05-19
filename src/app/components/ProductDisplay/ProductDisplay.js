import React from 'react'
import PropTypes from 'prop-types'

import { calculateProductBruttoPrice } from '../../helpers'

const ProductDisplay = React.memo(({comment, handleDelete, handleEdit, id, name, price, tax}) => (
  <tr key={id}>
    <td className="products-table-element">{id}</td>
    <td className="products-table-element">{name}</td>
    <td className="products-table-element">{comment}</td>
    <td className="products-table-element">{price} &euro;</td>
    <td className="products-table-element">{tax} %</td>
    <td className="products-table-element">{calculateProductBruttoPrice({price, tax})}</td>
    <td className="product-item-btn-container">
      <button onClick={() => handleDelete(id)}>X</button>
      <button onClick={() => handleEdit({id, field: 'editable', value: true})}>Edit</button>
    </td>
  </tr>
))

ProductDisplay.propTypes = {
  comment: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired
}

export default ProductDisplay
