// initialstate variable should different with the paramater on function
const initialstate = {
    error : false,
    data: null,
    loading: false
}

const index = (state = initialstate, action) => {
    switch (action.type) {
        case 'fetch':
            return {...state}
        default: 
            return {...state}
    }
}

export default index;