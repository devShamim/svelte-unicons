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
  d="M17,2H5A1,1,0,0,0,4,3V19a1,1,0,0,0,1,1H6v1a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V20h9a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2ZM14,18H6V4h8Zm4-1a1,1,0,0,1-1,1H16V4h1a1,1,0,0,1,1,1Z"
  />
</svg>
