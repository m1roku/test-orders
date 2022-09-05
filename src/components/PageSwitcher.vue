<template>
  <div class="page-switcher">
    <router-link
      class="page-switcher__button"
      :to="{name: 'ListView'}"
      active-class="page-switcher__button--active"
    >
      List view
      <ListIcon />
    </router-link>
    <router-link
      class="page-switcher__button"
      :to="{name: 'TableView'}"
      active-class="page-switcher__button--active"
    >
      Table view
      <TableIcon />
    </router-link>
  </div>
</template>

<script>
import ListIcon from '@/components/icons/List.vue';
import TableIcon from '@/components/icons/Table.vue';

export default {
  name: 'PageSwitcher',
  components: { ListIcon, TableIcon },
};
</script>
