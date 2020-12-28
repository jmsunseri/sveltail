<script lang="ts">
  export let header: string;
</script>

<div class="flex flex-col gap-1">
  <div class="text-2xl text-color flex flex-row justify-between items-center">
    <h2>{header}</h2>
  </div>
  <slot />
</div>
