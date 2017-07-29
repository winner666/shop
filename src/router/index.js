import Vue from 'vue'
import Router from 'vue-router'
import '../assets/js/rem.js'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'; 
import hello from '@/components/hello'
import periphery from '../components/periphery'
import me from '../components/me'
import consultation from '../components/consultation'
import detail from '../components/detail'
import jifen from '../components/jifen'
import newDetail from '../components/newDetail'
Vue.use(Router)
Vue.use(Mint);
export default new Router({
	//mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello, 
      redirect:{
      	path:'/hello'
      },

    },
  	{
	  path:"/hello",
	  component:hello,
	 /* children:[{
	  	path:"/detail",
	  	component:detail
	  }]*/
	},
    {
	  path:"/me",
	  component:me,	
	},{
	  path:'/periphery',
	  component:periphery,	 
	},{
	  path:'/consultation',
	  component:consultation,
	},
	{
		path:'/detail',
		component:detail
	},{
		path:"/jifen",
		component:jifen
	},{
		path:"/newDetail",
		component:newDetail
	}
  ]

})
