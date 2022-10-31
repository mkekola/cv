<template>
  <div>
    <div class="row">
      <div class="smallrect">

      </div>
      <div class="bigrect col">
        <div :class="left ? 'subtext subtext-left ' : 'subtext subtext-right '">
          {{ title }}
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component, Prop} from 'vue-property-decorator';
import Carousel from 'components/Carousel.vue';

@Component({
  components: {Carousel, ExampleComponent}
})
export default class Subtitle extends Vue {
  @Prop()
  title!: string

  @Prop()
  left!: boolean

};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Source+Sans+Pro:wght@300&display=swap');

.smallrect {
  width: 20px;
  height: 70px;
  background: #D6B20e;
}

.bigrect {
  width: 100%;
  height: 70px;
  background: rgba(124, 123, 123, 0.25);
}

.subtext {
  line-height: 70px;
  margin-left: 2rem;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2rem;
  font-weight: bold;
}

.subtext-left {
  color: #D6B20e;
}

.subtext-right {
  color: #223444;
}


</style>
