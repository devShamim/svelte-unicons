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
  d="M21,2H9A1,1,0,0,0,8,3V7H6A1,1,0,0,0,5,8v4H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4a1,1,0,0,0,1-1V16h4a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM10,20H4V14h6Zm5-3H12V13a1,1,0,0,0-1-1H7V9h8Zm5-3H17V8a1,1,0,0,0-1-1H10V4H20Z"
  />
</svg>
