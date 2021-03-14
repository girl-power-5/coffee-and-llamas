import axios from 'axios';

export default {
  handleRegistration: function(profileData) {
    return axios.post('/api/users/newregistration', profileData)
  },
  createNewEvent: function(eventData) {
    return axios.post('/api/users/newevent', eventData)
  },
  getUserData: function(userId) {
    return axios.get('/api/users/' + userId)
  },
  getSafetySquad: function(userId) {
    return axios.get('/api/users/squad/' + userId)
  },
  getEvents: function(userId) {
    return axios.get('/api/users/events/' + userId)
  },

}