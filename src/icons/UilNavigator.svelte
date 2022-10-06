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
  d="M20.17,9.23l-14-5.78a3,3,0,0,0-4,3.7L3.71,12,2.13,16.85A3,3,0,0,0,2.94,20a3,3,0,0,0,2,.8,3,3,0,0,0,1.15-.23l14.05-5.78a3,3,0,0,0,0-5.54ZM5.36,18.7a1,1,0,0,1-1.06-.19,1,1,0,0,1-.27-1L5.49,13H19.22ZM5.49,11,4,6.53a1,1,0,0,1,.27-1A1,1,0,0,1,5,5.22a1,1,0,0,1,.39.08L19.22,11Z"
  />
</svg>
