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
  d="M20,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V9.41L8.88,15.3a3,3,0,0,0,2.11.87,3.08,3.08,0,0,0,2.16-.9l1.72-1.72a1,1,0,1,0-1.42-1.42L11.7,13.88a1,1,0,0,1-1.4,0L4.41,8H10a1,1,0,0,0,0-2H4A3,3,0,0,0,1,9V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V15A1,1,0,0,0,20,14Zm0-6a2,2,0,0,0-1.18.39l-1.75-.8L19,6.71A2,2,0,0,0,20,7a2,2,0,1,0-2-2l-1.9.87A2,2,0,0,0,15,5.5a2,2,0,0,0,0,4,1.88,1.88,0,0,0,.92-.24l2.1,1A2,2,0,1,0,20,8Z"
  />
</svg>
