<template>
  <div>
    <q-btn class="q-mx-xl q-my-lg contact-button" flat v-ripple no-caps
           @click="moveToPage('mailto: maria.kekola@gmail.com')">
      <div class="row justify-start">
        <div style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%)">
          <q-avatar icon="fa-solid fa-envelope" font-size="0.8rem" size="2.5rem" color="secondary"
                    text-color="accent"/>
        </div>
        <div class="contact-label">
          Sähköposti
        </div>
      </div>
    </q-btn>
    <q-btn class="q-mx-xl q-my-lg contact-button" flat v-ripple no-caps
           @click="moveToPage('https://github.com/mkekola')">
      <div class="row justify-start">
        <div style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%)">
          <q-avatar icon="fa-brands fa-github" font-size="0.92rem" size="2.5rem" color="secondary"
                    text-color="accent"/>
        </div>
        <div class="contact-label">
          Github
        </div>
      </div>
    </q-btn>
    <q-btn class="q-mx-xl q-my-lg contact-button" flat v-ripple no-caps
           @click="moveToPage('https://www.instagram.com/mariasimpression/')">
      <div class="row justify-start">
        <div style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%)">
          <q-avatar icon="fa-brands fa-instagram" font-size="0.92rem" size="2.5rem" color="secondary"
                    text-color="accent"/>
        </div>
        <div class="contact-label">
          Portfolio
        </div>
      </div>
    </q-btn>
  </div>

</template>

<script lang="ts">

import ExampleComponent from 'components/ExampleComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {ExampleComponent}
})

export default class Contact extends Vue {
  moveToPage(link: string) {
    window.open(link)
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Source+Sans+Pro:wght@300&display=swap');

.contact-button {
  height: 3.1rem;
  font-family: 'Source Sans Pro', sans-serif;
  width: 90%
}

.contact-label {
  font-size: 1.1rem;
  color: darkgrey;
  text-align: start;
  width: 5rem
}

</style>
