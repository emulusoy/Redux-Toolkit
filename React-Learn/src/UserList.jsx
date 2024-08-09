import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { getAllUsers } from './redux/userSlice';
import User from './redux/User';
function UserList() {
    const dispatch=useDispatch();

    const {users}=useSelector(store=>store.user);
    console.log(users)

    useEffect(()=>{
        dispatch(getAllUsers())//fonksiyonu sayfa yüklendiğinde çağır demektir useEffect sayfa açıldığındayı yapar!
    })

  return (
    <div style={{color:"blue"}}>
      UserList!

      {
        users && users.map((user)=>(
            <User  key={user.id} user={user}></User>//kullanıcıları ekrana yazdırdık
        ))
      }
    </div>
  )
}

export default UserList
