<script lang="ts">
  export let checked = false;
</script>

<div
  on:click={() => (checked = !checked)}
  class={`w-12 h-6 rounded-full border-dashed border-2 border-gray-300 cursor-pointer flex flex-row items-center ${checked ? 'bg-blue-300  justify-end' : 'bg-gray-200 justify-start'}`}>
  <input
    type="checkbox"
    {checked}
    class="appearance-none h-4 w-4 bg-white rounded-full mx-1 focus:outline-none" />
</div>
