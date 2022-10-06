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
  d="M2.9917,9.00044a.99973.99973,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A.99973.99973,0,0,0,2.9917,9.00044Zm18,0a.99973.99973,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A.99973.99973,0,0,0,20.9917,9.00044Zm-4.13428-5.5a.99974.99974,0,1,0-1.73144-1l-.61414,1.06238a5.92782,5.92782,0,0,0-5.04028,0L8.85742,2.50044a.99974.99974,0,1,0-1.73144,1l.6925,1.19794A5.97889,5.97889,0,0,0,5.9917,9.00044v8a.99974.99974,0,0,0,1,1h2v3a1,1,0,0,0,2,0v-3h2v3a1,1,0,0,0,2,0v-3h2a.99974.99974,0,0,0,1-1v-8a5.97889,5.97889,0,0,0-1.82678-4.30206Zm-.86572,12.5h-8v-5h8Zm-8-7a4,4,0,0,1,8,0Z"
  />
</svg>
