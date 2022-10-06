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
  d="M9,9a1,1,0,1,0,1,1A1,1,0,0,0,9,9Zm6,4a5,5,0,0,0-4.37,2.57A1,1,0,0,0,11,16.93a1,1,0,0,0,.49.13,1,1,0,0,0,.87-.51A3,3,0,0,1,15,15a1,1,0,0,0,0-2Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
  />
</svg>
