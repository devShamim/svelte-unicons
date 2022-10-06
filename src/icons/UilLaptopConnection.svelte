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
  d="M21,18H14.82A3,3,0,0,0,13,16.18V13h7a1,1,0,0,0,0-2H19V5a3,3,0,0,0-3-3H8A3,3,0,0,0,5,5v6H4a1,1,0,0,0,0,2h7v3.18A3,3,0,0,0,9.18,18H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM7,11V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1v6Zm5,9a1,1,0,1,1,1-1A1,1,0,0,1,12,20Z"
  />
</svg>
