<template>
  <div>
    <q-carousel
      height="600px"
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../assets/cv_kuva.jpg" />
      <q-carousel-slide :name="2" img-src="../assets/kiipeily.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/vuori.jpg" />
    </q-carousel>
  </div>
</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {ExampleComponent}
})
export default class Carousel extends Vue {
  slide = 1;
  autoplay = true;

};

</script>

<style scoped>

</style>
