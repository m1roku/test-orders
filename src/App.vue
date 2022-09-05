<template>
  <div id="app" class="wrapper">
    <AppHeader></AppHeader>
    <main class="main">
      <div class="container main__container">
        <aside class="aside">
          <AppFilters />
        </aside>
        <section class="main__content">
          <div class="main__content-wrapper">
            <AppSorting class="main__sorting" />
            <PageSwitcher class="main__page-switcher" />
          </div>
          <div class="main__view">
            <router-view/>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFilters from '@/components/AppFilters.vue';
import AppSorting from '@/components/AppSorting.vue';
import PageSwitcher from '@/components/PageSwitcher.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    AppHeader, AppFilters, AppSorting, PageSwitcher,
  },
  methods: {
    ...mapActions(['getOrders']),
  },
  mounted() {
    this.getOrders();
  },
};
</script>
