<template>
<div class="bookmsg">
	<h1>{{bookMsg.title}}</h1>
	<div class="center_section">
		<img id='bookpic' :src="bookMsg.images.large">
		<div class="description">
			<span>作者: {{bookMsg.author[0]}}</span><br>
			<span>出版社: {{bookMsg.publisher}}</span><br>
			<span v-show='bookMsg.origin_title'>原作名: {{bookMsg.origin_title}} <br></span>
			<span v-if='bookMsg.translater'>译者: {{bookMsg.translater[0]}} <br></span>
			<span>出版年: {{bookMsg.pubdate}}</span><br>
			<span>页数: {{bookMsg.pages}}</span><br>
			<span>定价: {{bookMsg.price}}</span><br>
			<span>装帧: {{bookMsg.binding}}</span><br>
			<span>IBSN: {{bookMsg.isbn13}}</span>
		</div>
		<div class="rater">用户评分：<star :average='bookMsg.rating.average'></star> {{bookMsg.rating.average}}<br><span>&nbsp;&nbsp;&nbsp;{{bookMsg.rating.numRaters}}人</span></div>
		<div class="abstract">
			<h2>内容简介</h2><p>{{bookMsg.summary}}</p>
			<h2>作者简介</h2><p>{{bookMsg.author_intro}}</p>
			<h2 v-if='bookMsg.catalog'>目录</h2><p>{{bookMsg.catalog}}</p>
		</div>
	</div>
	<!-- <p>{{bookMsg}}</p> -->
</div>

</template>

<script>
  import star from './star/star.vue'
  export default {
    data () {
      return {
        bookMsg: {}
      }
    },
    components: {
      'star': star
    },
    computed: {
      getBooks () {
        return this.$store.getters.getBooks
      }
    },
    created: function () {
      this.bookMsg = this.getBooks[this.$route.params.index]
    }
  }
</script>
<style scoped>
	.bookmsg{
		
		height: 395px;
		background-color: #D8E4F7;
	}
	h1{
		padding-top:20px;
		padding-bottom:10px;
		letter-spacing: 2px;
	}
	.center_section{
		margin:0 auto;
		font-size: 0;
		margin-top: 20px;
		width: 808px;
		overflow: hidden;
	}
	#bookpic{
		float: left;
		width: 235px;
		height: 330px;
		border:7px white solid;
		box-shadow: 6px 6px 3px #969696;
	}
	.description{
		float: left;
		font: 16px Arial, Helvetica, sans-serif;
		text-align: left;
		line-height: 170%;
		margin-left: 50px;
		margin-top: 50px;
		width: 250px;
	}
	.rater{
		float: left;
		font: 20px Arial, Helvetica, sans-serif;
		text-align: left;
		line-height: 100%;	
		margin-left: 20px;
		margin-top: 250px;		
	}
	.rater span{
		font-size: 14px;
		line-height: 14px;
		color: #6E6E6E;
	}
	.abstract{
		clear: both;
		margin-left: 5px;
		padding-top: 20px;
		text-align: left;
		font:16px Arial, Helvetica, sans-serif;
		padding-bottom: 50px;
	}
	.abstract h2{
		padding-top: 15px;
		padding-bottom: 15px;
		font:20px Arial, Helvetica, sans-serif;
		color: #6792B0;
	}
	.abstract p{
		text-indent: 2em;
		width: 100%;
		line-height: 140%;
		text-align: justify;
		letter-spacing: 1px;
	}
</style>
