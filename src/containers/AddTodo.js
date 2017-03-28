import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { store } from '../store'

let AddTodo = ({ dispatch }) => {

  let input

  return (
    <div>
      <label>Special Requests</label>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        console.log('Store: ', store.getState())
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Request
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
