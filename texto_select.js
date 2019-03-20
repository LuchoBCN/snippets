        <script>

        $( "select" ).on('change', function() {
            var selector = document.getElementById('FormControl_olas');
            var value = selector[selector.selectedIndex].value;
            console.log(value);
        });
        $( "option" ).on('change', function() {
            console.log("opcion");
        });
    console.log("si paso");

        </script>
