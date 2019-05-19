import React from 'react'
import PropTypes from 'prop-types'

import { calculateProductBruttoPrice } from '../helpers'
import { ProductForm, ProductDisplay } from './'

const ProductItem = React.memo((props) => {
  const Item = props.editable ? ProductForm : ProductDisplay
  return (<Item {...props} />)
})

ProductItem.propTypes = {
  editable: PropTypes.bool,
  comment: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired
}

export default ProductItem
