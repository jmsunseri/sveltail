<script lang="ts">
  import { ChevronsRight } from 'tabler-icons-svelte';
  import type { IBreadcrumb, IBreadcrumbEvent } from './Breadcrumb';
  import { createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let breadcrumbs: IBreadcrumb[] = [];

  const crumbClicked = (index: number) => {
    const crumb = breadcrumbs[index];
    const newCrumbs = breadcrumbs.slice(0, index + 1);
    dispatch('navigate', {
      breadcrumbs: newCrumbs,
      component: crumb.component,
      text: crumb.text,
    } as IBreadcrumbEvent);
  };
</script>

<div class="flex gap-3 items-center pb-3">
  {#each breadcrumbs as crumb, index}
    {#if index !== 0}
      <div
        in:fly={{ x: -50, duration: 250 }}
        out:fade={{ duration: 250 }}
        class="h-5 w-5 text-blue-300">
        <ChevronsRight />
      </div>
      <div
        class="underline cursor-pointer"
        in:fly={{ x: -50, duration: 250 }}
        out:fade={{ duration: 250 }}
        on:click={() => crumbClicked(index)}>
        {crumb.text}
      </div>
    {:else}
      <div
        class="underline cursor-pointer"
        on:click={() => crumbClicked(index)}>
        {crumb.text}
      </div>
    {/if}
  {/each}
</div>
