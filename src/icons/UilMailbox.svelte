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
  d="M8,12h2a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Zm9-6H12V4h1a1,1,0,0,0,0-2H11a1,1,0,0,0-1,1V6H7a4,4,0,0,0-4,4v6a1,1,0,0,0,1,1h6v4a1,1,0,0,0,2,0V17h8a1,1,0,0,0,1-1V10A4,4,0,0,0,17,6Zm-4,4v5H5V10A2,2,0,0,1,7,8h6.56A3.91,3.91,0,0,0,13,10Zm6,5H15V10a2,2,0,0,1,4,0Z"
  />
</svg>
