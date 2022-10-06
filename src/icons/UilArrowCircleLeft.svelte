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
  d="M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z"
  />
</svg>
