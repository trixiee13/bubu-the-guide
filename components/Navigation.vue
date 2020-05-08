<template lang="pug">
  .nav-wrapper
    button.menu-toggle(:class="{'open': menuOpen }" @click="toggleMenu")
      span.icon
    nav.nav-list(:class="{'open': menuOpen }")
      .left
        h4 activități de iarna
        ul
          li
            nuxt-link(to="/") Alpinism de iarna
          li
            nuxt-link(to="/") Cățărat pe gheata
          li
            nuxt-link(to="/") Ski de tură

        h4 activități de vara
        ul
          li
            nuxt-link(to="/") Escaladă la stâncă
          li
            nuxt-link(to="/") Escaladă multipitch
          li
            nuxt-link(to="/") Alpinism

        h4 Cursuri și antrnamente
        ul
          li
            nuxt-link(to="/") Cursuri de escaladă
          li
            nuxt-link(to="/") Cursuri de alpinism
          li
            nuxt-link(to="/") Antrenamente de escaladă la panou
      .right
        ul.contact
          li
            nuxt-link(to="/contact") Contact
          li
            nuxt-link(to="/about") Despre mine
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return  {
      menuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.classList.toggle("menu-open");
    }
  }
}
</script>
<style lang="scss">
body.menu-open {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>

<style lang="scss" scoped>
@import "~/assets/styles/include.scss";

$color: #5271ff;
$button-radius: 50px;
$button-line-height: 3px;
$burger-width: 0.40 * $button-radius;
$burger-gutter: 10px;

.menu-toggle {
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  transition: all 0.5s ease;
  border: 3px solid black;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 11;

  &.open {
    border: 3px solid white;
    background: rgba(0,0,0,0);
  }

  .icon {
    display: inline-block;
    position: absolute;
    background: black;
    margin: 0 auto;
    width: $burger-width;
    height: $button-line-height;
    top: 50%;
    left: 0;
    right:0;
    transition: all 0.5s ease;
    transform: translateY(-0.5 * $button-line-height);

    &:before, &:after{
      content: "";
      position: absolute;
      margin: 0 auto;
      background: black;
      width: $burger-width;
      height: $button-line-height;
      left: 0;
      right:0;
      transition: all 0.5s ease;
    }

    &:before {
      bottom: $burger-gutter;
    }

    &:after {
      top: $burger-gutter;
    }
  }


  &.open .icon {
    background: transparent;

    &:before, &:after {
      transform-origin: 0 50%;
      width: 20px;
      background: white;
    }

    &:before {
      transform: rotateZ(45deg);
      width: 27px;
    }

    &:after {
      transform: rotateZ(-45deg);
      width: 27px;
    }
  }
}

.nav-list {
  background-color: $color;
  width: 70%;
  overflow: scroll;
  position: absolute;
  top:0;
  left:0;
  bottom: 0;
  visibility: hidden;
  opacity: 0;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
  padding: 110px;
  display: flex;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  z-index: 10;

  &.open {
    transform: translateX(0);
    visibility: visible;
    opacity: 0.97;
  }

  h4 {
    padding: 20px 0 0 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: white;
    border-bottom: 2px solid white;
  }


  ul {
    list-style-type: none;
    padding: 0 0 0 20px;

    li {
      display: block;
      position: relative;
      margin: 15px 0;
      transition: all 0.5s ease;
    }

     a {
      display: block;
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      font-family: 'Open-Sans', sans-serif;
      font-weight: normal;
      border-left: 3px solid transparent;
      padding-left: 0;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  ul.contact {
    padding-top: 20px;
    li a {
      font-size: 18px;
      font-family: 'Bowlby One', cursive;
    }
  }
}


</style>
