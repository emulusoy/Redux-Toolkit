
import './App.css'
import { useSelector, useDispatch } from 'react-redux'//useselector import ediyoruz
import { decrement, increment } from './redux/counterSlice';
import UserList from './UserList';
function App() {
  const {value}=useSelector((store)=> store.counter);//use selectör ile onu sec store içindeki yerden store.counteri ekrana yazdıur. 
      //  ^tam üstündeki objectdisctuctin yapılır direk başka yerdeki value getirmek için  //Storun içinde bulunan counter slicesini çek 
  console.log(value)

  const dispatch=useDispatch();
  //burada da fonksiyonu çağırmak için reducers içindeki fonksiyonlarımızı buraya getirdik dispatch git getir anlamına gelir

  //butona da ekledik bunu çalıştı!

  return (
    <div>
      <div>{value}</div>
      <div><button onClick={()=> dispatch(increment())}>ARTTIR</button></div>
      <div><button onClick={()=> dispatch(decrement())}>AZALT</button></div>
      <UserList></UserList>
    </div>
     
  )
}

export default App
