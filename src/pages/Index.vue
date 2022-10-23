<template>
  <q-page>
    <div class="parent">
      <div class="container">
        <div class="top-row row">
          <div class="col-xs-12 col-sm-6 column">
            <Carousel />
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <h1 class="name">
              MARIA <span>KEKOLA</span>
            </h1>
            <span class="title">
              Luonnont. Kand., Tietojenkäsittelytiede
            </span>
            <p>
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Työkokemus" :left="true" />
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Koulutus" :left="false" />
            Second column
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Yhteystiedot" :left="true" />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Taidot" :left="false" />
            <SkillList />

          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component} from 'vue-property-decorator';
import Carousel from "components/Carousel.vue";
import Subtitle from "components/Subtitle.vue";
import SkillList from "components/SkillList.vue";

@Component({
  components: {SkillList, Carousel, Subtitle, ExampleComponent}
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


