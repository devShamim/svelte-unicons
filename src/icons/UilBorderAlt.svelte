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
  d="M11.5,18.5a1,1,0,1,0,1,1A1,1,0,0,0,11.5,18.5Zm9-15a1,1,0,0,0-1-1H3.5a1,1,0,0,0-1,1v16a1,1,0,0,0,2,0V4.5h15A1,1,0,0,0,20.5,3.5Zm-5,15a1,1,0,1,0,1,1A1,1,0,0,0,15.5,18.5Zm-8,0a1,1,0,1,0,1,1A1,1,0,0,0,7.5,18.5Zm12-12a1,1,0,1,0,1,1A1,1,0,0,0,19.5,6.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19.5,10.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19.5,14.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19.5,18.5Z"
  />
</svg>
