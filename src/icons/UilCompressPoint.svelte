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
  d="M21.71,20.29,15.41,14H17a1,1,0,0,0,0-2H13.41l5.66-5.66a1,1,0,1,0-1.41-1.41L12,10.59V7a1,1,0,0,0-2,0V8.59L3.71,2.29A1,1,0,0,0,2.29,3.71L8.59,10H7a1,1,0,0,0,0,2h3.59L4.93,17.66a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L12,13.41V17a1,1,0,0,0,2,0V15.41l6.29,6.3a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Z"
  />
</svg>
