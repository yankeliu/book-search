<template>
<div class="middle">
<v-header v-on:changeGuodu='guoduChanged' v-on:importDatas='receiveData'></v-header>
	<ul class="varieties">
        <li v-for="(item, index) in varieties" :class="[index==active_variety? 'active_variety':'' ]"  @click=changeVariety(item,index)>{{item}}</li>
    </ul>
	<loading v-if='guodu'></loading>
    <div v-else class="book_list">
      <ul >
        <li   v-if='!guodu' v-for="(item,index) in getBooks">
          <img :src="item.images.large"  height="343" width="231" :alt="item.image.alt" @click='showBookMsg(index)'>
          <div class="description">
            <h2>{{item.title}}</h2>
            <p>作者：{{item.author[0]}}<br>评分：{{item.rating.average}}</p>
          </div>
        </li>
      </ul> 
      <!-- <p>{{getBooks}}</p>     -->
    </div> 
  </div>
</template>

<script>
import vHeader from './header'
import loading from './load/loading'
export default {
  name: 'hello',
  data () {
    return {
      varieties: ['文学', '流行', '文化', '生活', '经管', '科技'],
      active_variety: 0,
      guodu: true
    }
  },
  components: {
    'v-header': vHeader,
    'loading': loading
  },
  created: function () {
    this.$http.jsonp('https://api.douban.com/v2/book/search?tag=文学&count=52')
        .then(function (response) {
          this.guodu = false
          this.$store.dispatch('changeBooksVariety', response.body.books)
        })
  },
  computed: {
    getBooks () {
      return this.$store.getters.getBooks
    }
  },
  methods: {
    changeVariety: function (str, num) {
      this.active_variety = num
      this.guodu = true
      this.$http.jsonp('https://api.douban.com/v2/book/search?tag=' + str + '&count=52')
        .then(function (response) {
          this.guodu = false
          this.$store.dispatch('changeBooksVariety', response.body.books)
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    guoduChanged: function () {
      this.guodu = !this.guodu
    },
    receiveData: function (datas) {
      this.$store.dispatch('changeBooksVariety', datas)
      this.active_variety = -1
    },
    showBookMsg: function (index) {
      const path = '/bookMsg/' + index
      this.$router.push({path: path})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin:0;
}
.varieties{
	overflow: hidden;
	background-color: #D8E4F7;
}

.varieties li{
	font-size: 20px;
	list-style: none;
	padding-top: 5px;
	padding-bottom: 5px;
	float: left;
	border-top: 2px solid #C8B8D5;
	width: 133.8px;
	border-right: 1px rgba(170,170,170,0.3) solid;;
	border-bottom: 1px rgba(170,170,170,0.3) solid;;
	cursor: pointer;
}

.varieties li:hover{
	border-top: 2px #6D377A solid;
}

.varieties li:nth-child(6){
	border-right: none;
}
.varieties li.active_variety{
	border-bottom: 1px #D8E4F7 ;
	border-top: 2px #6D377A solid;
}

.middle{
  width: 809px;
  margin: 0 auto;
}

.input_wraper{
  display: inline-block;
  width: 78%;
}

.book_list{
  padding-top: 20px;
  font-size: 0;
  padding-left: 26px;
  background-color: #D8E4F7;
}
.book_list ul{
  overflow: hidden;
  text-align: left;
}
.book_list li{
  width: 169.5px;
  display: inline-block;
  margin-right: 26px;
  font-size: 15px;
  color: black;
  vertical-align: top;

}


.book_list img{
  width: 100%;
  height: 252px;
  border-radius: 6px;
  -moz-border-radius: 6px;
  cursor: pointer;
}

.description{
  font-family: Arial, "宋体";
  text-align: left;
  margin-bottom: 20px;

}
.description p{
  margin:5px 0;
}


ul {
  list-style-type: none;
  padding: 0;
  margin:0;
}



a {
  color: #42b983;
}
.test{
  font-size: 12px;
}
</style>
