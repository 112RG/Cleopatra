<template>
  <v-col cols="12" sm="4">
    <v-card outlined elevation="12" class="ma-3 text-xs-center box">
      <div class="test">
        <a>Name:</a><a class="value">{{ name }}</a>
      </div>
      <div class="test">
        <a>DB_Connection:</a
        ><a
          class="value"
          :class="db == 'CONNECTED' ? 'connected' : 'disconnected'"
          >{{ db }}</a
        >
      </div>
      <div class="test"><a>Ram(MiB):</a><a class="value">100</a></div>
      <div class="test"><a>ResponseTime(MS):</a><a class="value">100</a></div>
      <div class="test"><a>Started:</a><a class="value">100</a></div>
      <div class="test"><a>Requests(Total):</a><a class="value">100</a></div>
      <Sparkline :name="name" />
    </v-card>
  </v-col>
</template>
<script>
import Sparkline from './Sparkline'
export default {
  name: 'Container',
  components: {
    Sparkline
  },

  props: {
    name: {
      type: String,
      default: 'ra'
    }
  },
  data: () => ({
    db: 'CONNECTED'
  })
}
</script>
<style scoped>
.test {
  background-color: #1b1b1b;
  padding: 9px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: white;
  border: solid 0.5em #222222;
  text-align: left;
  flex-direction: row;
  display: flex;
  flex: 1;
  border-bottom-width: 0em;
  border-top-width: 0.65rem;
}
.connected {
  color: green;
}
.disconnected {
  color: red;
}
.value {
  text-align: right;
  flex: 1;
}
.test:last-child {
  border-bottom-width: 0.65em;
}
.box {
  width: 350;
  background-color: #1b1b1b;
}
</style>
