<template>
  <div class="crypto-menu">
    <nav class="crypto-menu__navbar">
      <ul class="crypto-menu__ul">
        <li v-for="(value, key) in cryptoMenu" :key="key" class="crypto-menu__item"><router-link :to="value.link">{{ key }}</router-link></li>
      </ul>
    </nav>
  </div><!-- end top menu -->
</template>

<script>
  export default {
    name: 'TheCryptoMenu',
    data () {
      return {
        cryptoMenu: {
          Overview: {
            link: 'overview'
          },
          Social: {
            link: 'social'
          },
          Forum: {
            link: 'forum'
          },
          Exchanges: {
            link: 'exchanges'
          },
          Assets: {
            link: 'assets'
          },
          Predict: {
            link: 'predict'
          },
          Alerts: {
            link: 'alerts'
          }
        }
      }
    }
  };
</script>

<style scoped>
  .crypto-menu {
    color: var(--light-gray-color);
    font-weight: 500;
    width: 100%;
    overflow-y: auto;
  }
  .crypto-menu__ul {
    flex-wrap: nowrap;
  }
  .crypto-menu__item {
    border-bottom: 2px solid var(--light-color);
  }
  .crypto-menu__item a {
    padding: 20px 25px;
    display: block;
    margin-bottom: -2px;
    border: 2px solid transparent;
    border-radius: 7px 7px 0 0;
  }
  .crypto-menu__item a:hover,
  .crypto-menu__item a:focus,
  a.router-link-exact-active {
    color: var(--black-color);
    border: 2px solid var(--light-color);
    border-bottom: 2px solid #fff;
  }

</style>