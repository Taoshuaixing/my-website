<template>
	<div class="container">
		<h1>关于本站</h1>
		<div class="about">
			<h3>为什么建立这个网站</h3>
			<p>
				我热爱创作，很多时候，在我完成一个作品时，我希望把我在创作时的想法和经历记录下来，因为它们对我来说弥足珍贵。当人们对我的作品感兴趣时，我可以向他们分享这些作品背后的故事。很长一段时间里，我都在持续的升级和改版本网站，从开始的‘花里胡哨’到现在的简约注重内容。
			</p>
			<p>偶然一次，我在推特上刷到了 Josh W. Comeau 的一条推文：</p>
			<img
				src="@/assets/tweet.jpg"
				alt="tweet"
				class="tweet-img"
			/>
			<p>
				他在推文中介绍了作为一名软件开发者，应该如何编写自己的作品集网站，并为此写了一本可以免费阅读的电子书
				——
				<a
					class="tweet"
					href="https://www.joshwcomeau.com/effective-portfolio"
					target="_blank"
				>Building an Effective Dev Portfolio
					<el-icon>
						<Position />
					</el-icon></a>。在阅读完之后，我了解到构建一个作品集网站的诸多细节，这给我带来了巨大的启发。如果你也在构思自己的网站，我十分推荐你阅读它！（篇幅很短，仅
				70 页，但是内容却很丰富）
			</p>
			<!-- <p>
				之后，我便着手开始构建现在这个网站。到目前为止，我对这个网站还挺满意的。随着我职业的发展，它将逐步丰富起来。
			</p> -->
			<h3>风格与设计</h3>
			<p>
				我有一个爱好，喜欢在 GitHub
				里查看别人的主页，如果上面附带了个人网站的链接，我通常都会点进去浏览一番。如果我发现一些富有创意的网站，我会收藏它们。对我来说，这个过程就像是在寻宝，充满了惊喜！
			</p>
			<p>
				有一天，我恰巧点进了
				<a
					href="https://wooorm.com/"
					target="_blank"
					class="tweet"
				>Titus Wormer</a>
				的网站。当我进入时，我马上被它呈现的画面吸引住了。在看过很多色彩斑斓、设计精美的网站后（实话说，这让我的审美疲劳了），这种带有黑白点阵的简约风格瞬间抓住了我的眼球，它让我回想起老旧的纸质打印单。兴奋之余，我迫不及待地将这种风格引入到我的网站中，并添加了很多我喜欢的元素。
			</p>
			<div class="navbar">
				<input type="checkbox" />
				<span></span>
				<span></span>
				<b>分享一些我遇到的制作精美的个人网站,点开查看</b>
				<ul>
					<li
						v-for="item in webList"
						:key="item.id"
					>
						<a
							:href="item.url"
							target="_blank"
						>{{ item.name }}</a>
					</li>
				</ul>
			</div>
			<h3>开发与制作</h3>
			<p>
				本站使用 vue3+vite+element-plus
				开发，部署在自己的阿里云服务器上。不得不说，这些框架和ui库让我省下了许多建站的功夫。如果你也有建站的需求，这绝对是不错的技术选择！
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { WebSiteList } from '@/views/home/type';

const webList = ref<WebSiteList[]>([]);

axios({
	method: 'get',
	url: '/website',
}).then(({ data }) => {
	console.log(data);
	webList.value = data.result;
});
</script>

<style lang="less" scoped>
.tweet-img {
	width: 50%;
	margin: 0 auto;
	display: block;
}

.navbar {
	position: relative;
	width: 100%;
	border-radius: 50px;
	background-color: #fff;
}

.navbar input {
	width: 40px;
	height: 40px;
	opacity: 0;
	cursor: pointer;
	margin: 20px 0 0 20px;
}

.navbar span {
	position: absolute;
	width: 40px;
	height: 4px;
	background-color: #999;
	border-radius: 15px;
	left: 20px;
	top: 30px;
	pointer-events: none;
	transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}

.navbar b {
	position: absolute;
	top: 30px;
	left: 10%;
	letter-spacing: 5px;
	color: #409eff;
	font-size: 18px;
	display: block;
	width: 90%;
	text-align: left;
	transition: all 0.7s ease-in-out;
}

.navbar span:nth-child(3) {
	top: 50px;
}

.navbar input:checked~span:nth-child(2) {
	top: 40px;
	transform: rotate(-45deg);
	background-color: #409eff;
	transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}

.navbar input:checked~span:nth-child(3) {
	top: 40px;
	transform: rotate(45deg);
	background-color: #409eff;
	transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}

.navbar ul {
	height: 0;
	overflow: hidden;
	transition: all 0.7s ease-in-out;
	white-space: nowarp;
	border-radius: 0 0 50px 50px;
}

.navbar ul li {
	list-style: none;
	padding: 5px;
}

.navbar input:checked~ul {
	height: 300px;
}

.navbar input:checked~ul {
	box-shadow: 0px 8px 11px -2px #409eff;
}

.navbar input:checked~b {
	opacity: 0;
}
</style>
