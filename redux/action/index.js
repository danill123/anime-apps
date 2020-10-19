export const fetchanimelist = (url) => {
    return async dispatch => {
      // required async keyword on beside func
      try {
        // dispatch({type: 'loading', data: true})
        const response = ((!url) ? "https://kitsu.io/api/edge/anime?page%5Blimit%5D=7&page%5Boffset%5D=0" : url);
        const data = await fetch(response);
        const data_gen = await data.json();
        dispatch({type: 'anime_list', data: data_gen})
      } catch(error) {
        dispatch({type: 'error'})
      }
    }
}