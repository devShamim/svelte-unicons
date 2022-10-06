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
  d="M10,11H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2ZM14,5h7a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2ZM10,7H3A1,1,0,0,0,3,9h7a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2ZM10,3H7A1,1,0,0,0,7,5h3a1,1,0,0,0,0-2ZM21,7H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm-4,8H14a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm4-4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z"
  />
</svg>
