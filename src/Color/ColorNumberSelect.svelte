<script lang="ts">
  import type { ColorNumber } from './color';
  export let value: ColorNumber = '400';
  export let buttonStyles: string[];
  export let menuStyles: string[];

  const numbers: ColorNumber[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ];
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select bind:value on:change>
  <option />
  {#each numbers as n}
    <option value={n}>{n}</option>
  {/each}
</select>
