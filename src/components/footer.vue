<template>
  <div class="footer">
    <ul class="nav nav-tabs nav-justified footNav">
        <li>
        	<router-link to="/hello">
            <span class="icon icon-home "></span>
           <span class="red">主页</span>
        </router-link>
        </li>
        <li><router-link to="/periphery">
          <span class="icon icon-per"></span>
            <span class="red">周边</span>
        </router-link></li>
        <li><router-link to="/consultation">
          <span class="icon icon-con"></span>
          <span class="red">咨询</span>
        </router-link></li>
        <li><router-link to="/me">
          <span class="icon icon-me"></span>
          <span class="red">我</span>
        </router-link></li>
    </ul>
  </div>
</template>

<script>

</script>
<style lang="scss" rel="style/scss">
  .footNav{
    font-size:0.16rem;
    display: flex;
    flex-direction: row;
  
      li{
        flex:1;
        text-align: center;

        span{
          display: block;       
          }
        .red{
          color: #888;
          line-height:0.3rem;
          font-size: 0.16rem;
          margin-top: 0.1rem;
        }
       .icon{
         width:0.4rem;
         height:0.4rem;
         margin:0 auto;
        }
       .icon-home{
         background:url("../assets/image/home_white.png") no-repeat 0 0;
         -webkit-background-size:100% 100%;
         background-size:100% 100%;
       }
       .icon-per{
         background: url("../assets/image/surrounding.png") no-repeat 0 0;
         -webkit-background-size:100% 100%;
         background-size:100% 100%;
       }
       .icon-con{
         background: url("../assets/image/information.png") no-repeat 0 0;
         -webkit-background-size:100% 100%;
         background-size:100% 100%;
       }
       .icon-me{
         background:url("../assets/image/mine.png") no-repeat 0 0;
         -webkit-background-size:100% 100%;
         background-size:100% 100%;
       }
      .router-link-active .icon-home{
        background:url("../assets/image/home.png") no-repeat 0 0;
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
      }
      .router-link-active .icon-per{
        background:url("../assets/image/surrouding_red.png") no-repeat 0 0;
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
      }
      .router-link-active .icon-con{
        background:url("../assets/image/zixun.png") no-repeat 0 0;
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
      }
      .router-link-active .icon-me{
        background:url("../assets/image/mine_red.png") no-repeat 0 0;
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
      }
      .router-link-active .red{
        color: #333;
      }

      }

  }

</style>
