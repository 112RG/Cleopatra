<template>
  <div class="test">
    <div style="position: absolute; z-index: 10">
      <a class="value">CPU:</a>
    </div>
    <v-sparkline
      :gradient="gradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
      height="60"
    />
  </div>
</template>
<script>
export default {
  name: 'Sparkline',
  props: {
    name: {
      type: String,
      default: 'ra'
    }
  },
  data: () => ({
    db: 'CONNECTED',
    fill: false,
    gradient: ['#f72047', '#ffd200', '#1feaea'],
    gradients,
    padding: 8,
    radius: 15,
    value: [0, 0, 0],
    interval: null,
    width: 2
  }),
  async created() {
    await this.refreshData()
    this.interval = setInterval(await this.refreshData, 5000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    async refreshData() {
      const response = await fetch(
        `http://localhost:8080/query?db=telegraf&q=SELECT%20mean(%22usage_percent%22)%20FROM%20%22docker_container_cpu%22%20WHERE%20(%22container_name%22%20=%20%27${this.$props.name}%27)%20AND%20time%20%3E=%20now()%20-%2015m%20GROUP%20BY%20time(500ms),%20%22container_name%22%20fill(none)`
      )
      const data = await response.json()
      const values = data.results[0].series[0].values
      const _values = []
      for (const value in values) {
        if (values[value][1] != null) {
          _values.push(values[value][1])
        }
      }
      this.value = _values
    }
  }
}

const gradients = [['#f72047', '#ffd200', '#1feaea']]
</script>
