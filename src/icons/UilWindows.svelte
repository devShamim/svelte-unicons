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
  d="M22,2L11.2,3.6v8L22,11.5V2z M10.2,12.5L2,12.4l0,6.8l8.1,1.1L10.2,12.5L10.2,12.5z M2,4.8l0,6.8l8.1,0l0-7.9L2,4.8z M11.1,12.5l0,7.9L22,22l0-9.4L11.1,12.5z"
  />
</svg>
