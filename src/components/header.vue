<template>
	<div class="header">
      <img src="../pic/book_select.png" alt="" id="book_select">
      <div class="input_wraper">
        <input type="text" placeholder="请输入书名" v-model='input_title' @keyup.enter=searchBooks>
        <img src="../pic/select_icon.png" @click=searchBooks >       
      </div>
    </div> 	
</template>
<script>
export default{
  data () {
    return {
      input_title: '',
      books_data: []
    }
  },
  methods: {
    searchBooks: function () {
      this.$emit('changeGuodu') /* 改变父组件的guodu变量 */
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=' + this.input_title + '&count=52')
        .then(function (response) {
          this.$emit('changeGuodu')
          this.$emit('importDatas', response.body.books)
          this.input_title = ''
        })
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
.header{
  text-align: left;
  font-size: 0;
  padding: 20px;
  background-color: #B2B3F0;
}

.input_wraper{
  display: inline-block;
  width: 78%;
}

.header .input_wraper img{
    height: 22px;
    vertical-align: middle;
    padding: 6px;
    background-color: rgb(130,130,130);
    margin-right: -100%;
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
    cursor: pointer;

}

.header .input_wraper img:hover{
    background-color: rgba(148,148,148,0.8);
}

#book_select{
  display: inline-block;
  vertical-align: middle;
  height: 26px;
  margin-right: 10px;
}

input{
  height: 32px;
  width: 100%;
  vertical-align: middle;
  background-color: transparent;
  border-style: none;
  border-bottom: 1px solid rgb(148,148,148);
  font-size: 19px;
  outline:none;
}
input::-webkit-input-placeholder{
	color: #646464;
}

</style>
