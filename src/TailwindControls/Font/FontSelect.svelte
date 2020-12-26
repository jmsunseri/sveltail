<script lang="ts">
  import { FontStyles } from './FontStyles';
  import ColorMenu from '../Color/ColorMenu.svelte';
  import FontSizeSelect from './FontSizeSelect.svelte';
  import FontWeightSelect from './FontWeightSelect.svelte';
  import FontFamilySelect from './FontFamilySelect.svelte';
  import FontItalicSelect from './FontItalicSelect.svelte';
  import ColorsSelects from '../Color/ColorsSelects.svelte';

  export let value: FontStyles = new FontStyles();
</script>

<div class="flex flex-col gap-1">
  <FontWeightSelect bind:value={value.weight} />
  <FontSizeSelect bind:value={value.size} />
  <FontFamilySelect bind:value={value.family} />
  <FontItalicSelect bind:value={value.italics} />
  <ColorsSelects bind:value={value.color} prefix="text" blockGradient />
</div>
