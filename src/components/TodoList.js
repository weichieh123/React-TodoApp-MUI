import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, handleDelete, handleUpdate, classes}) {

  const noItems = <div className="noItems">目前尚無定義工作事項！</div>

  return (
    <>
      <div className="todoItemWrap">
        {todos.length ? (todos.map((todoItem, i) => {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              classes={classes}
            />
          )
        })) : 
        '' }
      </div>
      {todos.length ? '' : noItems}
    </>
  )
}

export default TodoList