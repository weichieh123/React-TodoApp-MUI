import React, { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ellipsis from '../images/ellipsis.svg'
import star from '../images/star.svg'

// https://v3.mui.com/style/color/
// https://stackoverflow.com/questions/61053564/react-material-ui-and-color-warning
// https://v3.mui.com/demos/selection-controls/
// https://sites.google.com/im.fju.edu.tw/web/react/material-ui
function TodoItem({ todoItem, handleDelete, handleUpdate, classes }) {
  const [input, setInput] = useState(todoItem.text)
  const keyEnter = (e) => {
    if (e.keyCode === 13) {
      handleUpdate(todoItem.id, 'editedSave', input)
    }
  }

  return (
    <>
      <div id="todoItem" className="todoItem d-flex align-items-center">
        <FormControlLabel
          control={
            <Checkbox
              checked={todoItem.completed}
              onChange={() => handleUpdate(todoItem.id, 'completed')}
              value="checked"
              classes={{
                root: classes[todoItem.group],
                checked: classes.checked,
              }}
            />
          }
        />
        {todoItem.edited && (
          <div className="flex-grow-1">
            <input
              type="text"
              value={input}
              onKeyDown={keyEnter}
              onChange={(e) => {
                setInput(e.target.value)
              }}
              autoFocus
              onBlur={() => handleUpdate(todoItem.id, 'edited')}
            />
          </div>
        )}
        {!todoItem.edited && 
          <div
            className="text-truncate flex-grow-1"
            onClick={() => handleUpdate(todoItem.id, 'edited')}
          >
            {todoItem.text}
          </div>
        }
        <div className="stared d-flex justify-content-center align-items-center">
          {todoItem.star && <img src={star} alt="" />}
        </div>
        <div className="fcnBtns d-flex">
          {todoItem.showBtn && (
            <div className="moreBtnDetail d-flex flex-column">
              <button
                className="delBtn"
                onClick={() => {
                  handleDelete(todoItem.id)
                }}
              >
                X
              </button>
              <button
                className="starBtn"
                onClick={() => {
                  handleUpdate(todoItem.id, 'star')
                }}
              >
                ★
              </button>
            </div>
          )}

          <div
            className="moreBtn d-flex justify-content-center align-items-center"
            onClick={() => handleUpdate(todoItem.id, 'showBtn')}
          >
            <img src={ellipsis} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoItem
