define(['jquery'], function($) {

    function Dialog() {

    }
    Dialog.prototype.open = function(option) {

        var settings = {//给出默认值
            width: 300,
            height: 400,
        }

        $.extend(settings, option);//将第二个对象合并到第一个中

        var self = this;
        var $container = $('<div class="dialog-container"></div>'),
            $mask = $('<div class="dialog-mask"></div>'),
            $dialogBox = $('<div class="dialog-box"></div>'),
            $titleBox = $('<div class="dialog-title-box"></div>'),
            $title = $('<span class="dialog-title"></span>'),
            $btnClose = $('<span class="dialog-close-btn">[X]</span>'),
            $content = $('<div class="dialog-content"></div>');

            $container.append($mask);//mask插入到container
            $dialogBox.css({
                width:settings.width,
                height:settings.height,
                marginLeft:-settings.width/2,
                marginTop:-settings.height/2
            }).appendTo($container);
            $title.html(settings.title).appendTo($titleBox);
            $btnClose.on('click',function () {
                $container.remove(); //想通过调用close实现关闭效果
            }).appendTo($titleBox);
            $titleBox.appendTo($dialogBox);
            // $content.load(settings.contant).appendTo($dialogBox);
            $content.appendTo($dialogBox);
            
            //load()函数作用是将括号内的文件读入，然后插在$content中
            $mask.on('click',function () {
                self.close();
            });
            $(document.body).append($container);
    };
    Dialog.prototype.close = function() {
        this.$container.remove();
    };



    return Dialog;
});