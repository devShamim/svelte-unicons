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
  d="M21,19H15a3,3,0,0,1-3-3V8a3,3,0,0,1,3-3h6a1,1,0,0,0,0-2H15a5,5,0,0,0-5,5v8a5,5,0,0,0,5,5h6a1,1,0,0,0,0-2ZM5,3A3,3,0,1,0,8,6,3,3,0,0,0,5,3ZM5,7A1,1,0,1,1,6,6,1,1,0,0,1,5,7Z"
  />
</svg>
