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
  d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7Zm6,8H3a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9.5-5H3a1,1,0,0,0,0,2H18.5a1.5,1.5,0,0,1,0,3H15.41l.3-.29a1,1,0,0,0-1.42-1.42l-2,2a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29H18.5a3.5,3.5,0,0,0,0-7Z"
  />
</svg>
