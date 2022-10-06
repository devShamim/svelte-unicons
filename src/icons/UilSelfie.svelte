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
  d="M16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V18H17Zm-5-5a3,3,0,0,1,2.82,2H9.18A3,3,0,0,1,12,14Zm-1-3a1,1,0,1,1,1,1A1,1,0,0,1,11,11Zm6,5h-.1a5,5,0,0,0-2.42-3.32A3,3,0,0,0,15,11a3,3,0,0,0-6,0,3,3,0,0,0,.52,1.68A5,5,0,0,0,7.1,16H7V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1ZM12,5a1,1,0,1,0,1,1A1,1,0,0,0,12,5Z"
  />
</svg>
