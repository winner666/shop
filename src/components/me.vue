<template>
<div id="me">
	<header class="head">
	  	<div class="news"><img src="../assets/image/xiaoxi.png" alt=""></div>
	  	<div class="userBox">
		  	<div class="user"><img src="../assets/image/headveiw.png" alt=""></div>	
		  	<div class="img"><img src="../assets/image/huiyandengji.png" alt=""></div>
		  	<div class="nickName">晴天中的泪水</div>
	  	</div>

	 </header>
	<section class='section'>
		
		
		<mt-cell title="我的订单" is-link >			
			  <img slot="icon" src="../assets/image/order_red.png" width="24" height="24">
		</mt-cell>	
		
		<router-link to="jifen">
			<mt-cell title="积分" is-link >			
				  <img slot="icon" src="../assets/image/jifen1.png" width="24" height="24">
			</mt-cell>
		</router-link>
		<mt-cell title="团队" is-link>			
			  <img slot="icon" src="../assets/image/team.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="二维码" is-link>			
			  <img slot="icon" src="../assets/image/erweima.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="购物车" is-link>			
			  <img slot="icon" src="../assets/image/gouwuche.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="收货地址" is-link>			
			  <img slot="icon" src="../assets/image/addresss.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="设置" is-link>			
			  <img slot="icon" src="../assets/image/setting.png" width="24" height="24">
		</mt-cell>
	  </section>
	 <v-footer></v-footer>
</div>
	 
</template>

<script>
import { Cell } from 'mint-ui';
//Vue.component(Cell.name, Cell);
import footer from "../components/footer.vue"
export default{

	name:"me",
	data(){
		return{			
		}
	},
	components:{

		'v-footer':footer,
		'mt-cell': Cell
		
	}
}
</script>

<style lang='scss'>
	html,body,#me{
		width: 100%;
		height: 100%;
	}
	#me{
		display: flex;
		flex-direction:column;
		.head {
			height:4.5rem;
			background: url(../assets/image/bg.png) no-repeat 0 0;
			background-size:100% 100%; 
			overflow: hidden;
			.news{
				float: right;
				margin:0.3rem 0.3rem 0 0;
			}
			.userBox{
					margin:1rem auto;
				.user{
					width: 1.5rem;
					height:1.5rem;
					border-radius: 50%;
					overflow: hidden;
					margin: 0 auto;					
					img{
						width: 100%;
						height: 100%
					}
				}
				.img{
					margin:0.2rem auto;
					width: 0.6rem;
					height: 0.5rem;
				}
				.nickName{
					text-align: center;
					color: #fff;
					font-size: 0.3rem;
				}
			}
		}
		.section{
			flex:1;
			text-align: left;
			overflow: auto;
			line-height: auto;
			img{
				float: left;
				margin-top: 10px;
			}
			.mint-cell-text{
				float: left;
				
				line-height:48px; 
				text-indent: 10px;
			}
		}
		.nav-footer{
			height: 0.8rem;
		}

	}
</style>