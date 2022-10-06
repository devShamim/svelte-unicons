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
  d="M10.5,9.5h-1v-1a1,1,0,0,0-2,0v1h-1a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm12.43,2.15-.06-.11a.61.61,0,0,0-.07-.14L20.4,8.2A3,3,0,0,0,18,7H16V6a3,3,0,0,0-3-3H4A3,3,0,0,0,1,6V17a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V12A1,1,0,0,0,22.93,11.65ZM6,19a1,1,0,1,1,1-1A1,1,0,0,1,6,19Zm8-3H8.22a3,3,0,0,0-4.44,0H3V6A1,1,0,0,1,4,5h9a1,1,0,0,1,1,1Zm2-7h2a1,1,0,0,1,.8.4L20,11H16Zm2,10a1,1,0,1,1,1-1A1,1,0,0,1,18,19Zm3-3h-.78A3,3,0,0,0,16,15.78V13h5Z"
  />
</svg>
