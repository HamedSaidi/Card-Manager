import React from 'react'
import PropTypes from 'prop-types'

import { calculateProductBruttoPrice, toSafeNumber } from '../helpers'

const ProductForm = React.memo(({comment, handleDelete, handleEdit, id, name, price, tax}) => (
  <tr key={id}>
    <td className="products-table-element">
      {id}
    </td>
    <td className="products-table-element">
      <input value={name} onChange={(e) => handleEdit({id, field: 'name', value: e.target.value})} />
    </td>
    <td className="products-table-element">
      <input value={comment} onChange={(e) => handleEdit({id, field: 'comment', value: e.target.value})} />
    </td>
    <td className="products-table-element">
      <input type="number" value={price} onChange={(e) => handleEdit({id, field: 'price', value: toSafeNumber(e.target.value)})} />
    </td>
    <td className="products-table-element">
      <input type="number" value={tax} onChange={(e) => handleEdit({id, field: 'tax', value: toSafeNumber(e.target.value)})} />
    </td>
    <td className="products-table-element">
      {calculateProductBruttoPrice({price, tax})}
    </td>
    <td className="product-item-btn-container">
      <button onClick={(e) => handleDelete(id)}>X</button>
      <button onClick={(e) => handleEdit({id, field: 'editable', value: false})}>save</button>
    </td>
  </tr>
))

ProductForm.propTypes = {
  comment: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired
}

export default ProductForm
