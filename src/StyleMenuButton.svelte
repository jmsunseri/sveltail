<script lang="ts">
  import IconButton from './Components/Button/IconButton.svelte';

  export let text: string;
</script>

<IconButton
  on:click
  styles={['border', 'rounded-lg', 'border-none', 'shadow-lg', 'm-2', 'p-2', 'flex-col', 'flex', 'items-center', 'w-28']}>
  <div class="h-10 w-10">
    <slot />
  </div>
  {text}
</IconButton>
