<script lang="ts">
  import Button from '$lib/ui/Button.svelte';
  import IntersectionObserver from '$lib/ui/IntersectionObserver.svelte';
  import { unexpectedCase } from '$lib/utils/unexpectedCase';

  export let limit: number;
  export let step: number;
  export let total: number;

  let showMoreContainer: HTMLDivElement;

  const showMore = () => {
    limit = Math.min(total, limit + step);
  };

  // TODO
  export const translate = (key: 'common.show_more'): string => {
    switch (key) {
      case 'common.show_more':
        return 'Show more';
      default:
        console.error(unexpectedCase(key));
        return '';
    }
  };
</script>

<IntersectionObserver element={showMoreContainer} on:intersect={showMore}>
  <slot />
  <div class="show-more">
    <div bind:this={showMoreContainer} class="show-more-before"></div>
    {#if limit < total}
      <div class="flex-col px-1 pb-1">
        <Button color="white" onClick={showMore}>
          {translate('common.show_more')}
        </Button>
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .show-more {
    position: relative;
  }
  .show-more-before {
    position: absolute;
    top: -200px;
  }
</style>
