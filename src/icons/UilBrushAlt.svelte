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
  d="M12,18a1,1,0,1,0,1,1A1,1,0,0,0,12,18ZM18,1H6A1,1,0,0,0,5,2v9a3,3,0,0,0,3,3H9v2.37a4,4,0,1,0,6,0V14h1a3,3,0,0,0,3-3V2A1,1,0,0,0,18,1ZM12,21a2,2,0,0,1-1.33-3.48,1,1,0,0,0,.33-.74V14h2v2.78a1,1,0,0,0,.33.74A2,2,0,0,1,12,21Zm5-10a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V10H17Zm0-3H7V3H17Z"
  />
</svg>
