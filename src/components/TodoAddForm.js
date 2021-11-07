import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddBtn, setShowAddForm } = props

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
        onBlur={()=>setShowAddForm(false)}
      />
      <button className="btn-info addBtn" type="submit">確定</button>
      </form>
    </>
  )
}

export default TodoAddForm