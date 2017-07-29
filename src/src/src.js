
import axios from 'axios'
//Vue.prototype.$http = axios
const http="http://192.168.0.125:8079/";

/*let Api={
	user:()=>{
		return axios.post(`${http}/main/user`);//首页接口
	},
	shop:()=>{
		return axios.post(`${http}/user/periphery/shop`);//推荐商家详情
	},   
	apple:()=>{
		return axios.get(`../../test/json.json`)
	}
}*/
export default {
	http
}
