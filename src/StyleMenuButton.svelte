<script lang="ts">
  import IconButton from './Components/Button/IconButton.svelte';

  export let text: string;
</script>

<IconButton
  on:click
  styles={['border-2', 'rounded-lg', 'border-dashed', 'border-gray-300', 'm-2', 'p-2', 'flex-col', 'flex', 'items-center', 'w-28']}>
  <div class="h-10 w-10 text-blue-300">
    <slot />
  </div>
  {text}
</IconButton>
