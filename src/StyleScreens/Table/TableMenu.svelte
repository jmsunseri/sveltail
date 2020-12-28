<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../../Components/Breadcrumb/Breadcrumb';
  import StyleMenuButton from '../../StyleMenuButton.svelte';
  import TableContainerStyler from './TableContainerStyler.svelte';
  import TableHeaderStyler from './TableHeaderStyler.svelte';
  import TableRowStyler from './TableRowStyler.svelte';

  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Container"
    on:click={() => navigate('Container', TableContainerStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Header"
    on:click={() => navigate('Header', TableHeaderStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton text="Row" on:click={() => navigate('Row', TableRowStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
</div>
