<template>
  <div>
    <Skill
      icon="home"
      :value="100"
    />
    <Skill
      icon="profile"
      :value="0.5"
    />
    <Skill
      icon="home"
      :value="9"
    />
    <Skill
      icon="home"
      :value="0.9"
    />
    <Skill
      icon="home"
      :value="0.9"
    />
    <Skill
      icon="home"
      :value="0.9"
    />
  </div>
</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component} from 'vue-property-decorator';
import Skill from "components/Skill.vue";

@Component({
  components: {Skill, ExampleComponent}
})
export default class SkillList extends Vue {

};

</script>

<style lang="scss">

</style>
