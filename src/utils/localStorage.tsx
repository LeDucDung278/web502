import { User } from "../type/User";

export const authenticated = (user :User, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user))
    next()
}
export const isAuthenticate = () => {
    if(!localStorage.getItem('user')) return
    return JSON.parse(localStorage.getItem('user') as string)
}
export const logout = () => {
    return localStorage.removeItem('user')
}