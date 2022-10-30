<template>
  <q-page>
    <div class="parent">
      <div class="container">
        <div class="top-row row">
          <div class="col-xs-12 col-sm-6 column">
            <Carousel/>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <h1 class="name">
              MARIA <span>KEKOLA</span>
            </h1>
            <span class="title">
              Luonnont. Kand., Tietojenkäsittelytiede
            </span>
            <p>
              Inspiroitunut ja tunnollinen tietojenkäsittelytieteen toisen vuoden opiskelija täällä moi! Toimin
              ainejärjestömme
              TKO-äly ry:n tiedottajana, somevastaavana sekä useamman tiimin jäsenenä. Viimeiset viisi vuotta olen
              työskennellyt luottamustehtävissä
              ansioituneesti. Olen harrastekiipeilijä ja puoliammattilainen valokuvaaja sekä sisällöntuottaja.
              Leipätiedotuksen leipätestin tulos: "Olet terveellinen ja kaikkeen menoon mukaan mahtuva innostunut
              siemennäkkäri". 😀
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Työkokemus" :left="true"/>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Koulutus" :left="false"/>
            Second column
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Yhteystiedot" :left="true"/>
            <q-btn class="q-mx-xl q-my-lg" flat v-ripple no-caps
                   style="height: 3.1rem; font-family: 'Source Sans Pro', sans-serif;"
                   @click="moveToPage('mailto: maria.kekola@gmail.com')">
              <div class="row justify-start">
                <div style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%)">
                  <q-avatar icon="fa-solid fa-envelope" font-size="0.8rem" size="2.5rem" color="secondary"
                            text-color="accent"/>
                </div>
                <div style="font-size: 1.1rem; color: darkgrey; text-align: start; width: 5rem">
                  Sähköposti
                </div>
              </div>
            </q-btn>
            <q-btn class="q-mx-xl q-my-lg" flat v-ripple no-caps
                   style="height: 3.1rem; font-family: 'Source Sans Pro', sans-serif;"
                   @click="moveToPage('https://github.com/mkekola')">
              <div class="row justify-start">
                <div style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%)">
                  <q-avatar icon="fa-brands fa-github" font-size="0.92rem" size="2.5rem" color="secondary"
                            text-color="accent"/>
                </div>
                <div style="font-size: 1.1rem; color: darkgray; text-align: start; width: 5rem">
                  Github
                </div>
              </div>
            </q-btn>
            <q-btn class="q-mx-xl q-my-lg" flat v-ripple no-caps
                   style="height: 3.1rem; font-family: 'Source Sans Pro', sans-serif;"
                   @click="moveToPage('https://www.instagram.com/mariasimpression/')">
              <div class="row justify-start">
                <div style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%)">
                  <q-avatar icon="fa-brands fa-instagram" font-size="0.92rem" size="2.5rem" color="secondary"
                            text-color="accent"/>
                </div>
                <div style="font-size: 1.1rem; color: darkgrey; text-align: start; width: 5rem">
                  Portfolio
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <Subtitle title="Taidot" :left="false"/>
            <SkillList/>

          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component} from 'vue-property-decorator';
import Carousel from 'components/Carousel.vue';
import Subtitle from 'components/Subtitle.vue';
import SkillList from 'components/SkillList.vue';


@Component({
  components: {SkillList, Carousel, Subtitle, ExampleComponent}
})
export default class PageIndex extends Vue {
  moveToPage(link: string) {
    window.open(link)
  }

};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Source+Sans+Pro:wght@300&display=swap');

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
  font-size: 4.5rem;
  line-height: 70px;
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: lighter;
  padding-bottom: 1rem;
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
  font-family: 'Josefin Sans', sans-serif;
}


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

p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.11rem;
  padding-top: 0.5rem;
}


</style>


