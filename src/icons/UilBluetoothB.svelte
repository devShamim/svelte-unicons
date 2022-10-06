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
  d="M13.41,12l3.8-3.79a1,1,0,0,0,0-1.42l-4.5-4.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.54.54A1,1,0,0,0,11,3V9.59L8.21,6.79A1,1,0,1,0,6.79,8.21L10.59,12l-3.8,3.79a1,1,0,1,0,1.42,1.42L11,14.41V21a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4.5-4.5a1,1,0,0,0,0-1.42ZM13,5.41,15.09,7.5,13,9.59Zm0,13.18V14.41l2.09,2.09Z"
  />
</svg>
