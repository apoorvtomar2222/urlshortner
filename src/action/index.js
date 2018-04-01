const apiCall = 'https://tranquil-temple-98462.herokuapp.com/shortner/'
const apiUrl = 'https://tranquil-temple-98462.herokuapp.com/shortner/geturls'
const callAPi = (url) => {
    const data = [{
        "url": url
    }
    ]
    return fetch(apiCall, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

        .then(data => { return data.json() })
        .then(data => {
            return Promise.resolve(data)
        })
        .catch(error => { return Promise.reject(error) })
}

const callUrlApi = () => {
    return fetch(apiUrl)
        .then(data => data.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch(error => {
            return Promise.reject(error)
        })
}
export const getUrls = () => {
    return (dispatch) => {
        dispatch({ type: 'loaded_activated' })

        return (callUrlApi()
            .then((data) => {
                dispatch({ type: 'FETCH_URL_SUCCESS', data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_URL_FAILURE', error })
            })
        )
    };
}

export const searchAndListuser = (username) => {
    return (dispatch) => {

        dispatch(
            { type: 'Loader_activated' }
        )

        return (callAPi(username)
            .then((data) => {
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
