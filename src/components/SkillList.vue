<template>
  <div>
    <div class="row justify-evenly">
      <Skill
        icon="fa-solid fa-walkie-talkie"
        :value="95"
        text="Kommunikaatio"
      />
      <Skill
        icon="fa-solid fa-earth-europe"
        :value="75"
        text="Englanti"
      />
      <Skill
        icon="fa-solid fa-earth-asia"
        :value="40"
        text="Japani"
      />
    </div>
    <div class="row justify-evenly">
    <Skill
      icon="fa-solid fa-camera"
      :value="85"
      text="Valokuvaus"
    />
    <Skill
      icon="fa-solid fa-palette"
      :value="60"
      text="Muotoilu"
    />
    <Skill
      icon="fa-brands fa-vuejs"
      :value="25"
      text="Vue.js"
    />
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

.container {
  flex-wrap: wrap;
  display: flex;
}

.item {

}

</style>
