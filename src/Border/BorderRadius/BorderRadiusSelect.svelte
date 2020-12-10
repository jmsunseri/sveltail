<script lang="ts">
  import { borderRadiusOptions } from './borderRadius';

  export let value: string;
</script>

<select bind:value>
  {#each borderRadiusOptions as option}
    <option value={option.value}>{option.display}</option>
  {/each}
</select>
