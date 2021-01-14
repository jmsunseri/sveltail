<script lang="ts">
  import DividerWidthSelect from './DividerWidthSelect.svelte';
  import { DividerStyles } from './DividerStyles';
  import DividerStyleSelect from './DividerStyleSelect.svelte';
  import ColorsSelects from '../Color/ColorsSelects.svelte';

  export let value: DividerStyles = new DividerStyles();
</script>

<div class="flex flex-col gap-1">
  <DividerStyleSelect bind:value={value.style} />
  <DividerWidthSelect bind:value={value.width} />
  <ColorsSelects prefix="divide" bind:value={value.color} />
</div>
