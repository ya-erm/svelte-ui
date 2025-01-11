<script lang="ts">
  export let type: 'button' | 'submit' = 'button';
  export let disabled: boolean = false;
  export let testId: string | null = 'Button';

  export let onClick: ((e: MouseEvent) => void) | null = null;
</script>

<button on:click|stopPropagation={onClick} data-testId={testId} {disabled} {type} {...$$restProps}>
  <slot />
</button>

<style>
  button {
    min-width: 0;
    font-size: 1rem;
    font-weight: normal;
    display: inline-flex;
    cursor: pointer;
    outline: none;
    border: none;

    color: inherit;
    background: none;

    border-radius: 0.5rem;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  button:focus-visible {
    outline: 2px solid var(--active-color);
  }
</style>
