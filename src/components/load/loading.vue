<template>
<div class="spinner">
  <div class="spinner-container container1">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
  <div class="spinner-container container2">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
  <div class="spinner-container container3">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
</div>    
</template>

<style>
.spinner {
  margin: 200px auto;
  width: 60px;
  height: 60px;
  position: relative;
}

.container1 > div, .container2 > div, .container3 > div {
  width: 18px;
  height: 18px;
  background-color: #2A2B27;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 0.96s infinite ease-in-out;
  animation: bouncedelay 0.96s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

 .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}

.circle1 { top: 0; left: 0; }
.circle2 { top: 0; right: 0; }
.circle3 { right: 0; bottom: 0; }
.circle4 { left: 0; bottom: 0; }

.container2 .circle1 {
  -webkit-animation-delay: -0.88s;
  animation-delay: -0.88s;
}

.container3 .circle1 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.container1 .circle2 {
  -webkit-animation-delay: -0.72s;
  animation-delay: -0.72s;
}

.container2 .circle2 {
  -webkit-animation-delay: -0.64s;
  animation-delay: -0.64s;
}

.container3 .circle2 {
  -webkit-animation-delay: -0.56s;
  animation-delay: -0.56s;
}

.container1 .circle3 {
  -webkit-animation-delay: -0.48s;
  animation-delay: -0.48s;
}

.container2 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.container3 .circle3 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.container1 .circle4 {
  -webkit-animation-delay: -0.24s;
  animation-delay: -0.24s;
}

.container2 .circle4 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.container3 .circle4 {
  -webkit-animation-delay: -0.08s;
  animation-delay: -0.08s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>
