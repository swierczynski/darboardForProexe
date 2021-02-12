import React, { useEffect, useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import styles from './UserView.module.scss'
import {connect} from 'react-redux';
import {fetchUsers} from '../../store/actions/userActions';
import User from '../../components/molecules/User/User';
import Form from '../../components/molecules/Form/Form';

const UserView = ({fetchUsers, users}) => {

  const [isModalOpened, setIsModalOpened] = useState(false)

  const connectUsers = () => {
    fetchUsers()
  }

  useEffect(()=> {
    connectUsers()
  }, [fetchUsers])

  const allUsers = users && users.map(user => <User key={user.id} {...user} />)

  return ( 
    <div className={styles.main}>
      <div className={styles.upperWrapper}>
        <p>User list</p>
        <Button color='rgb(26, 115, 232)' onClick={()=> setIsModalOpened(true)}>Add new</Button>
      </div>
      <div className={styles.userDisplay}>
        <div className={styles.tableWithTitleValues}>
        <table>
        {allUsers.length !== 0 && (
          <tr>
            <td>Id</td> 
            <td>Name</td> 
            <td>Username</td>
            <td>Email</td>
            <td>City</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        )}
          {allUsers}
        </table>
        {allUsers.length == 0 && <h3>There is no data ...</h3>}
        </div>
      </div>
    {
      isModalOpened && <Form isEditMode={false} setIsModalOpened={setIsModalOpened}/>
    }
    </div>
   );
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: ()=> dispatch(fetchUsers()),
})

const UserViewConsumer = connect (mapStateToProps, mapDispatchToProps) (UserView)
 
export default UserViewConsumer;