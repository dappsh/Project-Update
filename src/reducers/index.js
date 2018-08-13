import {combineReducers} from 'redux';
import user from './user'
import productDetail from './productDetail';
import greetRed from './greetRed'
// import sesuai nama pathnya 

export default combineReducers({

    // membuat state masih kosong tidak ada value apa apa
    user : user,
    
    productDetail : productDetail,

    greetRed : greetRed
})

// global state
// saat di id Login dia akan membuat  