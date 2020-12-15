<script lang="ts">
  const shadowOptions: string[] = [
    '',
    'shadow-sm',
    'shadow',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-inner',
    'shadow-none',
  ];
  export let value: string;
</script>

<select bind:value>
  {#each shadowOptions as option}
    <option value={option}>{option}</option>
  {/each}
</select>
