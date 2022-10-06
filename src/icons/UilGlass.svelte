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
  d="M19.75,2.33A1,1,0,0,0,19,2H5a1,1,0,0,0-.75.33A1,1,0,0,0,4,3.11l1.8,16.22a3,3,0,0,0,3,2.67h6.42a3,3,0,0,0,3-2.67L20,3.11A1,1,0,0,0,19.75,2.33ZM16.2,19.11a1,1,0,0,1-1,.89H8.79a1,1,0,0,1-1-.89L6.78,10H17.22ZM17.44,8H6.56L6.12,4H17.88Z"
  />
</svg>
