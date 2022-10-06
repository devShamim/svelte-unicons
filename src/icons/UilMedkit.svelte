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
  d="M10,17h1v1a1,1,0,0,0,2,0V17h1a1,1,0,0,0,0-2H13V14a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2ZM19,6H17V5a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"
  />
</svg>
