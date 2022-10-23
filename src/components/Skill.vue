<template>
  <q-circular-progress
    show-value
    class="text-white q-ma-md"
    :value="value"
    size="90px"
    :thickness="0.2"
    color="secondary"
    center-color="accent"
    track-color="transparent"
  >
    <q-icon
      :name="icon"
      color="secondary"
    />
  </q-circular-progress>
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

};

</script>

<style lang="scss">

</style>
