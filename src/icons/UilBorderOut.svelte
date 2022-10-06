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
  d="M12,9a1,1,0,1,0-1-1A1,1,0,0,0,12,9Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,12,13Zm4,0a1,1,0,1,0-1-1A1,1,0,0,0,16,13Zm-4,4a1,1,0,1,0-1-1A1,1,0,0,0,12,17ZM20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19ZM8,13a1,1,0,1,0-1-1A1,1,0,0,0,8,13Z"
  />
</svg>
