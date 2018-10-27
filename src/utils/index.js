import axios from 'axios'

const instance = axios.create({
  timeout: '15000',
  baseURL: 'http://211.67.177.56:8080/hhdj'
})

function getToken () {
  let token = localStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common['token'] = token.toString()
  }
}

const getData = {
  get (url, data, config) {
    getToken()
    return new Promise((resolve, reject) => {
      instance.get(url, {
        params: data
      }, config).then(res => {
        if (res.data.code === 403) {
          localStorage.setItem('token', '')
        }
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  send (url, data, config, type) {
    getToken()
    return new Promise((resolve, reject) => {
      instance[type](url, data, config).then(res => {
        if (res.data.code === 403) {
          localStorage.setItem('token', '')
        }
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
