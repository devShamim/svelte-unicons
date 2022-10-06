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
  d="M10.66,6H17a1,1,0,0,1,1,1v6.34a1,1,0,1,0,2,0V7a3,3,0,0,0-3-3H10.66a1,1,0,0,0,0,2ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71l2,2A3,3,0,0,0,4,7V19a1,1,0,0,0,.62.92A.84.84,0,0,0,5,20a1,1,0,0,0,.71-.29L8.41,17h7.18l4.7,4.71a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM8,15a1,1,0,0,0-.71.29L6,16.59V7.41L13.59,15Z"
  />
</svg>
