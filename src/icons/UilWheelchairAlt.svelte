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
  d="M20,16.18V16a3,3,0,0,0-2-2.82V7h1a1,1,0,0,0,0-2H7A3,3,0,0,0,4,2H3A1,1,0,0,0,3,4H4A1,1,0,0,1,5,5v7.42A5,5,0,1,0,12,17a4.94,4.94,0,0,0-.42-2H17a1,1,0,0,1,1,1v.18a3,3,0,1,0,2,0ZM7,20a3,3,0,1,1,3-3A3,3,0,0,1,7,20Zm9-7H10a4.93,4.93,0,0,0-3-1V11h9Zm0-4H7V7h9Zm3,11a1,1,0,1,1,1-1A1,1,0,0,1,19,20ZM7,16a1,1,0,1,0,1,1A1,1,0,0,0,7,16Z"
  />
</svg>
