// initialstate variable should different with the paramater on function
const initialstate = {
    error : false,
    data: null,
    loading: true
}

const index = (state = initialstate, action) => {
    switch (action.type) {
        case 'loading':
            return {...state, loading: action.data}
        case 'anime_list':
            return {...state, anime_list: action.data, loading: false}
        case 'error':
            return {...state, error: true}
    }
}

export default index;