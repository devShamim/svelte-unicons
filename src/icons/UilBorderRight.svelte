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
  d="M4.5,7a1,1,0,1,0,1,1A1,1,0,0,0,4.5,7Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,4.5,3Zm4,16a1,1,0,1,0,1,1A1,1,0,0,0,8.5,19Zm-4,0a1,1,0,1,0,1,1A1,1,0,0,0,4.5,19Zm4-8a1,1,0,1,0,1,1A1,1,0,0,0,8.5,11Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,8.5,3Zm-4,8a1,1,0,1,0,1,1A1,1,0,0,0,4.5,11Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,4.5,15Zm12-12a1,1,0,1,0,1,1A1,1,0,0,0,16.5,3Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,16.5,11Zm-4,8a1,1,0,1,0,1,1A1,1,0,0,0,12.5,19Zm0-16a1,1,0,1,0,1,1A1,1,0,0,0,12.5,3Zm8,0a1,1,0,0,0-1,1V20a1,1,0,0,0,2,0V4A1,1,0,0,0,20.5,3Zm-4,16a1,1,0,1,0,1,1A1,1,0,0,0,16.5,19Zm-4-12a1,1,0,1,0,1,1A1,1,0,0,0,12.5,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12.5,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,12.5,11Z"
  />
</svg>
