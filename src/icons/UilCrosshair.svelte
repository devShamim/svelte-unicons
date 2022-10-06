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
  d="M21,11H19.93A8,8,0,0,0,13,4.07V3a1,1,0,0,0-2,0V4.07A8,8,0,0,0,4.07,11H3a1,1,0,0,0,0,2H4.07A8,8,0,0,0,11,19.93V21a1,1,0,0,0,2,0V19.93A8,8,0,0,0,19.93,13H21a1,1,0,0,0,0-2Zm-4,2h.91A6,6,0,0,1,13,17.91V17a1,1,0,0,0-2,0v.91A6,6,0,0,1,6.09,13H7a1,1,0,0,0,0-2H6.09A6,6,0,0,1,11,6.09V7a1,1,0,0,0,2,0V6.09A6,6,0,0,1,17.91,11H17a1,1,0,0,0,0,2Zm-5-2a1,1,0,1,0,1,1A1,1,0,0,0,12,11Z"
  />
</svg>
