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
  d="M15,14a1,1,0,1,0,1,1A1,1,0,0,0,15,14ZM9,8a1,1,0,1,0,1,1A1,1,0,0,0,9,8Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,9,14Zm6-6a1,1,0,1,0,1,1A1,1,0,0,0,15,8Zm2-6H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3Z"
  />
</svg>
