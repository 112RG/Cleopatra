<template>
  <v-app>
    <v-app-bar app color="secondary">
      <div class="d-flex align-center">
        <v-img
          alt="Cleopatra Logo"
          class="shrink mr-2"
          contain
          src="https://thesungod.xyz/A48m_rll.svg"
          transition="scale-transition"
          width="40"
        />
      </div>
      <h2 class="headline">Cleopatra</h2>
    </v-app-bar>
    <v-main>
      <Index />
    </v-main>
  </v-app>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',

  components: {
    Index
  },

  data: () => ({
    //
  })
}
</script>
