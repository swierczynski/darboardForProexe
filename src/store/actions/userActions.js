import axios from 'axios';

const url = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';

export const fetchUsers = () => async(dispatch) => {
  try {
    const { data } = await axios.get(url)

    dispatch({
      type: 'FETCH_USERS',
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}
export const createUser = (formData) => async(dispatch)=> {
  try {
    const generateId = () => {
      return Math.floor(Math.random()* 100000) 
    }
    const id = generateId()
    const {data} = await axios.post(url, {...formData, id})

    dispatch({
      type: 'CREATE_USER',
      payload: data
    })

  } catch (error) {
    console.log(error);
  }
}
export const deleteUser = id => async(dispatch) => {
  try {
    await axios.delete(`${url}/${id}`)
    dispatch({
      type: 'DELETE_USER',
      payload: id
    })
  } catch (error) {
    console.log(error);
  }
}
export const editUser = (formData, id) => async(dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, formData);
    console.log(data);
    dispatch({
      type: 'EDIT_USER',
      payload: data
    })
  } catch (error) {
    
  }
}

