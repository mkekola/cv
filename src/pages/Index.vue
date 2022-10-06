<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-6">
          <q-img src="../assets/cv_kuva.jpg" no-native-menu>
            <div class="absolute-bottom text-subtitle1 text-left">
              Työkokemus
            </div>
          </q-img>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {ExampleComponent}
})
export default class PageIndex extends Vue {

};

</script>

<style>

.q-pa-md q-img{
  height: 550px;
}

</style>


