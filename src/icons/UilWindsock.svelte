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
  d="M18.08,5,10,4.33h0L7,4.08V3A1,1,0,0,0,5,3V21a1,1,0,0,0,2,0V13.92l3-.25h0L18.08,13A1,1,0,0,0,19,12V6A1,1,0,0,0,18.08,5ZM9,11.75l-2,.16V6.09l2,.16Zm4-.34-2,.17V6.42l2,.17Zm4-.33-2,.17V6.75l2,.17Z"
  />
</svg>
