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
  d="M19,6.5H13V4h4.62a1,1,0,0,0,0-2H6.38a1,1,0,1,0,0,2H11V6.5H5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9.5A3,3,0,0,0,19,6.5ZM11,20H5a1,1,0,0,1-1-1V15.25h7a.5.5,0,0,0,0,.13v4.5A.53.53,0,0,0,11,20Zm9-1a1,1,0,0,1-1,1H13a.53.53,0,0,0,0-.12v-4.5a.5.5,0,0,0,0-.13h7Zm0-5.75H4V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
  />
</svg>
