import api from './ApiService'

const baseURL = '/base64'

export async function encodeBase64(payload) {
    return api.post(baseURL + '/encode', payload)
}

export async function decodeBase64(payload) {
    return api.get(baseURL + '/decode', {
        params: {
            key: payload
        }
    })
}