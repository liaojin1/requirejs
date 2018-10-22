require(['jquery', 'dialog'], function($, Dialog) {
    $('#btn').on('click', function() {
        var dialog = new Dialog();
        dialog.open({
            title: 'xxxxx',
            width: 300,
            height: 400,
            contant: ''
        });
    });
    $('#btn-close').on('click',function(){
        dialog.close();
    });
});