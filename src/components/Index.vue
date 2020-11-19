<template>
  <v-container>
    <Loading />
    <Traefik />
    <v-row>
      <template v-for="container in containers">
        <Container :key="container" :name="container" />
      </template>
    </v-row>
  </v-container>
</template>
<script>
import Loading from './Loading'
import Container from './Container'
import Traefik from './Traefik'
import { containerStore } from '../containerStore.js'
export default {
  name: 'Index',
  components: {
    Loading,
    Container,
    Traefik
  },
  data: () => ({
    containers: containerStore.state.containers,
    interval: null
  }),
  async created() {
    await this.updateContainer()
    this.interval = setInterval(await this.updateContainer, 5000)
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    async updateContainer() {
      const response = await fetch(
        'http://localhost:8086/query?db=telegraf&q=SELECT%20last(%22container_id%22)%20FROM%20%22docker_container_status%22%20WHERE%20(%22container_image%22%20=%20%27ra_ra%27)%20AND%20time%20%3E=%20now()%20-%2015s%20GROUP%20BY%20%22container_name%22'
      )
      const data = await response.json()
      const newContainers = data.results[0].series
      const updateContainers = []

      for (const container of newContainers) {
        updateContainers.push(container.tags.container_name)
        containerStore.addContainer(
          container.tags.container_name,
          'a',
          'a',
          'a',
          'a'
        )
      }
      let toRemove = containerStore.state.containers.filter(
        (x) => !updateContainers.includes(x.name)
      )
      for (const container of toRemove) {
        containerStore.removeContainer(container.name)
      }
      this.containers = updateContainers
    }
  }
}
</script>
