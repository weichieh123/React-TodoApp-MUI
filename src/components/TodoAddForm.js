import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew, handleAddBtn } = props

  return (
    <>
    
    <form className="d-flex my-2" onSubmit={handleAddBtn}>
    
      <input
        className="form-control"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        autoFocus
        placeholder="請輸入今日工作事項"
        // onKeyPress={handleAddNew}
      />
      <button className="btn-info addBtn" type="submit">確定</button>
      </form>
    </>
  )
}

export default TodoAddForm