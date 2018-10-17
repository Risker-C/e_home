import axios from 'axios'
let token = sessionStorage.getItem('token')
axios.defaults.headers.common['token'] = token
const instance = axios.create({
  timeout: '15000',
  baseURL: '/hhdj'
})

const getData = {
  get (url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {
        params: data
      }, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  send (url, data, config, type) {
    return new Promise((resolve, reject) => {
      instance[type](url, data, config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post (url, data, config) {
    return this.send(url, data, config, 'post')
  },
  put (url, data, config) {
    return this.send(url, data, config, 'put')
  }
}

export const $axios = getData
