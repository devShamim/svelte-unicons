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
  d="M20.5,17H5.91l1.3-1.29a1,1,0,0,0-1.42-1.42l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.91,19H20.5a1,1,0,0,0,0-2Zm-9-7v4a1,1,0,0,0,2,0V4h2V14a1,1,0,0,0,2,0V4h1a1,1,0,0,0,0-2h-7a4,4,0,0,0,0,8Zm0-6V8a2,2,0,0,1,0-4Z"
  />
</svg>
