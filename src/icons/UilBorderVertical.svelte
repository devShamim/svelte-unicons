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
  d="M3,3A1,1,0,1,0,4,4,1,1,0,0,0,3,3ZM3,7A1,1,0,1,0,4,8,1,1,0,0,0,3,7ZM19,5a1,1,0,1,0-1-1A1,1,0,0,0,19,5ZM7,11a1,1,0,1,0,1,1A1,1,0,0,0,7,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,7,19ZM7,3A1,1,0,1,0,8,4,1,1,0,0,0,7,3ZM3,15a1,1,0,1,0,1,1A1,1,0,0,0,3,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,3,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,3,19Zm16-4a1,1,0,1,0,1,1A1,1,0,0,0,19,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,19,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,19,19ZM19,7a1,1,0,1,0,1,1A1,1,0,0,0,19,7ZM15,3a1,1,0,1,0,1,1A1,1,0,0,0,15,3ZM11,3a1,1,0,0,0-1,1V20a1,1,0,0,0,2,0V4A1,1,0,0,0,11,3Zm4,16a1,1,0,1,0,1,1A1,1,0,0,0,15,19Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,15,11Z"
  />
</svg>
