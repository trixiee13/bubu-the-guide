<template lang="pug">
  .homepage
    header
      nav
        ul
          li about me
          li winter activities
          li summer activities

    Navigation

    main
      //- .intro {{ $t('greeting') }} sdsdf
      .hi  salut, eu sunt bubu

      .mountain_1
        .text
          h1 alpine climbing
          button.type-2 see more
      .mountain_2
        .text
          h2 trekking
          button.type-2 see more
      .mountain_3
        .text
          h3 rock climbing
          button.type-2 see more

      button.main-cta.type-2 ask me anything


      .social
        .socialbtns
          fa(:icon="['fas', 'angle-left']")
          fa(:icon="['fas', 'angle-right']")
          //- ul
          //-   li
          //-     a(href="#" class="fa fa-lg fa-facebook")
          //-   li
          //-     a(href="#" class="fa fa-lg fa-instagram")

    footer

</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'


export default {
  name: 'App',

  components: {
    Logo,
    Navigation
  },

  head() {

    return {
      htmlAttrs: { lang: 'en' },
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: 'sdfsdfsfd'
        },
        {
          name: 'keywords',
          content: 'fafasfa'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
@import "~/assets/styles/include.scss";

@keyframes mountain-grow {
  from {
    top: 100vh;
  }
  to {
    top: 100px;
  }
}

@keyframes slide-in-left {
  from {
    left: -230px;
  }
  to {
    left: -164px;
  }
}
@keyframes slide-in-right {
  from {
    right: -130px;
  }
  to {
    right: 20px;
  }
}

main {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  h1, h2, h3 {
    font-family: $abys;
    font-size: 30px;
    font-weight: initial;
  }
}


.mountain_1,
.mountain_2,
.mountain_3 {
  position: absolute;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  top: 100vh;
  right: 0;
  left: 0;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
    z-index: 1;
    top: 0;
    padding: 2%;
    margin-top: -100px;

    .text {
      right: 65px;
      transition: right 0.5s ease-out 0.3s;
    }
  }
}

.mountain_1 {
  animation: mountain-grow 1s forwards;
  animation-timing-function: cubic-bezier(0.73, 0, 0.37, 1.41);
  animation-delay: 0.6s;

  background-image: url(https://images.unsplash.com/photo-1459666644539-a9755287d6b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1728&q=80);

  clip-path: polygon(20% 23%, 20% 23%, 45% 100%, 0% 100%);
  -webkit-clip-path: polygon(20% 23%, 20% 23%, 45% 100%, 0% 100%);

  &:hover {
    clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
    -webkit-clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  .text {
    width: 68vw;
  }
}

.mountain_2 {
  animation: mountain-grow 0.9s forwards;
  animation-timing-function: cubic-bezier(0.73, 0, 0.37, 1.41);
  animation-delay: 0.9s;
  background-image: url(https://images.unsplash.com/photo-1566744883362-1d8fa0443c3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80);

  clip-path: polygon(40% 0, 40% 0, 60% 100%, 25% 100%);
  -webkit-clip-path: polygon(40% 0, 40% 0, 60% 100%, 25% 100%);
  &:hover {
    clip-path: polygon(40% 0, 100% 0%, 100% 100%, 25% 100%);
    -webkit-clip-path: polygon(40% 0, 100% 0%, 100% 100%, 25% 100%);
  }

  .text {
    width: 42vw;
  }
}

.mountain_3 {
  animation: mountain-grow 1s forwards;
  animation-timing-function: cubic-bezier(0.73, 0, 0.37, 1.41);
  animation-delay: 0.5s;
  background-image: url(https://images.unsplash.com/photo-1558378350-577adea1f4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);

  clip-path: polygon(61% 29%, 61% 29%, 100% 100%, 34% 100%);
  -webkit-clip-path: polygon(61% 29%, 61% 29%, 100% 100%, 34% 100%);
  &:hover {
    clip-path: polygon(61% 0, 100% 0, 100% 100%, 34% 100%);
    -webkit-clip-path: polygon(61% 0, 100% 0, 100% 100%, 34% 100%);
  }

  .text {
    width: 30vw;
  }
}

.text {
  position: absolute;
  z-index: 5;
  right: -200vw;
  top: 0;
  line-height: 75px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;

  h1,
  h2,
  h3 {
    font-size: 75px;
  }
  button {
  }
}

.intro {
  font-family: $abys;
  transform: rotate(-90deg);
  position: absolute;
  left: -230px;
  top: 200px;
  font-size: 50px;

  animation: slide-in-left 0.5s forwards;
  animation-timing-function: cubic-bezier(0.73, 0, 0.37, 1.41);
  animation-delay: 2s;
}

button.type-1 {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  font-family: "Open Sans", sans-serif;

  background-image: linear-gradient(90deg, rgba(82, 113, 255, 1) 0%, rgba(0, 98, 83, 1) 100%);

  color: white;

  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
}

button.main-cta {
  position: absolute;
  top: 60px;
  right: -130px;

  animation: slide-in-right 0.5s forwards;
  animation-timing-function: cubic-bezier(0.73, 0, 0.37, 1.41);
  animation-delay: 1s;
}

button.type-2 {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  font-family: "Open Sans", sans-serif;

  background: rgba(0, 0, 0, 0);
  border: 2.5px solid $black;

  &:hover {
    background: $black;
    color: white;
  }
}

@keyframes jiggle {
  0% {
    width: 70px;
  }
  2% {
    width: 76px;
  }
  4.5% {
    width: 70px;
  }
  100% {
    width: 70px;
  }
}

.see-all {
  position: absolute;
  height: 30vh;
  background: rgba(0, 0, 0, 0);
  border: 3px solid $black;
  width: 70px;
  left: -3px;
  top: 30px;
  cursor: pointer;
  animation: jiggle 10s infinite;
  animation-delay: 4s;

  transition: all 0.2s ease;

  .see-all-text {
    display: none;
    font-family: Open-Sans, sans-serif;
  }

  &:hover {
    background: white;
    z-index: 2;
    animation: none;
    width: 400px;
    .see-all-text {
      display: flex;
      height: 300px;
      margin-left: 80px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      button {
        margin-top: 20px;
      }
    }
  }
}

.social {
  width: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 335px;

  right: -130px;

  animation: slide-in-right 0.5s forwards;
  animation-timing-function: cubic-bezier(0.73, 0, 0.37, 1.41);
  animation-delay: 1.7s;

  a,
  a:hover {
    text-decoration: none;
  }

  .socialbtns,
  .socialbtns ul,
  .socialbtns li {
    margin: 0;
    padding: 5px;
  }

  .socialbtns li {
    list-style: none outside none;
    display: inline-block;
  }

  .socialbtns .fa {
    width: 40px;
    height: 28px;
    color: #000;
    background-color: #fff;
    border: 3px solid #000;
    text-align: center;
    padding-top: 12px;
    border-radius: 22px;
    -moz-border-radius: 22px;
    -webkit-border-radius: 22px;
    -o-border-radius: 22px;
  }

  .socialbtns .fa:hover {
    color: #fff;
    background-color: #000;
  }
}

nav {
  position: absolute;
  top: 150px;
  font-family: "Open Sans", sans-serif;

  right: -130px;

  animation: slide-in-right 0.5s forwards;
  animation-timing-function: cubic-bezier(0.73, 0, 0.37, 1.41);
  animation-delay: 1.3s;

  ul {
    list-style-type: none;

    li {
      width: 30px;
      line-height: 49px;
      border: 3px solid white;
      width: 194px;
      text-align: center;
      height: 49px;
      text-align: center;
      cursor: pointer;

      &:hover {
        border: 3px solid $black;
      }
    }
  }
}

.hi {
  font-family: 'Permanent Marker', cursive;
  left: 0;
  width: 63vw;
  position: absolute;
  top: 60px;
  font-size: 89px;
  line-height: 70px;
  z-index: 1;
  right: 0;
  margin: auto;
}

.hi-1 {
    font-family: 'Permanent Marker', cursive;
      font-size: 89px;
        left: 0;
  width: 63vw;
  position: absolute;
  top: 60px;
  font-size: 89px;
  line-height: 70px;
  z-index: 1;
  right: 0;
  margin: auto;
}
</style>
