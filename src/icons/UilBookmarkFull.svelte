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
  d="M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z"
  />
</svg>
