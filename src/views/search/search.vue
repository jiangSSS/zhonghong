<template>
	<div>
		<header class="mui-bar mui-bar-nav header">
		    <a @click="$router.back()" class="iconfont headerIco headLeft">&#xe792;</a>
		    <div class="headerSerach headerSerachCenter" @click="$router.push('/searchList')">
		        <input type="search" @click="$router.push('/searchList')" class="headerSerachText" placeholder="腾讯科技">
		        <button class="headerSerachBtn"></button>
		    </div>
		    <a class="iconfont headerIco headRight headRightText">排序</a>
		</header>
		<div class="screenHead">
		    <span class="label provinces"><em>省份地区</em><i class="iconfont">&#xe628;</i></span>
		    <span class="label guild"><em>行业分类</em><i class="iconfont">&#xe628;</i></span>
		    <span class="label moreScreen"><em>更多筛选</em><i class="iconfont">&#xe628;</i></span>
		</div>
		<div class="statisticsResult">为你找到<i class="c-e70016">1258</i>家公司<!--<a href="JavaScript:;" class="batch">批量导出</a>--></div>
	<div class="listBox" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
		<div class="pageListBox" v-for="(item,index) in pageList" :key="index">
			<!-- <div class="searchListTop">
				<div class="photo"><img :src="item.img"></div>
				<h5 class="title">{{item.title}}</h5>
				<span class="label">{{item.label}}</span>
			</div>
			<div class="info">
			    <span>信用查认证</span>
			    <em>98分</em>
			</div>
			<div class="searchListBottom">
				<span class="labelList">
					<em>法定代表人</em>
					<i class="c-e70016">{{item.low1}}</i>
				</span>
				<span class="labelList">
					<em>注册资本</em>
					<i>{{item.low2}}</i>
				</span>
				<span class="labelList">
					<em>成立日期</em>
					<i>{{item.low3}}</i>
				</span>
			</div> -->
			 <div class="searchListTop">
			    <div class="photo"><img :src="item.img"></div>
			    <h5 class="title">{{item.title}}</h5>
			    <div class="info">
			        <span>信用查认证</span>
			        <em>98分</em>
			    </div>
			    <span class="label">{{item.label}}</span>
			</div>
			<div class="searchListBottom">
			    <span class="labelList">
			        <em>法定代表人</em>
			        <i class="c-e70016">{{item.low1}}</i>
			    </span>
			    <span class="labelList">
			        <em>注册资本</em>
			        <i>{{item.low2}}</i>
			    </span>
			    <span class="labelList">
			        <em>成立日期</em>
			        <i>{{item.low3}}</i>
			    </span>
			</div>
		</div>
	</div>
	<!-- 	<div id="searchList" class="mui-scroll-wrapper mui-active searchListMargin">
		    <div class="">
		        <ul class=" ">
		
		        </ul>
		    </div>
		</div> -->
		<!--省份地区-->
		<!-- <div class="searchLayerCon provincesLayer">
		    <div class="layerBack"></div>
		    <div class="searchLayer">
		        <div class="leftOne">
		            <ul>
		                <li>不限</li>
		                <li>北京市</li>
		                <li>上海市</li>
		                <li>河北省</li>
		                <li>山西省</li>
		                <li>河北省</li>
		                <li>山西省</li>
		                <li>河北省</li>
		                <li>山西省</li>
		                <li>山西省</li>
		                <li>河北省</li>
		                <li>山西省</li>
		            </ul>
		        </div>
		        <div class="leftTwo">
		            <ul>
		                <li>北京市</li>
		            </ul>
		        </div>
		        <div class="leftThree">
		            <ul>
		                <li>海淀区</li>
		                <li>朝阳区</li>
		                <li>昌平区</li>
		            </ul>
		        </div>
		    </div>
		</div> -->
		<!--end-->
		<!--行业分类-->
		<!-- <div class="searchLayerCon guildLayer">
		    <div class="layerBack"></div>
		    <div class="searchLayer">
		        <div class="leftOne">
		            <ul>
		                <li>全部行业</li>
		                <li>采矿业</li>
		                <li>制造业</li>
		                <li>建筑业</li>
		                <li>批发和零售业</li>
		                <li>住宿餐饮业</li>
		                <li>山西省</li>
		                <li>河北省</li>
		                <li>山西省</li>
		                <li>山西省</li>
		                <li>河北省</li>
		                <li>山西省</li>
		            </ul>
		        </div>
		        <div class="leftTwo">
		            <ul>
		                <li>全部行业</li>
		                <li>房屋建筑业</li>
		                <li>土木工程建筑业</li>
		                <li>建筑安装业</li>
		            </ul>
		        </div>
		    </div>
		</div> -->
		<!--end-->
		<!--更多筛选-->
		<!-- <div class="searchLayerCon moreScreenLayer"> -->
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	export default {
		components: {
			Header
		},
		data() {
			return {
				pageList: [{
						title: "腾讯科技（上海）有限公司",
						label: "在业",
						low1: "奚丹",
						low2: "500万美元",
						low3: "2008-07-23",
						img: "/static/images/logo/logo-1.png"
					},
					{
						title: "腾讯科技（上海）有限公司",
						label: "在业",
						low1: "奚丹",
						low2: "500万美元",
						low3: "2008-07-23",
						img: "/static/images/logo/logo-1.png"
					},
				],
				loading: false
			}
		},
		methods: {
			loadMore() {
	
			},
			getData() {
	
			}
		},
		created() {
			this.getData()
		}
	}
</script>

<style scoped>
	.listBox{
		margin-top: 3.6rem;
	}
</style>
