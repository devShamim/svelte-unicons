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
  d="M11.29,12.29A1,1,0,0,0,12,14l.19,0a.6.6,0,0,0,.19-.06.56.56,0,0,0,.17-.09l.15-.12a1,1,0,0,0,0-1.42A1,1,0,0,0,11.29,12.29ZM12,15a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V16A1,1,0,0,0,12,15Zm6.42-6.78A7,7,0,0,0,5.06,10.11,4,4,0,0,0,6,18H8a1,1,0,0,0,0-2H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,13a3,3,0,0,1-3,3H16a1,1,0,0,0,0,2h1a5,5,0,0,0,1.42-9.78Z"
  />
</svg>
