// @ts-check
import { defineStore } from 'pinia';

// export const useUserStore = defineStore({
//     id: 'user',
//     state: () => ({
//         name: 'Анатолий Иванов',
//         isAdmin: true,
//     }),
//     actions: {
//         async login(user, password) {
//             const userData = await apiLogin(user, password);

//             this.$patch({
//                 name: user,
//                 ...userData,
//             });
//         },
//         logout() {
//             this.$patch({
//                 name: '',
//                 isAdmin: false,
//             });

//             // we could do other stuff like redirecting the user
//         },
//     },

// });
export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Анатолий Иванов',
    date: '14.02.1985',
    city: 'Москва',
    gender: 'Мужской',
  }),
  //   getters: {},
  actions: {}, // actions can be async
});
/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a, p) {
  if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true });
  if (p === 'ed') return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error('invalid credentials'));
}
