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
  d="M10,9H7a1,1,0,0,0,0,2h.5v3a1,1,0,0,0,2,0V11H10a1,1,0,0,0,0-2Zm7.38.08a1,1,0,0,0-1.09.21L15,10.59l-1.29-1.3a1,1,0,0,0-1.09-.21A1,1,0,0,0,12,10v4a1,1,0,0,0,2,0V12.41l.29.3a1,1,0,0,0,1.42,0l.29-.3V14a1,1,0,0,0,2,0V10A1,1,0,0,0,17.38,9.08ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
  />
</svg>
