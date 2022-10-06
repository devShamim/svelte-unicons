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
  d="M14.5,7a4,4,0,1,0,4,4A4,4,0,0,0,14.5,7Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,14.5,13Zm1-10h-2a7,7,0,0,0-7,7v3h-1a1,1,0,0,0,0,2h1v2h-4a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19h12a7,7,0,0,0,7-7V10A7,7,0,0,0,15.5,3Zm5,9a5,5,0,0,1-5,5h-7V10a5,5,0,0,1,5-5h2a5,5,0,0,1,5,5Z"
  />
</svg>
