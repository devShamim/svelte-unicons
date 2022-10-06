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
  d="M21,13.5a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.91l5.88,5.88a3,3,0,0,0,4.24,0l3.59-3.58a1,1,0,0,0-1.42-1.42l-3.58,3.59a1,1,0,0,1-1.42,0L5.41,7.5H17a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-4A1,1,0,0,0,21,13.5Zm0-9a1.05,1.05,0,0,0,.71-.29l.12-.16a.56.56,0,0,0,.09-.17A.64.64,0,0,0,22,3.7a1.36,1.36,0,0,0,0-.2,1.05,1.05,0,0,0-.29-.71,1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.42A1.05,1.05,0,0,0,21,4.5Zm0,1a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A1,1,0,0,0,21,5.5Z"
  />
</svg>
