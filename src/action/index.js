const apiCall = 'https://api.github.com/users/octocat';
export const searchAndListuser = (username) => {
    return (dispatch) => {
        dispatch({ type: 'Loader_activated' });
        return (callAPi(username)
            .then((data) => {
                console.log('data is ', data);
                dispatch(
                    {
                        type: 'FETCH_SUCCESS',
                        data
                    }

                )
            }
            )

            .catch(
                (error) => {
                    dispatch(
                        {
                            type: 'FETCH_FAILURE',
                            error
                        }
                    )
                }
            )

        )
    }
}

const callAPi = (apiCall) => {
    return fetch(apiCall)
        .then((res) => res.json)
        .then(data => { return Promise.resolve(data) })
        .catch(error => { return Promise.reject(error) })
}
