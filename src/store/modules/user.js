import { createSlice } from "@reduxjs/toolkit"
import { setToken as _setToken, getToken, removeToken } from "@/utils"
import { loginAPI, getProfileAPI} from "@/apis/user"

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || "",
    userInfo: {}

  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.userInfo = {}
      state.token = ""
      removeToken()
    }
  }
})

const { setToken,setUserInfo, clearUserInfo } = userStore.actions

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginAPI(loginForm)
    dispatch(setToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getProfileAPI()
    dispatch(setUserInfo(res.data)) 
  }
}

export {setToken, fetchLogin, fetchUserInfo, clearUserInfo}

export default userStore.reducer