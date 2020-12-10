<script lang="ts">
  const shadowOptions: { value: string; display: string }[] = [
    { value: 'shadow-sm', display: 'Small Shadow' },
    { value: 'shadow', display: 'Shadow' },
    { value: 'shadow-md', display: 'Medium Shadow' },
    { value: 'shadow-lg', display: 'Large Shadow' },
    { value: 'shadow-xl', display: 'Extra Large Shadow' },
    { value: 'shadow-2xl', display: 'Two Extra Large Shadow' },
    { value: 'shadow-inner', display: 'Inner Shadow' },
    { value: 'shadow-none', display: 'None' },
  ];
  export let value: string;
</script>

<select bind:value>
  {#each shadowOptions as option}
    <option value={option.value}>{option.display}</option>
  {/each}
</select>
