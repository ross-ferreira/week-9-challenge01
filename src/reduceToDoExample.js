import React, { useReducer, useState } from "react"

const initialState = {
  tasks: [
    { text: "Learn about lifecycle methods", completed: true },
    { text: "Learn about AJAX", completed: true },
    { text: "Learn about promises", completed: true },
    { text: "Learn about hooks", completed: false },
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task,
        ]
      }
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.index)
      }
    case 'COMPLETE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          return index === action.index ? { ...task, completed: true } : task
        })
      }
    default:
      return state
  }
}

export default () => {
  const [newTaskText, setNewTaskText] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleTextChange = (event) => {
    setNewTaskText(event.target.value)
  }

  const handleButtonPress = () => {
    const action = { type: 'ADD_TASK', task: { text: newTaskText, completed: false }}

    dispatch(action)
    setNewTaskText('')
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold p-5 pb-2">Tasks</h1>
        <ul className="mb-10">
          { state.tasks.map((task, index) => (
            <li key={index} className="text-gray-700 font-semibold text-lg p-5 border-b border-gray-400">
              <input onChange={() => {}} checked={ task.completed } class="mr-2 leading-tight" type="checkbox" />
              <span class="text-sm">
                { task.text }
              </span>
              <button
                onClick={() => { dispatch({ type: 'REMOVE_TASK', index }) }}
                class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove Task
              </button>
            </li>
          ))}
        </ul>

        <input value={newTaskText} onChange={handleTextChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-gray-500 rounded py-3 px-4 mb-3" />

        <button
          onClick={handleButtonPress}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add ToDo
        </button>
      </div>
    </>
  )
}