export default function ({ $axios, app }, inject) {
  const api = $axios.create({
    baseURL: 'http://studentdocker.informatika.uni-mb.si:12321/',
  })
  api.onRequest((config) => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategies.auth0.token.get().split(' ')[1]
      api.setToken(token, 'Bearer')
    }
  })
  inject('delCasApi', api)
}
