<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../Components/Breadcrumb/Breadcrumb';
  import GlobalStyler from './GlobalStyler.svelte';
  import TextFieldStyler from './TextFieldStyler.svelte';
  import StyleMenuButton from '../StyleMenuButton.svelte';
  import ButtonMenu from './Button/ButtonMenu.svelte';
  import HeaderStyler from './HeaderStyler.svelte';
  import TableMenu from './Table/TableMenu.svelte';
  import CheckboxStyler from './CheckboxStyler.svelte';
  import CardMenu from './Card/CardMenu.svelte';
  import SelectMenu from './Select/SelectMenu.svelte';

  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Global"
    on:click={() => navigate('Global', GlobalStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton text="Table" on:click={() => navigate('Table', TableMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Header"
    on:click={() => navigate('Header', HeaderStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Button"
    on:click={() => navigate('Button', ButtonMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Text Field"
    on:click={() => navigate('Text Field', TextFieldStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Checkbox"
    on:click={() => navigate('Checkbox', CheckboxStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Select"
    on:click={() => navigate('Select', SelectMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton text="Card" on:click={() => navigate('Card', CardMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
</div>
