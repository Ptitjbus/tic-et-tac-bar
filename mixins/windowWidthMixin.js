export default {
  data() {
    return {
      windowWidth: ''
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 639
    },
    isTablet() {
      return !this.isMobile && this.windowWidth <= 1025
    },
    isDesktop() {
      return !this.isMobile && !this.isTablet && this.windowWidth <= 1215
    },
    isWideScreen() {
      return this.windowWidth > 1215 && !this.isFullhd
    },
    isFullhd() {
      return this.windowWidth > 1407
    },
    isTouch() {
      return this.isMobile || this.isTablet
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
}