import FacebookOauth2Provider from 'torii/providers/facebook-connect'

export default FacebookOauth2Provider.extend({
  fetch(data) {
    console.log(data)
    return data
  }
})
