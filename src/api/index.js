// 导出一个配置好的axios对象
import axios from 'axios'

// 对axios进行配置
// 基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// ... 很多配置

export default axios
