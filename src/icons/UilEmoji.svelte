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
  d="M15,11a1,1,0,1,0-1-1A1,1,0,0,0,15,11ZM9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm3-9A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4.28-7.12a1,1,0,0,0-1.4-.16A2.78,2.78,0,0,0,14,14H10.35a2.81,2.81,0,0,0-.88-1.31,1,1,0,0,0-1.36.2,1,1,0,0,0,.14,1.39A1,1,0,0,1,8.5,15a1.09,1.09,0,0,1-.25.72A1,1,0,1,0,9.5,17.28,2.89,2.89,0,0,0,10.34,16H14a2.72,2.72,0,0,0,.89,1.31,1,1,0,0,0,.57.18,1,1,0,0,0,.78-.38,1,1,0,0,0-.14-1.39,1,1,0,0,1-.25-.72,1.09,1.09,0,0,1,.25-.72A1,1,0,0,0,16.28,12.88Z"
  />
</svg>
