import React, { useContext, useEffect } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/assets/spinner.gif';
import UserItem from './UserItem';
const UserResult = () => {
    const {users,loading,fetchUsers}=useContext(GithubContext)

    useEffect(()=>{
        fetchUsers()
    },[])
   
   if(!loading){
       return (
           <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
             {users.map((user)=>(
                <UserItem key={user.id} user={user}/>
             ))}
           </div>
       );
   }else{
    return <div className='w-100 mt-20'>
        <img width={180} className='text-center mx-auto' src={Spinner} alt="Loading..." />
    </div>
   }

   }

export default UserResult;