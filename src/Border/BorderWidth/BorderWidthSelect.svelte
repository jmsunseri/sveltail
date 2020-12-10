<script lang="ts">
  import { borderWidthOptions } from './borderWidth';

  export let value: string;
</script>

<select bind:value>
  {#each borderWidthOptions as option}
    <option value={option.value}>{option.display}</option>
  {/each}
</select>
