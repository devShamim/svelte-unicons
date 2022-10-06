<script>
  export let size = "24";
  export let strokeWidth = 2;
  let customClass = "";
  export { customClass as class };

  if (size !== "100%") {
    size = size.slice(-1) === 'x'
          ? size.slice(0, size.length -1) + 'em'
          : parseInt(size) + 'px';
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="feather {customClass}">
  <path
  d="M8.5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.6,17,8.5,17z M15.5,7c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S14.4,7,15.5,7z M8.5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.6,10,8.5,10z M15.5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.6,10,15.5,10z M15.5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.6,17,15.5,17z M8.5,3c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.6,3,8.5,3z"
  />
</svg>
