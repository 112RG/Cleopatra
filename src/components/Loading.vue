<template>
  <div class="vld-parent">
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  mounted() {
    this.$root.$on('startLoading', () => {
      if (this.isLoading === false) {
        this.isLoading = true
      }
    })
    this.$root.$on('stopLoading', () => {
      this.isLoading = false
    })
  }
}
</script>
