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

    <div class="bestsellers-collections py-5">
      <div class="container">

        <div class="bestsellers py-5">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Bestsellers</h2>
            <img class="arrows" src="../assets/images/arrows.png">
          </div>
          <div class="bestsellers-container pt-3">
            <div class="col-10 col-md-6 col-lg-4 pe-3">
              <div class="d-flex flex-column">
                <img src="../assets/images/1.png">
                <div class="text pt-2">
                  Lovers in Paris
                  <br>
                  $55
                </div>
              </div>
            </div>
            <div class="col-10 col-md-6 col-lg-4 pe-3">
              <div class="d-flex flex-column">
                <img src="../assets/images/2.png">
                <div class="text pt-2">
                  Lovers in Paris
                  <br>
                  $55
                </div>
              </div>
            </div>
            <div class="col-10 col-md-6 col-lg-4 pe-3">
              <div class="d-flex flex-column">
                <img src="../assets/images/3.png">
                <div class="text pt-2">
                  Lovers in Paris
                  <br>
                  $55
                </div>
              </div>
            </div>
            <div class="col-10 col-md-6 col-lg-4 pe-3">
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

        <div class="collections py-5">

          <div class="main-text text-center">
            <h2>Our Collections</h2>
            <p>Be it for a party, self-celebration or bite-sized convenience to have on-the-go, we have a cake for every ocassion. Browse our collections now.</p>
          </div>

          <div class="collections-box row d-flex flex-column flex-md-row pt-3 pt-md-5">
            <div class="pb-3 pb-md-0 col-12 col-md-6 collection position-relative">
                <img src="../assets/images/c1-mobile.png" class="d-block d-md-none">
                <img src="../assets/images/c1.png" class="d-none d-md-block">
                <div class="shop-btn position-absolute top-50 start-50 translate-middle">
                  <h2>Whole cakes</h2>
                </div>
            </div>
            <div class="col-12 col-md-6 other-collections d-flex flex-column">
              <div class="collection pb-3 pb-md-0 position-relative">
                <img src="../assets/images/c2.png">
                <div class="shop-btn position-absolute top-50 start-50 translate-middle">
                  <h2>Bento cakes</h2>
                </div>
              </div>
              <div class="collection mt-auto position-relative">
                <img src="../assets/images/c3.png">
                <div class="shop-btn position-absolute top-50 start-50 translate-middle">
                  <h2>Cupcakes</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="testimonials py-5">
      <div class="container">
        <div class="testimonials-box py-5">
          <div class="d-flex justify-content-between align-items-center">
            <h2>See What Our Customers Say</h2>
            <img class="arrows" src="../assets/images/arrows.png">
          </div>
          <div class="bestsellers-container pt-4">
            <div class="col-10 col-md-6 col-lg-4 pe-3">
              <div class="text-wrap one-testimonial">
                Cras quis ipsum et urna gravida aliquam. Nullam nec magna magna. Vestibulum tincidunt tortor nec odio venenatis luctus. Etiam porta, tellus id consequat pretium, mauris ante feugiat orci, at volutpat risus magna id ipsum. Nullam posuere efficitur sapien, in eleifend dui dapibus ac!
                <div class="pt-3 d-flex flex-row align-items-center">
                  <img class="me-2" src="../assets/images/testi.png">
                  <span>Naimah</span>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-6 col-lg-4 pe-3">
              <div class="text-wrap one-testimonial">
                Cras quis ipsum et urna gravida aliquam. Nullam nec magna magna. Vestibulum tincidunt tortor nec odio venenatis luctus. Etiam porta, tellus id consequat pretium, mauris ante feugiat orci, at volutpat risus magna id ipsum. Nullam posuere efficitur sapien, in eleifend dui dapibus ac!
                <div class="pt-3 d-flex flex-row align-items-center">
                  <img class="me-2" src="../assets/images/testi.png">
                  <span>Naimah</span>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-6 col-lg-4 pe-3">
              <div class="text-wrap one-testimonial">
                Cras quis ipsum et urna gravida aliquam. Nullam nec magna magna. Vestibulum tincidunt tortor nec odio venenatis luctus. Etiam porta, tellus id consequat pretium, mauris ante feugiat orci, at volutpat risus magna id ipsum. Nullam posuere efficitur sapien, in eleifend dui dapibus ac!
                <div class="pt-3 d-flex flex-row align-items-center">
                  <img class="me-2" src="../assets/images/testi.png">
                  <span>Naimah</span>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-6 col-lg-4 pe-3">
              <div class="text-wrap one-testimonial">
                Cras quis ipsum et urna gravida aliquam. Nullam nec magna magna. Vestibulum tincidunt tortor nec odio venenatis luctus. Etiam porta, tellus id consequat pretium, mauris ante feugiat orci, at volutpat risus magna id ipsum. Nullam posuere efficitur sapien, in eleifend dui dapibus ac!
                <div class="pt-3 d-flex flex-row align-items-center">
                  <img class="me-2" src="../assets/images/testi.png">
                  <span>Naimah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bestsellers-collections py-5">
      <div class="container">

        <div class="bestsellers py-5">
          <div class="row">
            <div class="col-12 col-lg-4 order-0 order-lg-1 ps-lg-4">
              <h2>#chochocsg</h2>
              Share your photos on Instagram with the hashtag #chochocsg to be featured on our website! We love to see you enjoy our cakes!
              <button class="ig-btn d-none d-lg-block mt-3">View all posts</button>
            </div>
            <div class="col-12 col-lg-8 py-4 p-lg-0">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
              <img class="col-6 col-md-3 p-1" src="../assets/images/ig-photo.png">
            </div>
            <div class="col-12 d-block d-lg-none">
              <button class="ig-btn">View all posts</button>
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

.testimonials{
  background-color:#FFF9EC;
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

.bestsellers-container img, .collections img{
  width:100%;
}

.shop-btn{
  /* width:150px; */
  /* height:150px; */
  /* padding:10px 15px; */
  /* border-radius:10px; */
  /* background-color:white; */
  color:white;
  text-shadow: 0px 0px 20px black;
  /* display:flex; */
  /* align-items:center; */
  /* justify-content: center; */
}

.one-testimonial{
  background-color:white;
  box-sizing: border-box;
  padding:75px 30px 30px 30px;
  /* padding-top:75px; */
  border-radius:15px;
  background:url(../assets/images/testi2.png) no-repeat white 30px 30px;
}

.one-testimonial img{
  width:40px;
}

.ig-btn{
  border:1px solid black;
  border-left:10px solid black;
  padding:15px 25px;
  width:100%;
  background-color:white;
  transition: all 0.05s ease-in;
}

.ig-btn:hover{
  background-color:black;
  color:white;
}

.arrows{
  height:20px;
  width:auto;
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

.collections p{
  width:70%;
  margin:auto;
}

.shop-btn{
  opacity:0;
  transition: all 0.1s ease-in;
}

.collection:hover .shop-btn{
  opacity:1;
}

.collection:hover img{
  /* filter: grayscale(50%) !important; */
  opacity:0.7;
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

.collections p{
  width:50%;
  margin:auto;
}

}
  
</style>

