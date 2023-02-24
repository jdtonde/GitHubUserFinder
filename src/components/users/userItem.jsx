import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UserResults from '../users/UserResults'

function userItem({user:{login,avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>
             <div>
                <div className='avatar'>
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="profile" />
                    </div>
                </div>
             </div>
             <div>
                <h2 className='card-title'>{login}</h2>
                <Link to={`/user/${login}`} className='text-base-content text-opacity-40'>visite profile</Link>
             </div>
        </div>
        </div>
  )
}

userItem.propTypes={
   user:PropTypes.object.isRequired 
}

export default userItem