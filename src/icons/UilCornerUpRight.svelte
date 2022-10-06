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
  d="M19.61,7.25a1,1,0,0,0-.22-.33L14.76,2.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l2.92,2.92h-8a4,4,0,0,0-4,4V21a1,1,0,0,0,2,0V10.63a2,2,0,0,1,2-2h8l-2.92,2.92a1,1,0,0,0,.71,1.71,1,1,0,0,0,.7-.3l4.63-4.62A1.19,1.19,0,0,0,19.61,8,1,1,0,0,0,19.61,7.25Z"
  />
</svg>
