import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { FormField, FiltersList, TotalsList } from './components'
import { filterByDisplayCategory } from './helpers'

import { ProductsList } from './components'
import { editProduct, deleteProduct, addNewProduct } from '../store/actions'

const App = React.memo(({editProduct, addNewProduct, deleteProduct, products}) => (
  <div className="body-container">
    <h1 className="header-title">Card</h1>
    <div className="products-table-container">
      <ProductsList products={products} deleteProduct={deleteProduct} editProduct={editProduct}/>
      <button className="add-new-product-btn" onClick={addNewProduct} >Add New Product</button>
    </div>
    <div className="totals-list-container">
      <TotalsList products={products} />
    </div>
  </div>
))

App.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  editProduct: id => dispatch(editProduct(id)),
  deleteProduct: category => dispatch(deleteProduct(category)),
  addNewProduct: () => dispatch(addNewProduct()),
})

const mapStateToProps = products => ({ products })

export default connect(mapStateToProps, mapDispatchToProps)(App)
