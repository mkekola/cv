<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import EssentialLink from 'components/EssentialLink.vue'

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {

}

</script>
