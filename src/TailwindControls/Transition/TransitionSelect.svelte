<script lang="ts">
  import { TransitionStyles } from './TransitionStyles';
  import TransitionPropertySelect from './TransitionPropertySelect.svelte';
  import TransitionDurationSelect from './TransitionDurationSelect.svelte';
  import TransitionDelaySelect from './TransitionDelaySelect.svelte';
  import TransitionTimingSelect from './TransitionTimingSelect.svelte';

  export let value: TransitionStyles = new TransitionStyles();
</script>

<div class="flex flex-col gap-1">
  <TransitionPropertySelect bind:value={value.transition} />
  <TransitionDurationSelect bind:value={value.duration} />
  <TransitionDelaySelect bind:value={value.delay} />
  <TransitionTimingSelect bind:value={value.timing} />
</div>
