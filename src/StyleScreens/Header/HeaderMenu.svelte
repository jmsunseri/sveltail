<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ColorSwatch } from 'tabler-icons-svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../../Components/Breadcrumb/Breadcrumb';
  import { selectedStyle, headerStyles } from '../../store';
  import StyleMenuButton from '../StyleMenuButton.svelte';
  import HeaderContainerStyler from './HeaderContainerStyler.svelte';
  import HeaderBrandStyler from './HeaderBrandStyler.svelte';
  import HeaderMenuStyler from './HeaderMenuStyler.svelte';
  import HeaderIconStyler from './HeaderIconStyler.svelte';

  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };

  $: {
    $selectedStyle = $headerStyles;
  }
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Container"
    on:click={() => navigate('Container', HeaderContainerStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Icon"
    on:click={() => navigate('Icon', HeaderIconStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Brand"
    on:click={() => navigate('Brand', HeaderBrandStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Menu"
    on:click={() => navigate('Menu', HeaderMenuStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
</div>
