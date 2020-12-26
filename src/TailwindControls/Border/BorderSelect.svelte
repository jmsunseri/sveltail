<script lang="ts">
  import BorderStyleSelect from './BorderStyleSelect.svelte';
  import BorderWidthSelect from './BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from './BorderRadius/BorderRadiusSelect.svelte';
  import { BorderStyles } from './BorderStyles';
  import ColorsSelects from '../Color/ColorsSelects.svelte';

  export let value: BorderStyles = new BorderStyles();
</script>

<div class="flex flex-col gap-1">
  <BorderStyleSelect bind:value={value.style} />
  <BorderWidthSelect bind:value={value.width} />
  <BorderRadiusSelect bind:value={value.radius} />
  <ColorsSelects bind:value={value.color} prefix="border" blockGradient />
</div>
