import request from '@/api/request'

export const getHome = () => request.get('/index/index')

export const getPopup = () => request.get('/search/index')

export const getSearch = (params) => request.get('/goods/list', { params })

export const getTime = (params) => request.get('/search/helper', { params })

export const clearHistory = () => request.get('/search/clearhistory')

export const goLogin = (params) => request.post('/auth/loginByWeb', params)

export const GetGoodsDetail = (params) => request.get('/goods/detail', { params })

export const getAboutProduct = (params) => request.get('/goods/related', { params })

export const GetCartNum = () => request.get('/cart/goodscount')

export const addToCart = (params) => request.post('/cart/add', params)

export const getCartData = () => request.get('/cart/index')

export const goodChecked = (params) => request.post('/cart/checked', params)

export const StepNum = (params) => request.post('/cart/update', params)

export const delGood = (params) => request.post('/cart/delete', params)

export const getTopic = (params) => request.get('/topic/list', { params })

export const getCategory = () => request.get('/catalog/index')

export const getCurrentData = (params) => request.get('/catalog/current', { params })
