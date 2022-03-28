export interface IUser {
  name: string
  email: string
  password: string
  createdAt: Date
}

export interface IUserLogin {
  email: string
  password: string
}

interface IMessageResponse {
  message: string
}
interface ILoginResponse {
  user: IUser
  token: string
}

export interface IResponseData {
  status: number
  data: IMessageResponse | ILoginResponse
}