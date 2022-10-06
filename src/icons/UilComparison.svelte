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
  d="M21,20H4v-.54l5-5,3.8,3.8a1,1,0,0,0,1.41,0l7.5-7.5a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-6.8,6.8-3.79-3.8a1,1,0,0,0-1.41,0L4,16.63V11.46l5-5,2.8,2.8a1,1,0,0,0,1.41,0L18,4.47l2.19,2.19a1,1,0,0,0,1.41-1.42L18.69,2.35a1,1,0,0,0-1.41,0l-4.8,4.8L9.69,4.35a1,1,0,0,0-1.41,0L4,8.63V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z"
  />
</svg>
