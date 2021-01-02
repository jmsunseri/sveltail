<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ColorSwatch } from 'tabler-icons-svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../../Components/Breadcrumb/Breadcrumb';
  import { selectedStyle, selectStyles } from '../../store';
  import StyleMenuButton from '../StyleMenuButton.svelte';
  import SelectButtonStyler from './SelectButtonStyler.svelte';
  import SelectMenuItemStyler from './SelectMenuItemStyler.svelte';
  import SelectMenuStyler from './SelectMenuStyler.svelte';

  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };

  $: {
    $selectedStyle = $selectStyles;
  }
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Button"
    on:click={() => navigate('Button', SelectButtonStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Menu"
    on:click={() => navigate('Menu', SelectMenuStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Menu Item"
    on:click={() => navigate('Menu Item', SelectMenuItemStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
</div>
