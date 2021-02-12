import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import styles from './Form.module.scss';
import {connect} from 'react-redux';
import {createUser, editUser} from '../../../store/actions/userActions'

const Form = ({id, name='', username='', email='', address='' , setIsModalOpened, isEditMode,  createUser, editUser}) => {

  const [formData, setFormData ] = useState({
    name: name,
    username: username,
    address: address.city,
    email: email
  })

  const handleSubmit = e => {
    e.preventDefault();
    if(isEditMode) {
        editUser({...formData, address: {
          city: formData.address
        }
      }, id)
    } else {
        createUser({...formData, address: {
          city:formData.address
        }
      })
    }
    setIsModalOpened(false)
  }

  return ( 
    <div className={styles.formWrapper}>
      <div className={styles.formWrapper2}>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Name</p>
            <input type="text" required value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})}/>
          </div>
          <div>
            <p>Username</p>
            <input type="text" required value={formData.username} onChange={(e)=> setFormData({...formData, username: e.target.value})}/>
          </div>
          <div>
            <p>Email</p>
            <input type="email" required value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
          </div>
          <div>
            <p>City</p>
            <input type="text" value={formData.address} onChange={(e)=> setFormData({...formData, address: e.target.value})}/>
          </div>
          <div className={styles.buttonWrapper}>
          <Button onClick={() =>setIsModalOpened(false)}>Cancel</Button>
          <Button type='submit' color='green'>Submit</Button>
          </div>
        </form>
      </div>
    </div>
   );
}

const mapDispatchToProps = dispatch => ({
  editUser: (data, id) => dispatch(editUser(data, id)),
  createUser: (data) => dispatch(createUser(data))
})
const FormConsumer = connect(null, mapDispatchToProps) (Form)
 
export default FormConsumer;