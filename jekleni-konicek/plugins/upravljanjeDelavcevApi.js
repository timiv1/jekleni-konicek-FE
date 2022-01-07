export default function ({ $axios, app }, inject) {
  // const token = $auth.strategies.auth0.token.$storage._state['_token.auth0']?? ''

  const api = $axios.create({
    baseURL: 'http://studentdocker.informatika.uni-mb.si:19191/api/Delavec/',
  })
  api.onRequest((config) => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategies.auth0.token.get().split(' ')[1]
      api.setToken(token, 'Bearer')
    }
  })
  inject('upDelApi', api)
}
