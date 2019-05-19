import React from 'react'
import renderer, {render} from 'react-test-renderer'
import { toString } from 'lodash'
import ProductDisplay from './ProductDisplay'
import { calculateProductBruttoPrice } from '../../helpers'

describe('<ProductDisplay/>', () => {
  it('should render properly', () => {
    const props = {
      id: 1,
      name: 'test name',
      comment: 'test comment',
      price: 21,
      editable: true,
      tax: 0,
      handleEdit: e => true,
      handleDelete: e => true
    }

    const component = renderer.create(<ProductDisplay {...props}  />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    expect(tree.children[0].children[0]).toEqual(toString(props.id))
    expect(tree.children[1].children[0]).toEqual(props.name)
    expect(tree.children[2].children[0]).toEqual(props.comment)
    expect(tree.children[3].children[0]).toEqual(toString(props.price))
    expect(tree.children[4].children[0]).toEqual(toString(props.tax))
    expect(tree.children[5].children[0]).toEqual(toString((calculateProductBruttoPrice(props))))
  })

  it('should call handleDelete when user clicks on delete button', () => {
    const handleDelete = jest.fn(e => true)
    const props = {
      id: 1,
      name: 'test name',
      comment: 'test comment',
      price: 21,
      editable: true,
      tax: 0,
      handleEdit: e => true,
      handleDelete
    }

    const component = renderer.create(<ProductDisplay {...props}  />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback for the delete button
    tree.children[6].children[0].props.onClick()
    expect(handleDelete).toHaveBeenCalled()
  })

  it('should call handleEdit when user clicks on delete button', () => {
    const handleEdit = jest.fn(e => true)
    const props = {
      id: 1,
      name: 'test name',
      comment: 'test comment',
      price: 21,
      editable: true,
      tax: 0,
      handleEdit,
      handleDelete: e => true
    }

    const component = renderer.create(<ProductDisplay {...props}  />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback for the delete button
    tree.children[6].children[1].props.onClick()
    expect(handleEdit).toHaveBeenCalled()
  })
})
