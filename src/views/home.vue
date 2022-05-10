<template>
  <div class="o-componente1">
    <div class="o-navbar" :style="scroll">
      <div class="o-menu-imagen">
        <img class="o-header-image" src="../assets/logo_full_color.svg" alt="Wolox logo"/>
      </div>
      <div class="o-menu">
        <a href="#">Inicio</a>
        <a href="#beneficios">Beneficios</a>
        <a style="cursor: pointer" @click="$router.push({name: 'pokemon'})">Pokemon</a>
        <span class="o-button">Login</span>
      </div>
    </div>
    <div class="o-flex" style="margin-top: 50px; height: 100%">
      <div class="o-flex-column o-flex-center-vertical" style="font-size: 40px">
        <span>Bienvenido a tu</span>
        <span><span style="font-weight: bold">Entrevista Técnica</span> en</span>
        <span style="color: #97CF00; font-weight: bold">Wolox</span>
      </div>
      <div class="o-flex-column o-flex-center-vertical">
        <img alt="Ic_ilustra_Hero" src="../assets/Img%20Hero/Ic_ilustra_Hero.png" style="transform: scaleX(-1);"/>
      </div>
    </div>
  </div>
  <div class="o-container o-flex">
    <div class="o-fondo-woloxer o-flex" style="width: 50%;">
      <div class="o-flex-column o-flex-center-vertical" style="font-size: 40px">
        <span style="font-weight: bold; font-size: 50px; margin-bottom: 30px"><span class="o-text-green">350 +</span> <span class="o-text-blue">Woloxers</span></span>
        <div class="o-flex-center o-gap-10">
          <img src="../assets/logo_twitter.png" height="50px" width="50px">
          <span class="o-text-white" style="font-size: 30px">@Wolox</span>
        </div>
        <span class="o-button" @click="sendTwitter">Siguenos</span>
      </div>
    </div>
    <div class="o-fondo-gris o-flex">
      <div class="o-flex-column o-flex-center-vertical" style="font-size: 50px">
        <span>Trabajamos para</span>
        <span><span class="o-text-bold o-text-blue">convertir</span> <span class="o-text-bold o-text-green">ideas</span> en</span>
        <span>productos</span>
      </div>
    </div>
  </div>

  <div class="o-container o-flex-column o-flex-center-vertical">
    <a name="beneficios"></a>
    <span class="o-text-bold" style="font-size: 25px">Entre los beneficios que ofrecemos se encuentras <span class="o-text-blue">;)</span></span>
    <div class="o-flex gap-50" style="margin-top: 40px">
      <div class="o-flex-column o-flex-center-vertical" style="width: 150px">
        <img src="../assets/Ic_Hour.svg" class="o-img-beneficios">
        <span style="margin-top: 30px;text-align: center">Flexibilidad Horaria</span>
      </div>
      <div class="o-flex-column o-flex-center-vertical" style="width: 150px">
        <img src="../assets/Ic_HomeOffice.svg" class="o-img-beneficios">
        <span style="margin-top: 30px;text-align: center">Home Office</span>
      </div>
      <div class="o-flex-column o-flex-center-vertical" style="width: 150px">
        <img src="../assets/Ic_Workshops.svg" class="o-img-beneficios">
        <span style="margin-top: 30px;text-align: center">Capacitaciones y workshops</span>
      </div>
      <div class="o-flex-column o-flex-center-vertical" style="width: 150px">
        <img src="../assets/Ic_DrinkSnacks.svg" class="o-img-beneficios">
        <span style="margin-top: 30px;text-align: center">Snacks, frutas y bebidas gratis</span>
      </div>
      <div class="o-flex-column o-flex-center-vertical" style="width: 150px">
        <img src="../assets/Ic_laptop.svg" class="o-img-beneficios">
        <span style="margin-top: 30px;text-align: center">Semana Remota</span>
      </div>
      <div class="o-flex-column o-flex-center-vertical" style="width: 150px">
        <img src="../assets/Ic_brain.svg" class="o-img-beneficios">
        <span style="margin-top: 30px;text-align: center">Trabajar en ultimas tecnologías</span>
      </div>
    </div>
  </div>

  <div class="o-linea"></div>

  <div class="o-fondo-footer">
    <div class="o-flex" style="margin-top: 50px; height: 100%">
      <div class="o-flex-column o-flex-center-vertical" style="font-size: 40px">
        <span>Gracias por <span class="o-text-blue" style="font-weight: bold">completar el ejercicio</span></span>
        <span style="font-size: 30px">Te invitamos a ver la información</span>
        <span class="o-button-xl-blue" style="margin-top: 50px" @click="sendWolox">Conocer más</span>
      </div>
    </div>
  </div>

</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'Main',
  setup() {
    const scroll = ref({ background: ''})

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    //methods
    const handleScroll = () => {
      if (window.scrollY > 10) {
        scroll.value.background = 'white'
      } else {
        scroll.value.background = ''
      }
    }

    const sendTwitter = () => {
      window.open('https://twitter.com/wolox?lang=es', '_blank')
    }

    const sendWolox = () => {
      window.open('https://www.wolox.com.ar/', '_blank')
    }

    return {
      scroll,
      sendTwitter,
      sendWolox
    }
  }
}
</script>

<style>

.o-linea {
  margin: 0 auto;
  height: 1px;
  background-color: #F2F5FA;
  width: 80%;
  box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.1);
}

.o-img-beneficios {
  width: 100px;
  height: 100px;
}

.o-flex {
  display: flex;
  justify-content: space-around
}

.o-flex-center {
  display: flex;
  justify-content: center;
  align-content: center;
}

.o-gap-10 {
  gap: 10px;
}

.o-gap-50 {
  gap: 50px;
}

.o-flex-column {
  display: flex;
  flex-direction: column;
}

.o-flex-center-vertical {
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Monserrat, sans-serif;
}

body {
  margin: 0;
}

.o-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  height: 80px;
  z-index: 100;
}
.o-navbar a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 30px;
  text-decoration: none;
  font-weight: bold;
}

.o-menu-imagen {
  margin-left: 150px;
}

.o-header-image {
  height: 50px;
}

.o-menu {
  margin-right: 150px;
}

.o-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7px;
  border: 2px solid #2AA7DF;
  color: #2AA7DF;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  height: 30px;
  width: 120px;
}

.o-button-xl-blue {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7px;
  border: 2px solid #2AA7DF;
  color: white;
  background-color: #2AA7DF;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  height: 50px;
  width: 150px;
}

.o-button-xl-blue:hover {
  background-color: white;
  color: #2AA7DF;
  cursor: pointer;
}

.o-button:hover {
  background-color: #2AA7DF;
  color: white;
  cursor: pointer;
}

.o-navbar img {
  padding: 12px;
}

.o-navbar a:hover {
  color: #2AA7DF;
}

.o-main {
  margin-top: 50px;
}

.o-componente1 {
  background-image: url("../assets/Backgrounds/Bg_Header.png");
  height: 50vh;
}

.o-container {
  height: 50vh;
}

.o-text-blue {
  color: #2AA7DF;
}

.o-text-green {
  color: #97CF00;
}

.o-text-white {
  color: white;
}

.o-text-bold {
  font-weight: bold;
}

.o-fondo-woloxer {
  background-image: url("../assets/img_woloxer.png");
  width: 50%;
  height: 100%;
  background-size: 100%;
  background-repeat: round;
}

.o-fondo-gris {
  background-color: #F2F5FA;
  height: 100%;
  width: 50%;
}

.o-fondo-footer {
  background-image: url("../assets/Backgrounds/Bg_Footer.png");
  height: 50vh;
}
</style>
