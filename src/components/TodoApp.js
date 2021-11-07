import React, { useState, useEffect } from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'
import { groupType, useStyles, data } from '../data'
import star from '../images/star.svg'
import plus from '../images/plus.svg'
import _ from 'lodash'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filteredGroup, setFilteredGroup] = useState('grey')
  const [showAddForm, setShowAddForm] = useState(false)
  const classes = useStyles()
  const [todos, setTodos] = useState(data)

  const handelFilter = (filterGroup, todos) => {
    if (filterGroup === 'star') {
      setFilteredTodos(_.filter(todos, { star: true }))
      setFilteredGroup('star')
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
    setShowAddForm(false)
  }

  // 【 2-刪除功能 】
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
    handelFilter(filteredGroup, newTodos)
  }

  useEffect(() => {
    handelFilter('grey', todos )
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                className="group d-flex justify-content-center align-items-center cursor-pointer"
                key={i}
                style={{ 
                  borderBottom:
                  group.group===filteredGroup ? '2px solid'+group.color : 'none' 
                  }}
                onClick={() => handelFilter(group.group, todos)}
              >
                <div
                  className="circle"
                  style={{ backgroundColor: group.color }}
                >{group.text}</div>
              </div>
            )
          })}
          <div 
            className="group cursor-pointer" 
            style={{
              borderBottom:
              filteredGroup==='star' ? '2px solid #F4F791': 'none'
            }}
            onClick={() => handelFilter('star', todos)}>
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
        
        {showAddForm ? 
          <TodoAddForm
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            handleAddBtn={handleAddBtn}
            setShowAddForm={setShowAddForm}
          />
          :
          <div className="icon-add mx-auto mt-3 cursor-pointer" onClick={()=>setShowAddForm(true)}>
            <img src={plus} alt="" />
          </div>
        }
      </div>
    </>
  )
}

export default TodoApp
