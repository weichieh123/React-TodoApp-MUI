import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import cyan from '@material-ui/core/colors/cyan'
import deepOrange from '@material-ui/core/colors/deepOrange'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

// grey, cyan, deepOrange, green, red
export const groupType = [
  {
    group: 'grey',
    text:'一般',
    color: grey[500],
  },
  {
    group: 'cyan',
    text:'採買',
    color: cyan[400],
  },
  {
    group: 'deepOrange',
    text:'英文',
    color: deepOrange[300],
  },
  {
    group: 'green',
    text:'繳費',
    color: green[300],
  },
  {
    group: 'red',
    text:'前端',
    color: red[300],
  },
]

export const useStyles = makeStyles((theme) => ({
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


// todo = {
//   id: 1,
//   text: 'No1',
//   group: 'grey/cyan/deepOrange/green/red',
//   completed: false,
//   edited: false,
//   star: false,
//   showBtn: false,
// },
export const data = [
  {
    id: 1,
    text: '預設分類清單項目',
    group: 'grey',
    completed: false,
    edited: false,
    star: false,
    showBtn: false,
  },
  {
    id: 2,
    text: '買餅乾',
    group: 'cyan',
    completed: false,
    edited: false,
    star: false,
    showBtn: false,
  },
  {
    id: 3,
    text: '背英文單字30個',
    group: 'deepOrange',
    completed: false,
    edited: false,
    star: false,
    showBtn: false,
  },
  {
    id: 4,
    text: '繳水電',
    group: 'green',
    completed: false,
    edited: false,
    star: false,
    showBtn: false,
  },
  {
    id: 5,
    text: '學redux',
    group: 'red',
    completed: false,
    edited: false,
    star: false,
    showBtn: false,
  },
  {
    id: 6,
    text: '繳電話費',
    group: 'green',
    completed: false,
    edited: false,
    star: false,
    showBtn: false,
  },
]
