/*
请求模块
 */
import ajax from './ajax'
const BASE_URL = 'api'
export const reqAdminLogin = ({username, password}) => ajax(`${BASE_URL}/adminLogin`, {username, password}, 'POST')
export const reqAddApp = ({name, icon, app}) => ajax(`${BASE_URL}/addApp`, {name, icon, app}, 'POST')
