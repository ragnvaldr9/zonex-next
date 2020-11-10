import conastants from './_constants'

const initialState = {
  name: 'example reducer',
  users: []
}

const exampleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case conastants.EXAMPLE_TYPE: 
      return {
        ...state,
        name: action.payload
      }
    case conastants.SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state    
  }
}

export default exampleReducer