import React, { useState, useEffect } from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import cyan from '@material-ui/core/colors/cyan'
import deepOrange from '@material-ui/core/colors/deepOrange'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import star from '../images/star.svg'
import _ from 'lodash'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filteredGroup, setFilteredGroup] = useState('grey')

  // grey, cyan, deepOrange, green, red
  const groupType = [
    {
      group: 'grey',
      color: grey[400],
    },
    {
      group: 'cyan',
      color: cyan[300],
    },
    {
      group: 'deepOrange',
      color: deepOrange[300],
    },
    {
      group: 'green',
      color: green[300],
    },
    {
      group: 'red',
      color: red[300],
    },
  ]
  const useStyles = makeStyles((theme) => ({
    grey: {
      color: grey[600],
      '&$checked': {
        color: grey[500],
      },
    },
    cyan: {
      color: cyan[600],
      '&$checked': {
        color: cyan[500],
      },
    },
    deepOrange: {
      color: deepOrange[600],
      '&$checked': {
        color: deepOrange[500],
      },
    },
    green: {
      color: green[600],
      '&$checked': {
        color: green[500],
      },
    },
    red: {
      color: red[600],
      '&$checked': {
        color: red[500],
      },
    },
    checked: {},
  }))
  const classes = useStyles()

  // 【 0-待辨事項每個的物件值】
  // todo = {
  //   id: 1,
  //   text: 'No1',
  //   group: 'grey/cyan/deepOrange/green/red',
  //   completed: false,
  //   edited: false,
  //   star: false,
  //   showBtn: false,
  // },
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'No1',
      group: 'grey',
      completed: false,
      edited: false,
      star: false,
      showBtn: false,
    },
    {
      id: 2,
      text: 'No2',
      group: 'cyan',
      completed: false,
      edited: false,
      star: false,
      showBtn: false,
    },
    {
      id: 3,
      text: 'No3',
      group: 'deepOrange',
      completed: false,
      edited: false,
      star: false,
      showBtn: false,
    },
    {
      id: 4,
      text: 'No4',
      group: 'green',
      completed: false,
      edited: false,
      star: false,
      showBtn: false,
    },
    {
      id: 5,
      text: 'No5',
      group: 'red',
      completed: false,
      edited: false,
      star: false,
      showBtn: false,
    },
  ])

  const useForceUpdate = () => {
    const [value, setValue] = useState(0)
    return () => setValue((value) => value + 1)
  }

  const handelFilter = (filterGroup, todos) => {
    if (filterGroup === 'star') {
      setFilteredTodos(_.filter(todos, { star: true }))
    } else {
      setFilteredTodos(_.filter(todos, { group: filterGroup }))
      setFilteredGroup(filterGroup)
    }
  }

  const handleUpdate = (id, update, editedText) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex((item) => item.id === id)

    switch (update) {
      case 'edited':
        if (index !== -1) {
          newTodos[index].edited = !newTodos[index].edited
          setTodos(newTodos)
        }
        break
      case 'editedSave':
        if (index !== -1) {
          newTodos[index].text = editedText
          newTodos[index].edited = !newTodos[index].edited
          setTodos(newTodos)
        }
        break
      case 'completed':
        if (index !== -1) {
          newTodos[index].completed = !newTodos[index].completed
          setTodos(newTodos)
        }
        break
      case 'star':
        if (index !== -1) {
          newTodos[index].star = !newTodos[index].star
          setTodos(newTodos)
        }
        break
      case 'showBtn':
        if (index !== -1) {
          newTodos[index].showBtn = !newTodos[index].showBtn
          setTodos(newTodos)
        }
        break
      default:
        return
    }
  }

  // 【 1-input框新增功能 】
  // const handleAddNew = (e) => {
  //   if (e.key === 'Enter') {
  //     const newTodoItem = {
  //       id: +new Date(),
  //       text: e.target.value
  //     }

  //     const newTodos = [newTodoItem, ...todos]
  //     setTodos(newTodos)
  //     setTodoInput('')
  //   }
  // }
  const handleAddBtn = (e) => {
    e.preventDefault()
    console.log('todoInput', todoInput)
    console.log('todos len', todos.length)
    let idNum = todos.length
    const newTodoItem = {
      id: idNum + 1,
      text: todoInput,
      group: filteredGroup,
      completed: false,
      edited: false,
      star: false,
      showBtn: false,
    }

    const newTodos = [...todos, newTodoItem]
    setTodos(newTodos)
    setTodoInput('')
    handelFilter(filteredGroup, newTodos)
  }

  // 【 2-刪除功能 】
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
    handelFilter(filteredGroup, newTodos)
  }

  useEffect(() => {
    handelFilter('grey', todos )
  }, [])

  return (
    <>
      <h1 className="my-3">今日工作清單</h1>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <div className="wrap mx-auto">
        <div className="groupRow d-flex justify-content-between">
          {groupType.map((group, i) => {
            return (
              <div
                className="group d-flex justify-content-center align-items-center"
                key={i}
                style={{ borderBottomColor: group.color }}
                onClick={() => handelFilter(group.group, todos)}
              >
                <div
                  className="circle"
                  style={{ backgroundColor: group.color }}
                ></div>
              </div>
            )
          })}
          <div className="group" onClick={() => handelFilter('star', todos)}>
            <div className="groupStar">
              <img src={star} alt="" />
            </div>
          </div>
        </div>
        <TodoList
        todos={filteredTodos}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        classes={classes}
        />
        <TodoAddForm
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          // handleAddNew={handleAddNew}
          handleAddBtn={handleAddBtn}
        />
      </div>
    </>
  )
}

export default TodoApp
