import constants from './_constants'

const exampleAction = (n: any) => {
  return {
    type: constants.EXAMPLE_TYPE,
    payload: n
  }
}

const setUsers = (data: any) => ({
  type: constants.SET_USERS,
  payload: data
})

export default {
  exampleAction,
  setUsers
}
