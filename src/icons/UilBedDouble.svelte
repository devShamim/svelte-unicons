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
  d="M20,3.5H4a3,3,0,0,0-3,3v13a1,1,0,0,0,1,1H6a1,1,0,0,0,.83-.45L8.54,17.5h6.92l1.71,2.55a1,1,0,0,0,.83.45h4a1,1,0,0,0,1-1V6.5A3,3,0,0,0,20,3.5Zm1,15H18.54L16.83,16A1,1,0,0,0,16,15.5H8a1,1,0,0,0-.83.45L5.46,18.5H3v-5H21Zm-14-7v-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1Zm6,0v-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1Zm8,0H19v-1a3,3,0,0,0-3-3H14a3,3,0,0,0-2,.78,3,3,0,0,0-2-.78H8a3,3,0,0,0-3,3v1H3v-5a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1Z"
  />
</svg>
