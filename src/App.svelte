<script lang="ts">
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
  import DiGithubAlt from 'svelte-icons/di/DiGithubAlt.svelte';
  import Viewer from './Viewer.svelte';
  import BreadcrumbContainer from './Components/Breadcrumb/BreadcrumbContainer.svelte';
  import Home from './StyleScreens/Home.svelte';

  enum VisibleComponent {
    menu,
    header,
    btn,
    altBtn,
    notImplemented,
    global,
    text,
    select,
    checkbox,
    table,
    card,
  }

  let visible: VisibleComponent = VisibleComponent.menu;

  const change = (v: VisibleComponent) => {
    visible = v;
  };

  const cardClosed = () => {
    change(VisibleComponent.menu);
  };
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
    <div class="container mx-auto flex items-center gap-4">
      <div class="flex-1">SvelTail - TailwindCSS Styling Lab</div>
      <div class="h-9 w-9 hover:text-blue-300">
        <a alt="GitHub" href="https://github.com/jmsunseri/sveltail">
          <DiGithubAlt />
        </a>
      </div>
      <div class="h-7 w-7 hover:text-blue-300">
        <a alt="Twitter" href="https://twitter.com/sveltail">
          <FaTwitter />
        </a>
      </div>
    </div>
  </div>
  <div
    class="container mx-auto h-full grid grid-cols-1 lg:grid-cols-3 lg:gap-1">
    <div class="flex flex-col lg:overflow-auto py-2 lg:px-0 px-2">
      <BreadcrumbContainer component={Home} text="Home" />
    </div>
    <div class="col-span-2 pl-2 lg:pt-2 lg:pr-0  pr-2 ">
      <Viewer />
    </div>
  </div>
</main>
