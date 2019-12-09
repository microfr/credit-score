import React from 'react'
import { create } from 'react-test-renderer'
import Creditscore from '.'

describe('Creditscore component', () => {
  const NAME = 'Buckwheat'
  test('Has class \'hello-world\'', () => {
    const { root } = create(<Creditscore name={NAME} />)
    expect(root.findByType('div').props.className).toEqual('hello-world')
  })

  test('Has name property', () => {
    const { root } = create(<Creditscore name={NAME} />)
    expect(root.props.name).toEqual(NAME)
  })

  test('Matches Creditscore innertext.', () => {
    const { root } = create(<Creditscore name={NAME} />)
    expect(root.findByType('div').children.join('')).toEqual('Hello Buckwheat!')
  })
})
