<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../../Components/Breadcrumb/Breadcrumb';
  import StyleMenuButton from '../../StyleMenuButton.svelte';
  import CardBodyStyler from './CardBodyStyler.svelte';
  import CardContainerStyler from './CardContainerStyler.svelte';
  import CardFooterStyler from './CardFooterStyler.svelte';
  import CardHeaderStyler from './CardHeaderStyler.svelte';

  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Container"
    on:click={() => navigate('Container', CardContainerStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Header"
    on:click={() => navigate('Header', CardHeaderStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Body"
    on:click={() => navigate('Body', CardBodyStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Footer"
    on:click={() => navigate('Footer', CardFooterStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
</div>
