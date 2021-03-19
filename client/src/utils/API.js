import axios from 'axios';

export default {
  handleRegistration: function(profileData) {
    return axios.post('/api/users/newregistration', profileData)
  },
  createNewEvent: function(eventData) {
    return axios.post('/api/users/newevent', eventData)
  },
  saveAlert: function(eventId, alertData) {
    return axios.post('/api/users/alerts/' + eventId, alertData)
  },
  getUserData: function(userId) {
    return axios.get('/api/users/' + userId)
  },
  addMember: function(userId) {
    return axios.post('/api/users/squad', userId)
  },
  getSafetySquad: function(userId) {
    return axios.get('/api/users/squad/' + userId)
  },
  getEvents: function(userId) {
    return axios.get('/api/users/events/' + userId)
  },
  getEventDetails: function(userId, eventId) {
    return axios.get('/api/users/eventDetails/' + userId + '/' + eventId)
  },
  getAlertHistory: function(eventId) {
    return axios.get('/api/users/eventDetails/' + eventId)
  }
}