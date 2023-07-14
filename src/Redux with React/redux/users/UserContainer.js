import { useEffect } from 'react'
import { fetchUsers } from './userActions'
import { connect } from 'react-redux'

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    console.log(userData)
  return (
    <div className='store__container'>
        <h2>User Container</h2>
        {
            userData.loading
                ? <p>Loading...</p>
                : userData.error
                    ? <p>{userData.error}</p>
                    : userData && userData.users && userData.users.map( (user, index) => <p key={index}>{user.name}</p>)
        }
    </div>
  )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
