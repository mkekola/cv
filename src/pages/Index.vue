<template>
  <q-page>
    <div class="parent">
      <div class="container">
        <div class="top-row row">
          <div class="col-xs-12 col-sm-6 column">
            <q-img src="../assets/cv_kuva.jpg" alt=""/>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <h1 class="name">
              MARIA <span>KEKOLA</span>
            </h1>
            <span class="title">
              Luonnont. Kand., Tietojenkäsittelytiede
            </span>
            <p>
              sak dd sakdsadlsa d dsadksadösa dsk ds jsfjskakf saölfölsakfölkölks fsa fjfsakölskaldksa
              dsd sölkdsaölkd  sdölksa kdöskdölsak sadk-lsadsa dsa sakdösaldäsa ds dsdlsd äsad  s ösadsal
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            First column
          </div>
          <div class="col-xs-12 col-sm-6 column">
            Second column
          </div>
          <div class="col-xs-12 col-sm-6 column">
            First column
          </div>
          <div class="col-xs-12 col-sm-6 column">
            Second column
          </div>
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

.parent {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

}

.container {
  background: rgba(15, 15, 15, 0.95);
  height: 100%;
  width: 1000px;
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 4rem;
  line-height: 70px;
  margin: 0;
}

.name span {
  display: block;
  font-weight: bold;
}

.title {
  background: #223444;
  color: white;
  padding: 5px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 35px;
}


/*q-img {*/
/*  margin: auto;*/
/*  width: 100%;*/
/*  max-width: 45em;*/
/*  max-height: 100%;*/
/*}*/

.top-row {
  justify-content: center;
}

.column {
  background: #223444;
}

.column:nth-child(2n) {
  background: white;
}

.column:nth-child(2) {
  padding: 70px 20px;
}

.middle-row {
  justify-content: center;
}

.bottom-row {
  justify-content: center;
}

</style>


