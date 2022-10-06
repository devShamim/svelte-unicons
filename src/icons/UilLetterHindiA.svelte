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
  d="M20.022,3h-5a1,1,0,0,0,0,2h1.5v6H11.57208a4.95124,4.95124,0,0,0,1.02558-3A5,5,0,0,0,3.26758,5.5.99974.99974,0,1,0,4.999,6.5,3.00021,3.00021,0,1,1,7.59766,11a1,1,0,0,0,0,2A3,3,0,1,1,4.999,17.5a.99974.99974,0,0,0-1.73144,1A5,5,0,0,0,12.59766,16a4.95124,4.95124,0,0,0-1.02558-3H16.522v7a1,1,0,0,0,2,0V5h1.5a1,1,0,0,0,0-2Z"
  />
</svg>
