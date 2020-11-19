<template>
  <v-row justify="center" align="center">
    <v-col cols="6" sm="5">
      <v-card outlined elevation="12" class="ma-3 text-xs-center box">
        <div class="test">
          <v-expansion-panels elevation="0" accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <a
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 16px;
                  "
                  >Traefik Gateway</a
                >
                <template v-slot:actions>
                  <StatusIndicator :status="status" :pulse="true" />
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="test"><a>Ram(MiB):</a><a class="value">100</a></div>
                <div class="test">
                  <a>ResponseTime(MS):</a><a class="value">100</a>
                </div>
                <div class="test"><a>Started:</a><a class="value">100</a></div>
                <div class="test">
                  <a>Requests(Total):</a><a class="value">100</a>
                </div>
                <Sparkline :name="name" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { StatusIndicator } from 'vue-status-indicator'
import Sparkline from './Sparkline'

export default {
  name: 'Traefik',
  components: {
    StatusIndicator,
    Sparkline
  },
  data: () => ({
    db: 'CONNECTED',
    status: '',
    name: 'traefik'
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
