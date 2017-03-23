<template>
  <div class="star">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
    <!-- <span>{{average}}</span> -->
  </div>
</template>

<script>
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'
  export default {
    props: {
      average: {
        type: String
      }
    },
    computed: {
      itemClasses () {
        let result = []
        let averageNum = parseFloat(this.average)
        let starOn = Math.floor(averageNum / 2)
        let average2 = averageNum / 2
        let starHalf = (average2 - starOn) === 0 ? 0 : 1
        for (let i = 0; i < starOn; i++) {
          result.push(CLS_ON)
        }
        if (starHalf === 1) {
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>

<style>
  .star {
    display: inline-block;
    font-size: 0;
  }
  .star-item {
    display: inline-block;
    line-height: 20px;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
  }
  .on {
    background-image: url(star36_on@2x.png);
    background-repeat: no-repeat;
  }
  .half {
    background-image: url(star36_half@2x.png);
    background-repeat: no-repeat;
  }
  .off {
    background-image: url(star36_off@2x.png);
    background-repeat: no-repeat;
  }
</style>
