<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ColorSwatch } from 'tabler-icons-svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../../Components/Breadcrumb/Breadcrumb';
  import { selectedStyle, cardStyles } from '../../store';
  import StyleMenuButton from '../StyleMenuButton.svelte';
  import CardBodyStyler from './CardBodyStyler.svelte';
  import CardContainerStyler from './CardContainerStyler.svelte';
  import CardFooterStyler from './CardFooterStyler.svelte';
  import CardHeaderStyler from './CardHeaderStyler.svelte';

  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };

  $: {
    $selectedStyle = $cardStyles;
  }
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Container"
    on:click={() => navigate('Container', CardContainerStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Header"
    on:click={() => navigate('Header', CardHeaderStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Body"
    on:click={() => navigate('Body', CardBodyStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Footer"
    on:click={() => navigate('Footer', CardFooterStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
</div>
