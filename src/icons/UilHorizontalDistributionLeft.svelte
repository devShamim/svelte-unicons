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
  d="M11,4H6V3A1,1,0,0,0,4,3V21a1,1,0,0,0,2,0V20h5a1,1,0,0,0,1-1V5A1,1,0,0,0,11,4ZM10,18H6V6h4ZM19,5H16V3a1,1,0,0,0-2,0V21a1,1,0,0,0,2,0V19h3a1,1,0,0,0,1-1V6A1,1,0,0,0,19,5ZM18,17H16V7h2Z"
  />
</svg>
