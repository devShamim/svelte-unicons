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
  d="M19,4H9A1,1,0,0,0,8,5V7H3A1,1,0,0,0,3,9H8v4a1,1,0,0,0,2,0V12h4v7a1,1,0,0,0,1,1h2a3,3,0,0,0,3-3V11.82A3,3,0,0,0,22,9V7A3,3,0,0,0,19,4ZM18,17a1,1,0,0,1-1,1H16V12h2Zm2-8a1,1,0,0,1-1,1H10V6h6V7a1,1,0,0,0,2,0V6h1a1,1,0,0,1,1,1Z"
  />
</svg>
