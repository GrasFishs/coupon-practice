import Vue from "vue";
import Vuex from "vuex";
import * as api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    coupons: [],
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    SET_COUPONS(state, coupons) {
      state.coupons = coupons;
    },
  },
  actions: {
    getProjects({ commit }) {
      commit("SET_PROJECTS", api.getProjects());
    },
    getCoupons({ commit }) {
      commit("SET_COUPONS", api.getCoupons());
    },
  },
  modules: {
    orders: {
      namespaced: true,
      state: {
        couponToProject: {},
        selections: [],
        canSelects: [],
        projects: {},
      },
      mutations: {
        SUB_PROJECT(state, projectId) {
          const count = (state.projects[projectId]?.count || 1) - 1;
          if (count === 0) {
            Vue.delete(state.projects, projectId);
          } else {
            state.projects[projectId].count = count;
          }
        },
        SET_PROJECTS(state, projects) {
          state.projects = projects;
        },
        ADD_PROJECT(state, { projectId, projectInfo }) {
          if (projectId in state.projects) {
            state.projects[projectId].count += 1;
          } else {
            Vue.set(state.projects, projectId, {
              id: projectId,
              projectInfo,
              count: (state.projects[projectId] || 0) + 1,
            });
          }
        },
      },
      actions: {
        addProject({ commit, rootState }, projectId) {
          commit("ADD_PROJECT", {
            projectId,
            projectInfo: rootState.projects.find((n) => n.id === projectId),
          });
        },
      },
      getters: {
        totalOriginPrice(state) {
          return Object.values(state.projects).reduce(
            (total, p) => total + p.projectInfo.price * p.count,
            0
          );
        },
      },
    },
  },
});
