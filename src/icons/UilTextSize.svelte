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
  d="M9,11H3a1,1,0,0,0,0,2H5v5a1,1,0,0,0,2,0V13H9a1,1,0,0,0,0-2ZM21,5H9A1,1,0,0,0,9,7h5V18a1,1,0,0,0,2,0V7h5a1,1,0,0,0,0-2Z"
  />
</svg>
