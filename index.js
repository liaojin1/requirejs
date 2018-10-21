require(['jquery', 'dialog'], function($, dialog) {
    $('#btn').on('click', function() {
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