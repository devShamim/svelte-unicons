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
  d="M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2ZM5.77,16H5a1,1,0,0,1-1-1v-.42l3.3-3.29a1,1,0,0,1,1.41,0l.87.87ZM20,18.59l-2.29-2.3A1,1,0,0,0,17,16H8.59L15.3,9.29a1,1,0,0,1,1.4,0L20,12.58Zm0-8.83L18.12,7.89a3,3,0,0,0-4.24,0L11,10.76l-.88-.87a3.06,3.06,0,0,0-4.24,0L4,11.76V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
  />
</svg>
