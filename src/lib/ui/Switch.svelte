<script lang="ts">
  export let checked: boolean = false;
  export let onChange: ((checked: boolean) => void) | null = null;

  const handleChange = (e: Event) => {
    checked = (e.target as HTMLInputElement).checked;
    onChange?.(checked);
  };
</script>

<label class="switch" class:active={checked}>
  <input type="checkbox" {checked} on:change={handleChange} />
  <div class="indicator"></div>
</label>

<style>
  .switch {
    width: 42px;
    height: 28px;
    background-color: var(--border-color);
    border-radius: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 2px;
  }
  .switch.active {
    background-color: var(--active-color);
  }
  .indicator {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--white-color);
    transition: all 0.25s ease-in-out;
  }
  input {
    display: none;
  }
  input:checked + .indicator {
    transform: translate(14px);
  }
</style>
