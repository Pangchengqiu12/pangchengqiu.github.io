import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useMemberStore = defineStore(
  'userinfo',
  () => {
    const userInfo = ref(null)
    const setUserInfo = (val) => {
      userInfo.value = val
    }
    return {
      userInfo,
      setUserInfo,
    }
  },
  {
    // persist: true,
    persist: [
      {
        key: 'userInfo',
        storage: localStorage,
        paths: ['userInfo'],
      },
    ],
  },
)
