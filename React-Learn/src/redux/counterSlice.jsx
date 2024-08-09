import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 90,
  }

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value=state.value+1;
        },
        decrement:(state)=>{
            state.value=state.value-1;
        }//burada statimize fonksiyon ekledik aşağıda da dışarıda kullanmak için fonksiyonları yazdık ki başka yerde de kullanalım
    },
    
})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer