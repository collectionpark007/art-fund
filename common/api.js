const BASE = 'http://yapi.jomozz.com/mock/6'

/**
 * 权限模块
 */
const auth = {
	login: BASE + '/api/login/submit'
}

/**
 * 订单模块
 */
const order = {
	checkout: BASE + '/api/member/order/checkout'
}

export default {
	auth,
	order
}