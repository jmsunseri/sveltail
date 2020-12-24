<script lang="ts">
  import ColorMenu from '../Color/ColorMenu.svelte';
  export let prefix: string;
  export let value: string;
</script>

<div class="flex flex-col">
  <ColorMenu {prefix} bind:value />
  <button
    on:click={() => {
      value = `${prefix}-transparent`;
    }}
    class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm text-black`}>
    Transparent
  </button>
  <button
    on:click={() => {
      value = `${prefix}-current`;
    }}
    class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm text-black`}>
    Current
  </button>
</div>
