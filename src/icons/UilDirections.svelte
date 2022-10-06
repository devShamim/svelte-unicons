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
  d="M21.12,9.88l-7-7a3.08,3.08,0,0,0-4.24,0l-7,7a3,3,0,0,0,0,4.24l7,7a3,3,0,0,0,4.24,0l7-7A3,3,0,0,0,21.12,9.88Zm-1.41,2.83-7,7a1,1,0,0,1-1.42,0h0l-7-7a1,1,0,0,1,0-1.42l7-7a1,1,0,0,1,1.42,0l7,7A1,1,0,0,1,19.71,12.71Zm-5.5-3.42a1,1,0,0,0-1.42,1.42l.3.29H9.5a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V13h2.59l-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,0-1.42Z"
  />
</svg>
