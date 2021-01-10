<script lang="ts">
  import ColorsSelects from '../Color/ColorsSelects.svelte';
  import OpacitySelect from '../Effects/OpacitySelect.svelte';
  import { PlaceholderStyles } from './PlaceholderStyles';

  export let value: PlaceholderStyles = new PlaceholderStyles();

  let opacity: string = value?.opacity?.substring(5);

  $: {
    value.opacity = opacity ? `placeholder-${opacity}` : '';
  }
</script>

<div class="flex flex-col gap-1">
  <ColorsSelects
    bind:value={value.color}
    prefix="placeholder"
    blockGradient
    variants={[]} />
  <OpacitySelect bind:value={opacity} />
</div>
