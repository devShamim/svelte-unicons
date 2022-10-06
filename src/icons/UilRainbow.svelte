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
  d="M5,12a1,1,0,0,0,0,2,5,5,0,0,1,5,5,1,1,0,0,0,2,0A7,7,0,0,0,5,12ZM5,4A1,1,0,0,0,5,6,13,13,0,0,1,18,19a1,1,0,0,0,2,0A15,15,0,0,0,5,4ZM5,8a1,1,0,0,0,0,2,9,9,0,0,1,9,9,1,1,0,0,0,2,0A11,11,0,0,0,5,8Z"
  />
</svg>
