<script lang="ts">
  import ColorsSelects from '../Color/ColorsSelects.svelte';
  import { PlaceholderStyles } from './PlaceholderStyles';

  export let value: PlaceholderStyles = new PlaceholderStyles();
</script>

<div class="flex flex-col gap-1">
  <ColorsSelects
    bind:value={value.color}
    prefix="placeholder"
    blockGradient
    variants={[]} />
</div>
