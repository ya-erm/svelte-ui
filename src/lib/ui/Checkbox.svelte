<script lang="ts">
  export let label: string | null = null;
  export let checked: boolean;
  export let onChange: ((value: boolean) => void) | null = null;
  export let disabled: boolean = false;
  export let indeterminate: boolean = false;
</script>

<label class="red flex cursor-pointer items-center gap-0.5">
  <input
    type="checkbox"
    bind:checked
    {indeterminate}
    {disabled}
    on:change={(e) => onChange?.(e.currentTarget.checked)}
  />
  {#if !!label}
    <span>{label}</span>
  {/if}
  <slot />
</label>
