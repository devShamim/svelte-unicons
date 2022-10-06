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
  d="M14.69,6.63h-7l2.92-2.92a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L4.61,6.92a1,1,0,0,0-.22.33,1,1,0,0,0,0,.76,1.19,1.19,0,0,0,.22.33L9.24,13a1,1,0,0,0,.7.3,1,1,0,0,0,.71-1.71L7.73,8.63h7a3,3,0,0,1,3,3V21a1,1,0,0,0,2,0V11.63A5,5,0,0,0,14.69,6.63Z"
  />
</svg>
