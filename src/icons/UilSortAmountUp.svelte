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
  d="M5.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2,2A1,1,0,0,0,3.71,9.71L4,9.41V17a1,1,0,0,0,2,0V9.41l.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM11,8H21a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm10,8H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
  />
</svg>
