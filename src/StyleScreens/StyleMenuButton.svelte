<script lang="ts">
  import IconButton from '../Components/Button/IconButton.svelte';

  export let text: string;
</script>

<IconButton
  on:click
  styles={['border-2', 'rounded-lg', 'border-dashed', 'focus:outline-none', 'border-gray-300', 'p-2', 'flex-col', 'flex', 'items-center']}>
  <div class="h-10 w-10 text-blue-300">
    <slot />
  </div>
  {text}
</IconButton>
