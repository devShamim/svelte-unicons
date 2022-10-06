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
  d="M22,15H20V12a1,1,0,0,0-1-1H13V9h2a1,1,0,0,0,1-1V2a1,1,0,0,0-1-1H9A1,1,0,0,0,8,2V8A1,1,0,0,0,9,9h2v2H5a1,1,0,0,0-1,1v3H2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V16a1,1,0,0,0-1-1H6V13H18v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16A1,1,0,0,0,22,15ZM7,17v4H3V17ZM10,7V3h4V7ZM21,21H17V17h4Z"
  />
</svg>
