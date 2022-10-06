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
  d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM16.09,4l-4,4H7.91l4-4ZM4,5A1,1,0,0,1,5,4H9.09l-4,4H4ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H14.91l4-4H19a1,1,0,0,1,1,1Z"
  />
</svg>
