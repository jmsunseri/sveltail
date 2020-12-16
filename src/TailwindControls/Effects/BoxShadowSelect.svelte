<script lang="ts">
  import Select from '@comp/Select/Select.svelte';
  import SelectOption from '@comp/Select/SelectOption.svelte';

  export let value: string;

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

  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Box Shadow"
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2', 'h-72', 'overflow-auto']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each shadowOptions as option}
    <SelectOption value={option} {select}>
      <div class={`m-2 p-2 border-solid border-2 border-black ${option}`}>
        {option}
      </div>
    </SelectOption>
  {/each}
</Select>
