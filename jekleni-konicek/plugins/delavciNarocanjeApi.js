export default function ({ $axios, app }, inject) {
  // const token = $auth.strategies.auth0.token.$storage._state['_token.auth0']?? ''

  const api = $axios.create({
    baseURL: 'http://studentdocker.informatika.uni-mb.si:19191/api/Delavec/',
  })
  api.onRequest((config) => {
    if (app.$auth.loggedIn) {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImdvcmFuIiwiZW1haWwiOiJnb3JhbkBnbWFpbC5jb20ifSwiaWF0IjoxNjM5MTc1NDQxfQ.zy56d7PufzZVx5Z5Ulw-1rl0DFP4rFhiXXmrQF5fECY'
      api.setToken(token, 'Bearer')
    }
  })
  inject('delNarApi', api)
}
