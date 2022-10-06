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
  d="M3,6H4v5a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V6h1a1,1,0,0,0,0-2H3A1,1,0,0,0,3,6ZM6,6H18v4H6Zm15,8H3a1,1,0,0,0,0,2H5v3a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V16h2a1,1,0,0,0,0-2Zm-4,4H7V16H17Z"
  />
</svg>
