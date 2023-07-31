import { ref } from 'vue'
import { demoApi, demoApi1 } from '../api/demo'
import { useMemberStore } from '../stores'
export const useLogin = () => {
  const memberStore = useMemberStore()
  const userInfo = ref({
    username: '125000014',
    password: '125000014',
  })
  async function login() {
    let { data } = await demoApi(userInfo.value)
    memberStore.setUserInfo(data)
  }
  async function login1() {
    await demoApi1()
    // memberStore.setUserInfo(data)
  }
  return {
    userInfo,
    login,
    login1,
  }
}
