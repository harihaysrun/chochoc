<template>
  <div>
    
    <div class="hero-banner position-relative">
      <img src="../assets/images/banner.png" alt="">
      <div class="position-absolute header">
        <div class="container">
          <div class="inner-container">
            <h1>We bake deliciously healthy chocolate cakes</h1>
            <p>A boutique confectionary bringing healthy options for everyone to enjoy some chocolatey goodness.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="main-points">
      <div class="container">
        <div class="row d-flex d-md-none">
          <div class="col-4 active-point" @click="viewPointOne" v-if="pointOne">
            <img src="../assets/images/gluten-free.png">
            <h5>Gluten-free</h5>
          </div>
          <div class="col-4 inactive-point" @click="viewPointOne" v-else>
            <img src="../assets/images/gluten-free.png">
            <h5>Gluten-free</h5>
          </div>
          <div class="col-4 active-point" @click="viewPointTwo" v-if="pointTwo">
            <img src="../assets/images/eggless.png">
            <h5>Eggless</h5>
          </div>
          <div class="col-4 inactive-point" @click="viewPointTwo" v-else>
            <img src="../assets/images/eggless.png">
            <h5>Eggless</h5>
          </div>
          <div class="col-4 active-point" @click="viewPointThree" v-if="pointThree">
            <img src="../assets/images/less-sugar.png">
            <h5>Less Sugar</h5>
            </div>
          <div class="col-4 inactive-point" @click="viewPointThree" v-else>
            <img src="../assets/images/less-sugar.png">
            <h5>Less Sugar</h5>
          </div>
          <div class="col-12 p-4" v-if="pointOne">Maecenas tempus ut justo eu commodo. Curabitur eget pretium turpis. Vivamus eget pulvinar ante.</div>
          <div class="col-12 p-4" v-if="pointTwo">Donec eu mauris sagittis quam vulputate auctor. Nam vel ipsum in tellus condimentum viverra. Aenean eget euismod nisi.</div>
          <div class="col-12 p-4" v-if="pointThree">In hac habitasse platea dictumst. Aliquam erat volutpat. Nunc tempor volutpat sapien, sed molestie lorem rutrum eu.</div> 
        </div>

        <div class="row d-none d-md-flex">
          <div class="col-4">
            <img src="../assets/images/gluten-free.png">
            <h4>Gluten-free</h4>
            <p>Maecenas tempus ut justo eu commodo. Curabitur eget pretium turpis. Vivamus eget pulvinar ante.</p>
          </div>
          <div class="col-4">
            <img src="../assets/images/eggless.png">
            <h4>Eggless</h4>
            <p>Donec eu mauris sagittis quam vulputate auctor. Nam vel ipsum in tellus condimentum viverra. Aenean eget euismod nisi. </p>
          </div>
          <div class="col-4">
            <img src="../assets/images/less-sugar.png">
            <h4>Less Sugar</h4>
            <p>In hac habitasse platea dictumst. Aliquam erat volutpat. Nunc tempor volutpat sapien, sed molestie lorem rutrum eu.</p>
          </div>
        </div>


      </div>
    </div>

    <div class="bestsellers-collections pt-5">
      <div class="container">
        <h2>Bestsellers</h2>
        <div class="bestsellers-container pt-3">
          <div class="col-10 col-md-6 col-lg-4 me-3">
            <div class="d-flex flex-column">
              <img src="../assets/images/1.png">
              <div class="text pt-2">
                Lovers in Paris
                <br>
                $55
              </div>
            </div>
          </div>
          <div class="col-10 col-md-6 col-lg-4 me-3">
            <div class="d-flex flex-column">
              <img src="../assets/images/2.png">
              <div class="text pt-2">
                Lovers in Paris
                <br>
                $55
              </div>
            </div>
          </div>
          <div class="col-10 col-md-6 col-lg-4 me-3">
            <div class="d-flex flex-column">
              <img src="../assets/images/3.png">
              <div class="text pt-2">
                Lovers in Paris
                <br>
                $55
              </div>
            </div>
          </div>
          <div class="col-10 col-md-6 col-lg-4 me-3">
            <div class="d-flex flex-column">
              <img src="../assets/images/4.png">
              <div class="text pt-2">
                Lovers in Paris
                <br>
                $55
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data:function(){
    return{
      'pointOne': true,
      'pointTwo': false,
      'pointThree': false,
    }
  },
  methods:{
    viewPointOne:function(){
      this.pointOne = true;
      this.pointTwo = false;
      this.pointThree = false;
    },
    viewPointTwo:function(){
      this.pointOne = false;
      this.pointTwo = true;
      this.pointThree = false;
    },
    viewPointThree:function(){
      this.pointOne = false;
      this.pointTwo = false;
      this.pointThree = true;
    }
  }
}
</script>

<style scoped>

.hero-banner{
  margin-top:-55px;
  pointer-events:none;
}

.hero-banner img{
  width:100%;
  position:relative;
  z-index:-2;
  background-color:#FFF9EC;
}

.header{
  /* background-color:pink; */
  width:100%;
  top:90%;
  color:black;
  pointer-events:all;
}

.header .container{
  padding:0;
}

.inner-container{
  background-color:white;
  width:100%;
  box-sizing: border-box;
  padding:25px;
  border-radius: 0 50px 50px 0;
  position:relative;
}

.inner-container::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  left:-50%;
  width:50%;
  height:100%;
  background-color:white;
  /* z-index:-1; */
}

.header p{
  max-width:80%;
}

h1, h2, h3, h4, h5{
  font-family: 'Playfair Display', serif;
  font-weight: 900;
}

h1{
  font-size:35px;
}

.main-points{
  background-color:#FFF9EC;
  padding-top: 200px;
  padding-bottom:50px;
  /* color:black; */
}

.main-points img{
  width:35px;
  margin:15px 0 10px 0;
}

.active-point, .inactive-point{
  text-align:center;
}

.active-point{
  position:relative;
}

.active-point::after{
  content:'';
  position:absolute;
  top:105%;
  left:0;
  right:0;
  margin:auto;
  width:5px;
  height:5px;
  border-radius:50%;
  background-color:black;
}

.inactive-point{
  opacity:0.5;
}

.bestsellers-collections{
  background-color:white;
  border-radius:50px 0;
  position:relative;
}

.bestsellers-collections::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:#FFF9EC;
  z-index:-1;
}

.bestsellers-container{
  white-space: nowrap;
  overflow-x:scroll;
}

.bestsellers-container::-webkit-scrollbar { 
    display: none;
}

.bestsellers-container div{
  display:inline-block;
}

.bestsellers-container img{
  width:100%;
}

@media only screen and (min-width:768px){

.header{
  top:70%;
}

.inner-container{
  width:70%;
  padding:25px 0;
}

.main-points{
  background-color:#FFF9EC;
  padding-top: 150px;
}

.main-points img{
  width:50px;
}

}

@media only screen and (min-width:1200px){

.header{
  top:75%;
}

.inner-container{
  width:60%;
}

h1{
  font-size:50px;
}

.header h1{
  max-width:85%;
}

}
  
</style>

