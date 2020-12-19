<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let ids: number[] = [];

  export const onItemClick = (id: number) => {
    const selectedIndex = ids.indexOf(id);
    let event = {
      above: ids[selectedIndex - 1],
      below: ids[selectedIndex + 1],
      id,
    };
    dispatch('clicked', event);
  };

  export const registerId = (id: number) => {
    ids.push(id);
    ids = ids.sort((a: number, b: number) => a - b);
  };
</script>

<div class="flex flex-col m-2">
  <slot />
</div>
