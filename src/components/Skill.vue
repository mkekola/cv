<template>
  <div style="width: 33%; padding-top: 1rem">
    <div class="row justify-center">
      <q-circular-progress
        show-value
        class="text-white q-ma-md"
        :value="value"
        size="4rem"
        :thickness="0.2"
        color="secondary"
        center-color="accent"
        track-color="transparent"

      >
        <q-icon
          :name="icon"
          color="secondary"
          size="1.5rem"
        />
      </q-circular-progress>
    </div>
    <div class="skill-text">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({
  components: {ExampleComponent}
})
export default class Skill extends Vue {
  @Prop()
  value!: number

  @Prop()
  icon!: string

  @Prop()
  text!: string

};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Source+Sans+Pro:wght@300&display=swap');

.skill-text {
  text-align: center;
  color: #052c36;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
}

</style>
