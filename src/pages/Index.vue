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
            <!-- TÄSTÄ ALKAA TYÖKOKEMUS-OSIO -->
            <Subtitle title="Työkokemus" :left="true"/>
            <div class="work">
              <div class="row q-pl-xl q-mt-lg">
                <h5 class="q-mt-none q-mb-xs" style="font-weight: bolder">TKO-ÄLY RY</h5>
              </div>
              <div class="work-list" style="padding-left: 4rem">
                <div style="padding-bottom: 1rem">
                  <div class="row" style="font-size: 1rem; font-weight: bolder">Tiedottaja</div>
                  <div class="row">01/2022 - </div>
                </div>
                <div>
                  <div class="row" style="font-size: 1rem; font-weight: bolder">Somevastaava</div>
                  <div class="row">01/2022 - </div>
                </div>
              </div>
              <div class="row q-pl-xl q-mt-lg">
                <h5 class="q-mt-none q-mb-xs" style="font-weight: bolder">CSF SECURITY OY</h5>
              </div>
              <div class="work-list" style="padding-left: 4rem">
                <div style="padding-bottom: 1rem">
                  <div class="row" style="font-size: 1rem; font-weight: bolder">Palveluesimies</div>
                  <div class="row">06/2019 - 09/2022</div>
                </div>
                <div>
                  <div class="row" style="font-size: 1rem; font-weight: bolder">Arvokuljettaja</div>
                  <div class="row">12/2017 - 06/2019</div>
                </div>
              </div>
              <div class="row q-pl-xl q-mt-lg">
                <h5 class="q-mt-none q-mb-xs" style="font-weight: bolder">ATRIA OYJ</h5>
              </div>
              <div class="work-list" style="padding-left: 4rem">
                <div style="padding-bottom: 1rem">
                  <div class="row" style="font-size: 1rem; font-weight: bolder">Logistiikka</div>
                  <div class="row">11/2015 - 06/2017</div>
                </div>
                <div style="padding-bottom: 1rem">
                  <div class="row" style="font-size: 1rem; font-weight: bolder">Tuotanto</div>
                  <div class="row">04/2015 - 08/2015</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <!-- TÄSTÄ ALKAA KOULUTUS-OSIO -->
            <Subtitle title="Koulutus" :left="false"/>
            <div>
              <div class="study">
                <div class="row justify-center q-mt-xl">
                  <img src="../assets/hy_logo.svg.png" style="max-height: 4rem">
                  <div style="margin-left: 2.2rem">
                    <h5 class="q-mt-none q-mb-none" style="font-weight: bolder">HELSINGIN YLIOPISTO</h5>
                    <div style="font-weight: bold">
                      Tietojenkäsittelytieteen kandiohjelma
                    </div>
                    <div>
                      09/2021 - 05/2024 (arvio)
                    </div>
                  </div>
                  <div class="course-list" style="padding-right: 4rem">
                    <div class="row">Ohjelmoinnin perusteet: Java & Python</div>
                    <div class="row">Ohjelmoinnin jatko: Python</div>
                    <div class="row">Tietorakenteet & algoritmit: Python</div>
                    <div class="row">Tietokannat: SQL</div>
                    <div class="row">Japanin kieli CEFR A2</div>
                    <div class="row">Full Stack Open: React/Node alkeet</div>
                  </div>
                </div>
                <div class="row justify-center">
                  <img src="../assets/seamk.png" style="max-height: 1.2rem; margin-top: 1.5rem">
                  <div style="margin-left: 1.8rem">
                    <h5 class="q-mt-none q-mb-none" style="font-weight: bolder">SEINÄJOEN AMK</h5>
                    <div style="font-weight: bold">
                      Bio- ja elintarviketekniikan insinööri
                    </div>
                    <div>
                      08/2015 - 05/2016
                    </div>
                  </div>
                  <div class="course-list" style="padding-right: 6rem; padding-bottom: 2rem">
                    <div class="row">Matematiikka 1</div>
                    <div class="row">Fysiikka 1</div>
                    <div class="row">Differentiaali- ja integraalilaskenta</div>
                    <div class="row">Tieto- ja viestintätekniikka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 column">
            <!-- TÄSTÄ ALKAA YHTEYSTIEDOT-OSIO -->
            <Subtitle title="Yhteystiedot" :left="true"/>
            <Contact/>

          </div>
          <div class="col-xs-12 col-sm-6 column">
            <!-- TÄSTÄ ALKAA TAIDOT-OSIO -->
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
import Contact from 'components/Contact.vue';


@Component({
  components: {Contact, SkillList, Carousel, Subtitle, ExampleComponent}
})
export default class PageIndex extends Vue {

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
  color: #052c36;
}

.name span {
  display: block;
  font-weight: bold;
}

.title {
  background: #052c36;
  color: #F6F6F6;
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
  background: #052c36;
}

.column:nth-child(2n) {
  background: #F6F6F6;
}

.column:nth-child(2) {
  padding: 70px 20px;
}

.study {
  color: #052c36;
  font-family: 'Source Sans Pro', sans-serif;
}

.course-list {
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 1rem;
}

.work {
  color: darkgrey;
  font-family: 'Source Sans Pro', sans-serif;
}

.work-list {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0.5rem;
}


p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.11rem;
  padding-top: 0.5rem;
  color: #052c36;
}


</style>


