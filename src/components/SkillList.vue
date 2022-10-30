<template>
  <div>
    <Skill
      icon="fa-solid fa-walkie-talkie"
      :value="95"
    />
    <div>
      Kommunikaatio
    </div>
    <Skill
      icon="fa-solid fa-earth-europe"
      :value="75"
    />
    <div>
      Englanti
    </div>
    <Skill
      icon="fa-solid fa-earth-asia"
      :value="40"
    />
    <div>
      Japani
    </div>
    <Skill
      icon="fa-solid fa-camera"
      :value="85"
    />
    <div>
      Valokuvaus
    </div>
    <Skill
      icon="fa-solid fa-palette"
      :value="60"
    />
    <div>
      Muotoilu
    </div>
    <Skill
      icon="fa-brands fa-vuejs"
      :value="25"
    />
    <div>
      Vue.js
    </div>
  </div>
</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component} from 'vue-property-decorator';
import Skill from 'components/Skill.vue';

@Component({
  components: {Skill, ExampleComponent}
})
export default class SkillList extends Vue {

};

</script>

<style lang="scss">

</style>
