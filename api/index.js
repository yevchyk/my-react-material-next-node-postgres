import { API_PATH } from '../constants/config'
import fetch from 'unfetch'
import store from '../store'

const getHeader = () => 
    ({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${store().getState().user.token}`,
    })

export const get = (...data) => {
	const [url] = data
    return fetch(`${API_PATH}/${url}`, {
        method: 'get',
        headers: getHeader(),
    })
}
 
export const post = (...data) => {
	const [url, body] = data 
    return fetch(`${API_PATH}/${url}`, {
        method: 'post',
        headers: getHeader(),
        body: JSON.stringify(body)
    }).then(res=>res)
}

export const put = (...data) => {
    const [url, body] = data
    return fetch(`${API_PATH}/${url}`, {
        method: 'put',
        headers: getHeader(),
        body: JSON.stringify(body)
    })
}

export const remove = (...data) => {
	const [url] = data
    return fetch(`${API_PATH}/${url}`, {
        headers: getHeader(),
        method: 'delete',
    })
}