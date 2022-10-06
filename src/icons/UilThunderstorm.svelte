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
  d="M13.5,15H11.23l1.45-2.5a1,1,0,1,0-1.74-1l-2.31,4a1,1,0,0,0,0,1,1,1,0,0,0,.87.5h2.27l-1.45,2.5a1,1,0,0,0,1.74,1l2.31-4a1,1,0,0,0,0-1A1,1,0,0,0,13.5,15Zm4.92-7.79A7,7,0,0,0,5.06,9.11,4,4,0,0,0,6,17a1,1,0,0,0,0-2,2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,15a1,1,0,0,0,0,2,5,5,0,0,0,1.42-9.79Z"
  />
</svg>
