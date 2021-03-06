export const toggle = {
  data() {
    return {
      isShowing: false,
      modalName: ''
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
    open(name) {
      document.body.classList.add('open-modal');
      this.modalName = name;
    },
    close(name) {
      document.body.classList.remove('open-modal');
      this.modalName = '';
    }
  }
}