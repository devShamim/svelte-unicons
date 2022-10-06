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
  d="M14.66,13.56l-4.19,1.5A1,1,0,0,0,10.8,17a1,1,0,0,0,.34-.06l4.2-1.5a1,1,0,1,0-.68-1.88Zm-4-5a1,1,0,0,0-1.41,0,1,1,0,0,1-1.42,0,1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42,3,3,0,0,0,4.24,0A1,1,0,0,0,10.62,8.54Zm7,0a1,1,0,0,0-1.41,0,1,1,0,0,1-1.42,0,1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42,3,3,0,0,0,4.24,0A1,1,0,0,0,17.62,8.54ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
  />
</svg>
