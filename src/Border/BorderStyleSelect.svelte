<script lang="ts">
  const styleOptions: { value: string; display: string }[] = [
    { value: 'border-solid', display: 'Solid' },
    { value: 'border-dashed', display: 'Dashed' },
    { value: 'border-dotted', display: 'Dotted' },
    { value: 'border-double', display: 'Double' },
    { value: 'border-none', display: 'None' },
  ];
  export let value: string;
</script>

<select bind:value>
  {#each styleOptions as option}
    <option value={option.value}>{option.display}</option>
  {/each}
</select>
