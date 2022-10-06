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
  d="M16.85,2,9.09,9.77,4.19,5.91,2.05,7V17L4.2,18.09l4.93-3.85L16.87,22,22,19.93V4ZM4.37,14.3V9.65l2.44,2.43ZM16.7,15.59,12.05,12,16.7,8.41Z"
  />
</svg>
