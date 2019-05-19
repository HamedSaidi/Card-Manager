import { isFinite, isArray, isString, groupBy , sumBy, round, toFinite } from 'lodash'

export const toSafeNumber = value => round(toFinite(value), 2)

export const safeSum = (list, key) => {
  if(isArray(list) && isString(key))
    return toSafeNumber(sumBy(list, key))

  return 0
}

export const calculateProductBruttoPrice = ({price = 0, tax = 0} = {price: 0, tax: 0}) => {
  if (isFinite(price) && isFinite(tax))
    return toSafeNumber(price * (1 + 0.01 * tax))

  return 0
}

const calculateTotalBrutto = (products) => sumBy(products, calculateProductBruttoPrice)

export const calculateTotalBruttoByTaxLevels = (products = []) => {
  const productsByTaxLevels = groupBy(products, 'tax')
  const taxationLevels = Object.keys(productsByTaxLevels)

  return taxationLevels.map(tax => ({
    label: tax,
    value: toSafeNumber(calculateTotalBrutto(productsByTaxLevels[tax]))
  }))
}
