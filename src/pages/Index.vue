<template>
  <q-page>
    <div class="container">
      <div class="top-row">
        <div class="col-1">
          <div class="profile-img">
            <q-img style="height: 600px; width: 45em;" :fit='contain' src="../assets/cv_kuva.jpg" alt=""/>
          </div>
        </div>
        <div class="col-2">
          Second column
        </div>
      </div>
      <div class="middle-row">
        <div class="col-3">
          First column
        </div>
        <div class="col-4">
          Second column
        </div>
      </div>
      <div class="bottom-row">
        <div class="col-5">
          First column
        </div>
        <div class="col-6">
          Second column
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

.container {
  background: rgba(15,15,15,0.95);
}

q-img {
  margin: auto;
  width: 100%;
  max-width: 45em;
  max-height: 100%;
}

.top-row {
  display: flex;
  justify-content: center;
}

.middle-row {
  justify-content: center;
  display: flex;
}

.bottom-row {
  justify-content: center;
  display: flex;
}

.col-1 {
  background: #121212;
  height: 600px;
  width: 45em;
  object-fit: contain;
}

.col-2 {
  background: #ffffff;
  padding: 15px;
  height: 600px;
  width: 45em;
}

.col-3 {
  background: #223444;
  padding: 15px;
  height: 600px;
  width: 45em;
}

.col-4 {
  background: #ffffff;
  padding: 15px;
  height: 600px;
  width: 45em;
}

.col-5 {
  background: #223444;
  padding: 15px;
  height: 400px;
  width: 45em;
}

.col-6 {
  background: #ffffff;
  padding: 15px;
  height: 400px;
  width: 45em;
}

</style>


