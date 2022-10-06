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
  d="M21.71,2.29a1,1,0,0,0-1.42,0L14.5,8.09V6.5a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54,1,1,0,0,0,.38.08h4a1,1,0,0,0,0-2H15.91l5.8-5.79A1,1,0,0,0,21.71,2.29ZM10.88,12.58a1,1,0,0,0-.38-.08h-4a1,1,0,0,0,0,2H8.09l-5.8,5.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5.79-5.8V17.5a1,1,0,0,0,2,0v-4a1,1,0,0,0-.08-.38A1,1,0,0,0,10.88,12.58Z"
  />
</svg>
