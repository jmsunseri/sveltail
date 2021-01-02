<script lang="ts">
  import Page from './Components/Page/Page.svelte';
  import BreadcrumbContainer from './Components/Breadcrumb/BreadcrumbContainer.svelte';
  import Home from './StyleScreens/Home.svelte';
  import Markup from './Markup.svelte';
  import { BrandGithub, BrandTwitter } from 'tabler-icons-svelte';
</script>

<!--  -->
<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  @tailwind forms;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<main class="flex flex-col items-center m-0 h-screen text-gray-500">
  <div
    class="md:text-3xl sm:text-2xl w-full px-4 bg-gray-100 border-b-2 border-dashed shadow py-2 flex">
    <div class="container mx-auto flex items-center gap-2">
      <div class="flex-1 flex gap-1">
        SvelTail
        <span class="hidden md:block ">- TailwindCSS Styling Lab</span>
      </div>
      <div class="hover:text-blue-300">
        <a alt="GitHub" href="https://github.com/jmsunseri/sveltail">
          <BrandGithub size={28} />
        </a>
      </div>
      <div class="hover:text-blue-300">
        <a alt="Twitter" href="https://twitter.com/sveltail">
          <BrandTwitter size={28} />
        </a>
      </div>
      <a href="https://www.buymeacoffee.com/jmsunseri">
        <img
          class="h-7"
          alt="buy me a coffee button"
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jmsunseri&button_colour=6b7280&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=FFDD00" />
      </a>
    </div>
  </div>
  <div
    class="container mx-auto h-full grid grid-cols-1 lg:grid-cols-3 lg:gap-1">
    <div class="flex flex-col lg:overflow-auto py-2 lg:px-0 px-2">
      <BreadcrumbContainer component={Home} text="Home" />
    </div>
    <div class="col-span-2 pl-2 lg:pt-2 lg:pr-0  pr-2 ">
      <Page />
    </div>
  </div>
  <div class="container mx-auto fixed bottom-0">
    <Markup />
  </div>
</main>
