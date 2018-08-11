// export namanya apa dan nama fungsi yang diberikan 

export const userLogin = (x) => {
    console.log('data dari login', x);
    return{
        type: 'user',
        // mengacu pada case di file pada reducer
        // contoh case idLogin pada file idLogin
        payload: x
        // payload adalah apa yang akan di return
    }
} 