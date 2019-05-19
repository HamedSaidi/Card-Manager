import React from 'react'
import PropTypes from 'prop-types'

import { ProductItem } from './'

const ProductsList = React.memo(({products = [], editProduct, deleteProduct}) => (
  <table className="products-table">
    <thead className="products-table-head">
      <tr>
        <th className="products-table-head-element">#</th>
        <th className="products-table-head-element">Name</th>
        <th className="products-table-head-element">Comments</th>
        <th className="products-table-head-element">Price</th>
        <th className="products-table-head-element">Tax</th>
        <th className="products-table-head-element">Total Item</th>
        <th className="product-item-btn-container"></th>
      </tr>
    </thead>
    <tbody className="products-table-body">
      {
        products.map((product, idx) => (<ProductItem
          key={product.id}
          handleEdit={editProduct}
          cx={idx % 2 ? 'even-item' : 'odd-item'}
          handleDelete={deleteProduct}
          {...product} />))
      }
    </tbody>
  </table>
))

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired
};


export default ProductsList
