/**
 * 请求状态
 * @property  {number} SUCCESS - 后端返回的成功code值
 */
export const ResultCode = {
  SUCCESS: 200,
}

/**
 * 请求头contentType类型
 */
export const ContentType = {
  JSON: 'application/json',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
  MULTIPART: 'multipart/form-data',
  TEXT: 'text/plain',
}

/**
 * 返回的错误code对应的错误信息
 */
export const ErrorMsg = {
  ERROR_400: '请求失败，参数类型不匹配',
  ERROR_401: '请求失败，登录状态已过期',
  ERROR_403: '请求失败，您无权访问',
  ERROR_404: '请求失败，未找到该资源',
  ERROR_500: '请求失败，服务器错误，请联系管理员',
  ERROR_503: '请求失败，服务器异常',
  ERROR_504: '请求失败，请求超时',
}
