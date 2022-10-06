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
  d="M12,15.5a1,1,0,1,0,1,1A1,1,0,0,0,12,15.5ZM12,2a5.54514,5.54514,0,0,0-.56165.0285A9.99347,9.99347,0,0,0,12,22a5.54514,5.54514,0,0,0,.56165-.0285A9.99347,9.99347,0,0,0,12,2Zm0,18A7.98889,7.98889,0,0,1,6.70935,6.01538,5.48381,5.48381,0,0,0,12,13a3.5,3.5,0,0,1,0,7Zm5.29065-2.01538A5.48381,5.48381,0,0,0,12,11a3.5,3.5,0,0,1,0-7,7.98889,7.98889,0,0,1,5.29065,13.98462ZM12,6.5a1,1,0,1,0,1,1A1,1,0,0,0,12,6.5Z"
  />
</svg>
