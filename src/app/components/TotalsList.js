import React from 'react'
import PropTypes from 'prop-types'
import { TotalItem } from './'
import { calculateTotalBruttoByTaxLevels, safeSum } from '../helpers'

const TotalsList = React.memo(({products = [], editProduct, deleteProduct}) => {
  const totals = calculateTotalBruttoByTaxLevels(products)
  return (
    <div className="totals-list">
      <TotalItem
        key="total-brutto"
        label="Total Brutto"
        value={safeSum(totals, 'value')} />

      { totals.map(({label, value}) => (<TotalItem key={label} label={`TAX ${label} %`} value={value} />)) }

      <TotalItem
        key="total-netto"
        label="Total Netto"
        value={safeSum(products, 'price')} />
    </div>
  )
})

TotalsList.propTypes = {
  products: PropTypes.array.isRequired
};


export default TotalsList
