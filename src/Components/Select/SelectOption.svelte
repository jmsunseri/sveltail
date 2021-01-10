<script lang="ts">
  import { onMount, tick } from 'svelte';

  import type Select from './Select.svelte';
  import type { SelectOptionStyles } from './SelectOptionStyle';
  import type { SelectStyles } from './SelectStyle';

  let styles: string;
  export let value: any;
  export let select: Select;

  const selected = () => {
    select.onSelected(value);
  };

  onMount(async () => {
    await tick();
    return select.selectStyles.subscribe((x: SelectOptionStyles) => {
      styles = x.toStyles();
    });
  });
</script>

<div class={styles} on:click={selected}>
  <slot />
</div>
