import React, { useState } from 'react';
import { deleteUser } from '../../../store/actions/userActions';
import Button from '../../atoms/Button/Button';
import Form from '../Form/Form';
import {connect} from 'react-redux'

const User = ({ deleteUser, id, name, username, email, address }) => {

  const [isModalOpened, setIsModalOpened] = useState(false);

  return ( 
    <>
    <tr>
      <td>{id}</td> 
      <td>{name}</td> 
      <td>{username}</td>
      <td>{email}</td>
      {address && <td>{address.city}</td>}
      <td>
        <Button color='yellow' onClick={()=> setIsModalOpened(true)}>Edit</Button>
      </td>
      <td>
        <Button color='red' onClick={()=> deleteUser(id)}>Delete</Button>
      </td>
    </tr>
    {
      isModalOpened && <Form isEditMode={true} setIsModalOpened={setIsModalOpened} id={id} name={name} username={username} email={email} address={address} />
    }
    </>
   );
}

const mapDispatchToProps = dispatch => ({
  deleteUser: (id) => dispatch(deleteUser(id))
})

const UserConsumer = connect(null, mapDispatchToProps)(User)
 
export default UserConsumer;