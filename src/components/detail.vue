<template>
	<div id="warp">
		<!-- 头部 -->
		<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<!-- 中间内容 -->
		<!--<mt-navbar v-model="active">
			<mt-tab-item id="1">选项一</mt-tab-item>
			<mt-tab-item id="2">选项二</mt-tab-item>
			<mt-tab-item id="3">选项三</mt-tab-item>
		</mt-navbar>-->

	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Navbar, TabItem } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui'
	import Api from '../src/src.js'

	export default {
		name: "warp",
		data() {
			return {
				//shopId:parseInt(this.$route.query.shopId),
				http: Api.http
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				this.shop();
			})
		},
		components: {
			'mt-header': Header,
			'mt-navbar': Navbar,
			'mt-tab-item': TabItem,
			'mt-tab-container': TabContainer,
			'mt-tab-container-item': TabContainerItem
		},
		methods: {

			shop() {
				console.log(this.$route.query.shopId)
				this.$http.post(this.http + 'user/periphery/shop', {
					"sessionKey": "c0e3ae78a5ed1d434e2b0537f939e9fb",
					"shopId": parseInt(this.$route.query.shopId),
				}).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	html,
	body,
	#warp {
		width: 100%;
		height: 100%;
	}
	
	#warp {
		display: flex;
		flex-direction: column;
	}
</style>