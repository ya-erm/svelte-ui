<script lang="ts">
  export let theme: 'light' | 'dark' = 'light';
</script>

<svelte:head>
  <meta name="theme-color" content={theme === 'dark' ? '#121212' : 'white'} />
</svelte:head>

<main class="themed" data-theme={theme}>
  <slot />
</main>

<style>
  main {
    color: var(--primary-text-color);
    background-color: var(--background-color);
  }
</style>
