<template>
	 <div id="peri">
		<header class="head">
	  		<div class="address">
				<span class="icon"></span>
				<span class="city">杭州</span>
			</div>
			<div class="search">
				<input type="text" name="" id="" placeholder="搜索机构/课程" class="sear" />
			</div>
			<div class="news">
			</div>
	  	</header>
	<section class='section'></section>
	 <v-footer></v-footer>
		
	</div>

</template>
<script>
import footer from '../components/footer.vue';

	export default{
			name: 'peri',
		   	data(){
		   	return{
		   		
		   	}
		   },
			components:{
				'v-footer':footer
			}

	  }
</script>

<style lang='scss'>
	html,body,#peri{
		width: 100%;
		height: 100%;
	}
	#peri{
			display: flex;
		flex-direction:column;
		.head {
			background: #ff4242;
			height: 1rem;
			display: flex;
			flex-direction: row;
			padding: 0 0.2rem;
			line-height: 1rem;
			.address {
				color: #fff;
				font-size: 0.3rem;
			}
			.search {
				flex: 1;
				input {
					display: block;
					margin: 0 auto;
					border-radius: 0.3rem;
					line-height: 0.6rem;
					margin-top: 0.2rem;
					text-indent: 0.2rem;
				}
			}
			.news {
				width: 0.5rem;
				height: 0.5rem;
				margin-top: 0.25rem;
				background: url("../assets/image/wu@2x.png") no-repeat 0 0;
				background-size: 100% 100%;
			}
		}
		.section{
			flex:1;
			overflow: auto;
		}
		.nav-footer{
			height: 0.8rem;
		}

	}		 
</style>
