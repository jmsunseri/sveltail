<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../../Components/Breadcrumb/Breadcrumb';
  import StyleMenuButton from '../StyleMenuButton.svelte';
  import SelectButtonStyler from './SelectButtonStyler.svelte';
  import SelectMenuItemStyler from './SelectMenuItemStyler.svelte';
  import SelectMenuStyler from './SelectMenuStyler.svelte';

  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Button"
    on:click={() => navigate('Button', SelectButtonStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Menu"
    on:click={() => navigate('Menu', SelectMenuStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Menu Item"
    on:click={() => navigate('Menu Item', SelectMenuItemStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
</div>
