import { TYPES } from './activityTypes'

export const state = () => ({
  activity: null,
  activities: null,

  state: '',
  errors: null,
})

export const getters = {
  activity: state => state.activity,
  activities: state => state.activities
}

export const actions = {
  async getAll({ commit, state }) {
    commit(TYPES.ACTIVITY_LOADING)
    try {
      const activities = await this.$axios.$get('activities')
      commit(TYPES.ACTIVITY_SUCCESS, activities)
    } catch (error) {
      commit(TYPES.ACTIVITY_ERROR, error)
    }
  },

  async getActivityById({ commit, state }, { id }) {

    // https://bubs-admin.herokuapp.com/activities/5e6512560a396500171cb2ca
    commit(TYPES.ACTIVITY_LOADING)
    try {
      const activity = await this.$axios.$get('activities/5e6512560a396500171cb2ca')
      commit(TYPES.GET_ACTIVITY_SUCCESS, activity)
    } catch (error) {
      commit(TYPES.ACTIVITY_ERROR, error)
    }
  }
}

export const mutations = {
  [TYPES.ACTIVITY_SUCCESS] (state, activities) {
    state.activities = activities

    state.state = 'success'
    state.error = null
  },

  [TYPES.ACTIVITY_LOADING] (state) {
    state.state = 'loading'
  },

  [TYPES.ACTIVITY_ERROR] (state, error) {
    state.error = error
    state.state = 'error'
  },

  [TYPES.GET_ACTIVITY_SUCCESS] (state, activity) {
    state.activity = activity

    state.state = 'success'
    state.error = null
  }
}