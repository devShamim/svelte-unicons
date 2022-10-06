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
  d="M21,20H20V3a1,1,0,0,0-1-1H15.5a1,1,0,0,0-.86.5L4.43,20H3a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2H6.74l3.5-6H18v6H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-3-8H11.41l4.66-8H18Z"
  />
</svg>
