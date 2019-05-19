import { isFinite, isArray, isString, groupBy , sumBy, round, toFinite } from 'lodash'

import { ADD, DELETE, EDIT } from './actionNames'

const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

export const initialState = [
  {
    id: uniqueId.get(),
    name: '',
    comment: '',
    price: 0,
    editable: true,
    tax: 0
  },
  {
    id: uniqueId.get(),
    name: 'JS-102',
    comment: 'here comment',
    price: 11,
    tax: 7
  },
  {
    id: uniqueId.get(),
    name: 'JS-201',
    comment: 'here comment',
    price: 13.45,
    tax: 19
  },
  {
    id: uniqueId.get(),
    name: 'JS-202',
    comment: 'here comment',
    price: 12,
    tax: 19
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: uniqueId.get(),
          name: '',
          comment: '',
          price: 0,
          editable: true,
          tax: 0
        }
      ]

    case EDIT:
      return state.map(product =>
        (product.id === action.id)
          ? {...product, [action.field]: action.value}
          : product
      )

    case DELETE:
      return state.filter(product => product.id !== action.id)

    default:
      return state
  }
}

export default reducer
