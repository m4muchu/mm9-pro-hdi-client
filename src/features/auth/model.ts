export interface loginParam {
  email: string
  password: string
}

export interface signInParam {
  name: string
  email: string
  password: string
}

export interface Data {
  id: number
  email: string
  accessToken: string
}

export interface LoginResponse {
  data: Data
  success: boolean
}
