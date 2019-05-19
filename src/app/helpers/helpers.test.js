import {
  safeSum,
  calculateProductBruttoPrice,
  calculateTotalBruttoByTaxLevels
} from './helpers'

describe('#safeSum', () => {
  it('should calculate the sum correctly', () => {
    const products = [{ price: 12 }, { price: 8 }, { price: 5 }]
    const inputs = [products, 'price']
    const result = 25

    expect(safeSum(...inputs)).toEqual(result)
  })

  it('should return 0 if provided with wrong params', () => {
    const result = 0
    let inputs = [null, 'testKey']

    expect(safeSum(...inputs)).toEqual(result)

    inputs = []
    expect(safeSum(...inputs)).toEqual(result)

    inputs = [[{price: 12}]]
    expect(safeSum(...inputs)).toEqual(result)
  })

  it('should calculate sum if list has some elements with wrong format', () => {
    const inputs = [[{price: 12}, null, {price: 5}], 'price']
    const result = 17
    expect(safeSum(...inputs)).toEqual(result)
  })

  it('should round the result to 2 digits after decimal point', () => {
    let products = [{ price: 12.2210293 }, { price: 8.00003 }, { price: 5.22 }]
    const inputs = [products, 'price']
    const result = 25.44

    expect(safeSum(...inputs)).toEqual(result)
  })
})

// same for calculateProductBruttoPrice and calculateTotalBruttoByTaxLevels..
