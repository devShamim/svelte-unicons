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
  d="M18.03079,2.44284V2.44278l-.15448.00006-.84552-.00006-.00012.00024-2.64319.00055L12.01321,6.39951,9.62961,2.44357l-2.64594-.001-.00024-.00037H2.2717v.00055L.83231,2.44266,12.029,21.55777,23.16769,2.443ZM12.02505,17.59293,4.322,4.44223H7.14566l4.88562,8.4071,4.8468-8.4071h2.80939Z"
  />
</svg>
