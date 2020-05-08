<template lang="pug">
  .activity-wrapper

    .activity(v-if="activity")

      .hero
        img(src="https://drive.google.com/uc?id=1hEgy4Wf0yeqRLLQBJDCNuphvMIk6FVvd")
        h1.name {{ activity.name}}

        .short-description
          .location
            fa(:icon="['fas', 'map-marker-alt']")
            span Cheile turziii
          .duration
            fa(:icon="['fas', 'clock']")
            span {{ activity.duration}}


      .section-title.green Description
      .description  {{ activity.description}}

      .section-title.yellow Info
      .duration {{ activity.duration}}
      .people {{ activity.people}}
      .price {{ activity.price}}
      .categ {{ activity.categories[0].name }}
      .activitytypes {{ activity.activitytypes[0].name }}

      .section-title.blue Gallery


</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {},

  computed: {
    ...mapGetters({
      activity: 'activity/activity'
    })
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
  },

  created() {
    this.getActivityById({ id: '5e6512560a396500171cb2ca' })

  },

  methods: {
    ...mapActions({
      getActivityById: 'activity/getActivityById',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/include.scss";


  h1 {
    font-family: $boby;
    font-size: 50px;
    font-weight: initial;
  }

  .desctiption {
    font-size: 20px;
  }

  .short-description {
    border: 2px solid black;
    width: max-content;
    padding: 20px 10px;
    z-index: 1;

    > div {
      font-size: 18px;
      padding-top: 8px;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 18px;
    }
  }

  .hero {
    width: 100vw;
    height: 100vh;
    overflow: hidden;


    &:after {
           clip-path: polygon(45% 0, 100% 0, 100% 100%, 10% 100%);
      -webkit-clip-path: polygon(45% 0, 100% 0, 100% 100%, 10% 100%);
            z-index: -1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, rgba(82,113,255,0.36878501400560226) 0%, rgba(0,98,83,0.38279061624649857) 100%);
    }


    h1 {
      top: 10%;
      left: 20px;
      background: white;
      z-index: 1;
    }

    img {
      position: absolute;
      top: 0;
      left: 0
    }

    img {
      width: 100%;
      height: auto;
      clip-path: polygon(45% 0, 100% 0, 100% 100%, 10% 100%);
      -webkit-clip-path: polygon(45% 0, 100% 0, 100% 100%, 10% 100%);
      z-index: -1;
      // transition: transform 0.3s ease;

      // &:hover {
      //   transform: scale(1.2);
      // }
      // position: relative;

    }
  }

  .section-title {
    font-family: $boby;
    font-size: 30px;
    font-weight: initial;
    position: relative;
    width: max-content;
    margin-top: 100px;

    &.green {
      &:after {
        background: $green;
      }
    }
    &.yellow {
      &:after {
        background: $yellow;
      }
    }
    &.blue {
      &:after {
        background: $blue;
      }
    }


    &:after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      height: 18px;
      transition: height 0.3s ease;
      z-index: -1;
    }

    &:hover {
      &:after {
        height: 28px;
      }
    }
  }

</style>
