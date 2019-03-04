import config from '../config'

const ThingApiService = {
  getThings() {
    return fetch(`${config.API_ENDPOINT}/things`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThing(thingId) {

    const authToken = window.localStorage.getItem('thingful-client-auth-token');

    return fetch(`${config.API_ENDPOINT}/things/${thingId}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThingReviews(thingId) {

    const authToken = window.localStorage.getItem('thingful-client-auth-token');

    return fetch(`${config.API_ENDPOINT}/things/${thingId}/reviews`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postReview(thingId, text, rating) {

    const authToken = window.localStorage.getItem('thingful-client-auth-token');

    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        thing_id: thingId,
        rating,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ThingApiService
