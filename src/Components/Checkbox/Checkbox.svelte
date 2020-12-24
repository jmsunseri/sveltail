<script lang="ts">
  import { CheckboxStyles } from './CheckboxStyles';

  export let style: CheckboxStyles = new CheckboxStyles();
  export let checked: boolean = false;
</script>

<span
  class={`${style.toStyles()} cursor-pointer flex flex-row items-center justify-center`}
  on:click={() => (checked = !checked)}>
  {#if checked}&check;{/if}
</span>
