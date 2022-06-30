import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  title: '',
  info: '',
  disclaimer: ''
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'fixed-income':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store