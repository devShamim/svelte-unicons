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
  d="M11.29,15.71a1,1,0,0,0,.33.21,1,1,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42L13,12.59V9a1,1,0,0,0-2,0v3.59l-1.29-1.3a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.42ZM12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22ZM12,4a8,8,0,1,1-8,8A8,8,0,0,1,12,4Z"
  />
</svg>
