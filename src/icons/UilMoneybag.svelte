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
  d="M12,11a3,3,0,1,0,3,3A3,3,0,0,0,12,11Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,15Zm7-9H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10ZM4,9A1,1,0,0,1,5,8H6a2,2,0,0,1-2,2ZM5,20a1,1,0,0,1-1-1V18a2,2,0,0,1,2,2Zm15-1a1,1,0,0,1-1,1H18a2,2,0,0,1,2-2Zm0-3a4,4,0,0,0-4,4H8a4,4,0,0,0-4-4V12A4,4,0,0,0,8,8h8a4,4,0,0,0,4,4Zm0-6a2,2,0,0,1-2-2h1a1,1,0,0,1,1,1Z"
  />
</svg>
