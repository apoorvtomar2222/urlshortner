const apiCall = 'https://s-o.co.in:1304/api/v2/delhi/feed/10';

const apiCall2 = 'http://localhost:4000/shortner/'
const apiUrl = 'http://localhost:4000/shortner/geturls'
const callAPi = (url) => {
    console.log(url);
    const data = [{
        "url": url
    }
    ]
    console.log('data', data);
    return fetch(apiCall2, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

        .then(data => { return data.json() })
        .then(data => {
            console.log("data in fetch api", data.body);
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
    console.log('Search and called', arguments);
    return (dispatch) => {

        dispatch(
            { type: 'Loader_activated' }
        )

        return (callAPi(username)
            .then((data) => {
                console.log('Data callback from api', data);
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
