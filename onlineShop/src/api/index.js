/*
请求模块
 */
import ajax from './ajax'
const BASE_URL = 'api'
export const reqAdminLogin = ({username, password}) => ajax(`${BASE_URL}/adminLogin`, {username, password}, 'POST')
export const reqAddApp = ({name, version, icon, app}) => ajax(`${BASE_URL}/addApp`, {name, version, icon, app}, 'POST')
