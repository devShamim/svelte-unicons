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
  d="M22.78,10.37A1,1,0,0,0,22,10H20V9a3,3,0,0,0-3-3H10.72l-.32-1A3,3,0,0,0,7.56,3H4A3,3,0,0,0,1,6V18a3,3,0,0,0,3,3H18.4a3,3,0,0,0,2.92-2.35L23,11.22A1,1,0,0,0,22.78,10.37ZM5.37,18.22a1,1,0,0,1-1,.78H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H7.56a1,1,0,0,1,1,.68l.54,1.64A1,1,0,0,0,10,8h7a1,1,0,0,1,1,1v1H8a1,1,0,0,0-1,.78Zm14,0a1,1,0,0,1-1,.78H7.21a1.42,1.42,0,0,0,.11-.35L8.8,12h12Z"
  />
</svg>
