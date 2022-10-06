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
  d="M21,18.5H14.82A3,3,0,0,0,13,16.68V13.5h3.17A4.33,4.33,0,0,0,17.47,5,6,6,0,0,0,6.06,6.63,3.5,3.5,0,0,0,7,13.5h4v3.18A3,3,0,0,0,9.18,18.5H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2Zm-14-7a1.5,1.5,0,0,1,0-3,1,1,0,0,0,1-1,4,4,0,0,1,7.79-1.29,1,1,0,0,0,.78.67A2.31,2.31,0,0,1,18.5,9.17a2.34,2.34,0,0,1-2.33,2.33Zm5,9a1,1,0,1,1,1-1A1,1,0,0,1,12,20.5Z"
  />
</svg>
