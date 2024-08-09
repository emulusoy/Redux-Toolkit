import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};


export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;//içindeki dataları dön demektir 
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialState, //bu : sonraki initial state yukarıda belirlediğimizdir biz oraya başka isim de verebiliriz!
  reducers: {
    //HTTP İSTEĞİ YOKSA KULLANILIR HTTP İSTEĞİ VARSA AŞAĞIDAKİNİ KULLAN!
  },
  extraReducers: (builder) => {
//http istekleri burada yapılır!
    builder.addCase(getAllUsers.fulfilled,(state,action)=>{//fullfield başarılı olursa demek başarılı olursa sağdaki fonksiyonu çalıştır
        state.users=action.payload;                        //dönen değeri actiona atarız! response.data içindekini yani! 
                                                        //Boş duran state.users içine yakaladığın payloadla yükle!
    })//bir durum eklemeye yarar
  },
});
            //bu alttaki parantez sadece reducers parametresi altındakileri kapsar!
export const {} = userSlice.actions;
export default userSlice.reducer; //sliceleri dışarıda kullanıma AÇ
