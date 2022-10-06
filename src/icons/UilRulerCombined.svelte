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
  d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V10H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,8H18V7a1,1,0,0,0-2,0V8H14V7a1,1,0,0,0-2,0V8H10V7A1,1,0,0,0,8,7V8H7a1,1,0,0,0,0,2H8v2H7a1,1,0,0,0,0,2H8v2H7a1,1,0,0,0,0,2H8v2H4V4H20Z"
  />
</svg>
