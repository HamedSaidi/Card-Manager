import { ADD, EDIT, DELETE } from './actionNames'

export const editProduct = ({id, field, value}) => ({
  type: EDIT,
  field,
  value,
  id
})

export const deleteProduct = (id) => ({
  type: DELETE,
  id
})

export const addNewProduct = () => ({
  type: ADD
})
