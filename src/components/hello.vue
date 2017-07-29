<template>
	<!--引入公用底部-->
	<div id="warp">

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
		<section class="session">
			<div class="banner">
				<mt-swipe :auto="4000">
					<mt-swipe-item v-for="(item,index) in bannerList" :key="index">
						<img :src="item.imgSrc" />
					</mt-swipe-item>
				</mt-swipe>
			</div>
			菜单

			<ul class="menu">
				<li>
					<span class="menuImg">
            <img src="../assets/image/myorder.png" alt="">
          </span>
					<span class="menuWord">我的订单</span>
				</li>
				<li>
					<span class="menuImg">
            <img src="../assets/image/sweet.png" alt="">
          </span>
					<span class="menuWord">甜品饮品</span>
				</li>
				<li>
					<span class="menuImg">
            <img src="../assets/image/market.png" alt="">
          </span>
					<span class="menuWord">便利超市</span>
				</li>
				<li>
					<span class="menuImg">
            <img src="../assets/image/vegetables.png" alt="">
          </span>
					<span class="menuWord">果蔬生鲜</span>
				</li>
				<li>
					<span class="menuImg">
            <img src="../assets/image/hotel.png" alt="">
          </span>
					<span class="menuWord">附近九点</span>
				</li>
				<li>
					<span class="menuImg">
            <img src="../assets/image/foot.png" alt="">
          </span>
					<span class="menuWord">附近美食</span>
				</li>
				<li>
					<span class="menuImg">
            <img src="../assets/image/ktv.png" alt="">
          </span>
					<span class="menuWord">KTV</span>
				</li>
				<li>
					<span class="menuImg">
            <img src="../assets/image/newinformation.png" alt="">
          </span>
					<span class="menuWord">最新资讯</span>
				</li>
			</ul>
			<div class="listBox">
				<h1>
    		<span class="line">|</span>
    		<span>推荐商家</span>
    	</h1>
				<div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
					<div v-for='(item,index) in shoplist' :key="index" class="shop">
						<router-link v-bind:to='{path:"/detail",query:{shopId:item.shop.shopId}}'>
							<div class="shopimg">
								<img :src="item.shop.img" />
							</div>
							<div class="item">
								<div class="seller"><span class="name">{{item.shop.name}}</span><span class="distance">1.4Km</span></div>
								<div class="start">*****</div>
								<div class="time">营业时间:{{item.shop.businessTimeStart}}-{{item.shop.businessTimeEnd}}</div>
								<div class="send">
									<div class="start">
										<span>起送</span>
										<em>￥{{item.shop.sendMoney}}</em>
									</div>
									<div class="sending">
										<span>配送</span>
										<em>￥{{item.shop.rangeMoney}}</em>
									</div>
									<div class="month">
										<span>月售：</span>
										<em>￥{{item.shop.count}}</em>
									</div>
								</div>
								<div class="reduceBox">
									<div class="reduce-box" v-for="(val,index) in (item.activityList)" :key='index'>
										<div class="reduce">
											<span><img src="../assets/image/reduce.png"/></span>
											<em v-show="tag">满{{val.full}}减{{val.reduce}}</em>
										</div>
									</div>
									<div class="up"><img src="../assets/image/pulldown.png" /></div>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</section>
		<v-footer></v-footer>
	</div>

</template>

<script>
	import footer from "../components/footer.vue"
	import Api from '../src/src.js'
	export default{
		name: "warp",
		data() {
			return {
				bannerList: this.bannerList,
				shoplist: this.shoplist,
				http: Api.http,
				tag:true
			}
		},
		part: {
			lng: "120.19705",
			lat: "30.284238",
			sessionKey: "c0e3ae78a5ed1d434e2b0537f939e9fb",
			page: 1,
			size: 10
		},
		components: {
			'v-footer': footer
		},
		mounted: function() {
			this.$nextTick(function() {
				this.banner() //轮播图商品列表				
			})
		},
		methods: {

			banner() { //banner图片列表
				console.log(this.http)
				this.$http.post(this.http + 'main/user', {
					lng: "120.19705",
					lat: "30.284238",
					sessionKey: "c0e3ae78a5ed1d434e2b0537f939e9fb",
					page: 1,
					size: 10
				}).then(res => {
					console.log(res)
					this.bannerList = res.data.obj.bannerList;
					this.shoplist = res.data.obj.shopList;

					for(let i = 0; i < this.shoplist.length; i++) {
						let activityList = this.shoplist[i].activityList;

						if(activityList.length > 2) {
								console.log(activityList.length)
							activityList.slice(0,2)
							console.log(activityList.length)
							for(let j = 0;j < activityList.length ;j++) {
								
							}
						}else{

						}
					}

				})
			},
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					// let last = this.list[this.list.length - 1];
					// for (let i = 1; i <= 10; i++) {
					//   this.list.push(last + i);
					// }

					this.loading = false;
				}, 2500);
			}
	
		}

	}
</script>

<style lang="scss" rel="style/scss">
	html,
	body,
	#warp {
		height: 100%;
		width: 100%;
	}
	
	.mint-cell-title {
		.mint-cell-text {
			float: left!important;
		}
		.mint-cell img {
			float: left!important;
		}
	}
	
	#warp {
		display: flex;
		flex-direction: column;
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
		.session {
			flex: 1;
			overflow: auto;
			.banner {
				height: 2.5rem;
			}
			.menu {
				overflow: hidden;
				li {
					float: left;
					width: 25%;
					margin-top: 0.2rem;
					span {
						display: block;
						margin: 0 auto;
						text-align: center;
					}
					.menuImg img {
						width: 1.3rem;
						height: 1.3rem;
						display: block;
						margin: 0 auto;
					}
					.menuWord {
						margin-top: 0.2rem;
						font-size: 0.24rem;
						color: #333333;
					}
				}
			}
			/*列表*/
			.listBox {
				margin-top: 0.2rem;
				h1 {
					color: #ff4242;
					font-size: 0.32rem;
					.line {
						margin: 0 0.2rem 0 0.3rem;
					}
				}
				.list {
					.shop {
						overflow: hidden;
						padding: 2.6% 4% 0 4%;
						.shopimg {
							float: left;
							width: 33.34%;
							height: 33.34%;
							border-radius: 0.1rem;
							overflow: hidden;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.item {
							margin-left: 4%;
							width: 62%;
							float: left;
							display: block;
							text-align: left;
							.seller {
								line-height: 0.5rem;
								overflow: hidden;
								.name {
									float: left;
									font-size: 0.32rem;
									color: #333;
									width: 70%;
									overflow: hidden;
									/*自动隐藏文字*/
									text-overflow: ellipsis;
									/*文字隐藏后添加省略号*/
									white-space: nowrap;
									/*强制不换行*/
								}
								.distance {
									width: 30%;
									float: right;
									color: #999999;
									font-size: 0.26rem;
									text-align: right;
								}
							}
							.start {
								height: 0.3rem;
							}
							.time {
								line-height: 0.5rem;
								font-size: 0.28rem;
								color: #4d4d4c;
							}
							.send {
								overflow: hidden;
								border-bottom: 1px solid #dadada;
								line-height: 0.5rem;
								div {
									float: left;
									width: 33.33%;
									font-size: 0.24rem;
									span {
										color: #999999;
									}
								}
							}
							.reduceBox {
								width: 100%;
								overflow: hidden;
								.reduce-box {
									width: 90%;
									float: left;
									.reduce {
										margin-top: 0.1rem;
										overflow: hidden;
										span {
											float: left;
											img {
												width: 0.3rem;
												height: 0.3rem;
											}
										}
										em {
											float: left;
											font-size: 0.2rem;
											color: #999999;
											margin-left: 0.1rem;
										}
									}
								}
								.up {
									width: 10%;
									float: right;
									z-indent: 10;
								}
							}
						}
					}
				}
			}
		}
		.nav-footer {
			height: 0.8rem;
		}
	}
</style>