<template>
  <div>

    <div id="content">

      <div class="freeshipping">
        <div>🚚 Free delivery for orders above SGD65 🎂</div>
      </div>

      <nav>
        <div class="container">
          <div class="d-flex d-md-none">
            <div class="hm-menu" @click="openHmMenu">
              <i class="bi bi-list" v-if="!showHmMenu"></i>
              <i class="bi bi-x-lg" v-else></i>
            </div>
            <a class="logo m-auto d-flex align-items-center">
              <img class="logo" src="./assets/images/logo.png">
            </a>
          </div>
          <div class="d-none d-md-flex flex-row align-items-center">
            <a class="logo me-5">
              <img class="logo" src="./assets/images/logo.png">
            </a>
            <div>
              <a class="pe-4" href="">About</a>
              <a class="pe-4" href="">Catalog</a>
              <a class="pe-4" href="">Contact</a>
            </div>
            <div class="ms-auto">
              <i class="bi bi-person ps-4"></i>
              <i class="bi bi-cart3 ps-4"></i>
            </div>
          </div>
        </div>
      </nav>

      <router-view></router-view>
    </div>

    <!-- hamburger menu -->
    <Transition>
      <div id="hamburger-menu" v-if="showHmMenu">
        <div class="first-three d-flex flex-column">
          <a class="pb-3">About</a>
          <div class="pb-3">
            <div class="d-flex" @click="openCatalog">
              Catalog
              <i class="ms-auto bi bi-plus" v-if="!toggleCatalog"></i>
              <i class="ms-auto bi bi-dash" v-else></i>
            </div>
            <Transition name="catalog">
            <div class="d-flex flex-column" v-if="toggleCatalog">
              <a href="" class="pt-2">Whole Cakes</a>
              <a href="" class="pt-2">Bento Cakes</a>
              <a href="" class="pt-2">Cupcakes</a>
            </div>
            </Transition>
          </div>
          <a>Contact</a>
        </div>
        <div class="next-two">
          <div class="pb-3"><i class="bi bi-person pe-2"></i> Sign In</div>
          <div class="pb-3"><i class="bi bi-cart3 pe-2"></i> Cart</div>
        </div>
      </div>
    </Transition>

    <footer class="py-5 text-center">
      <div class="container d-flex flex-column align-items-center align-items-lg-start">
        <img src="./assets/images/logo.png">
        <div class="links pt-4 d-flex flex-column flex-lg-row w-100">
          <div class="d-flex flex-column flex-lg-row">
            <a class="py-2 py-lg-0 pe-lg-4" href="">About</a>
            <a class="py-2 py-lg-0 pe-lg-4" href="">Catalog</a>
            <a class="py-2 py-lg-0 pe-lg-4" href="">FAQ</a>
            <a class="py-2 py-lg-0 pe-lg-4" href="">Delivery</a>
            <a class="py-2 py-lg-0 pe-lg-4" href="">Contact</a>
          </div>
          <div class="d-flex flex-row justify-content-center ms-lg-auto py-5 pt-lg-0">
            <img class="px-3" src="./assets/images/f1.png">
            <img class="px-3" src="./assets/images/f2.png">
            <img class="px-3" src="./assets/images/f3.png">
            <img class="px-3" src="./assets/images/f4.png">
          </div>
        </div>
      </div>
      <div class="c-payment pb-4 w-100">
        <div class="container d-flex flex-column flex-md-row px-0 pt-3">
          <div class=" ms-md-auto order-0 order-md-1">
            <img src="./assets/images/payment-methods.png">
          </div>
          <div class=" me-md-auto pt-3 pt-md-0"><a href="https://github.com/harihaysrun" target="_blank"><i class="bi bi-github me-1"></i> HARIHAYSRUN 2022</a></div>
        </div>
      </div>
    </footer>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return{
      'showHmMenu': false,
      'playAni': false,
      'toggleCatalog': false
    }
  },
  methods:{
    openHmMenu: function(){
      if(!this.showHmMenu){
        this.showHmMenu = true;
        document.getElementById("content").style.transform = "translateX(75vw)";
      } else{
        this.showHmMenu = false;
        document.getElementById("content").style.transform = "translateX(0)";
      }
    },
    openCatalog: function(){
      if(!this.toggleCatalog){
        this.toggleCatalog = true;
      } else{
        this.toggleCatalog = false;
      }
    }
  }
}
</script>

<style>

body, html{
  margin:0;
  padding:0;
  overflow-x:hidden;
}

a{
  text-decoration:none;
  color:white;
}

a:hover{
  color:#FFF9EC;
}

#app {
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:black;
}

.freeshipping{
  background-color:black;
  color:white;
  padding: 5px 0;
  font-weight:500;
  text-transform: uppercase;
  text-align: center;
  position:relative;
  z-index:2; 
}

.freeshipping div{
  transform:translateX(100%);
  animation: marquee 10s linear infinite;
  white-space:nowrap;
}

@keyframes marquee{
  from{transform:translateX(100%);}
  to{transform:translateX(-120%);}
}

nav{
  background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0));
  padding:10px 0;
  position:relative;
  color:white;
  z-index:2;
  font-size:30px;
}

nav a{
  color:white;
}

button{
  color:black;
}

.logo{
  width:100px;
}

#hamburger-menu {
  background-color:white;
  position:fixed;
  top:0;
  width:75vw;
  height:100vh;
}

#content{
  transition:all 0.2s ease-in-out;
}

.first-three{
  box-sizing: border-box;
  padding:50px 25px 25px 25px;
  background-color:black;
  border-radius: 0 0 50px 0;
  color:white;
}

.next-two{
  box-sizing: border-box;
  padding:25px;
  background-color:white;
  color:black;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform:translateX(-75vw);
}

.catalog-enter-active,
.catalog-leave-active {
  height:100px;
  transition: all 0.2s ease-in;
}

.catalog-enter-from,
.catalog-leave-to {
  opacity:0;
  height:0;
}

.collapsed{
  color:white;
}

.accordion-button{
  padding:0;
}

.accordion-button, .accordion-item, .accordion-body{
  background-color:transparent !important;
  padding:0;
}

footer{
  background-color:black;
  color:white;
}

footer img{
  width:100px;
}

footer .links img{
  height:20px;
  width:auto;
}

.c-payment .container{
  border-top:1px solid rgba(255,255,255,0.1);
}

.c-payment img{
  width:200px;
}

@media only screen and (min-width:768px){

  .freeshipping div{
    animation: none;
    transform:translateX(0);
  }

  nav{
    padding:15px 0;
    font-size:16px;
  }

  #hamburger-menu {
    display:none;
  }

  #content{
    transform: translateX(0px) !important;
  }

}

</style>
