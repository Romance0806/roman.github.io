(function(a){ArcheAge.LayerService=Class.extend({init:function(){this.$viewLayer=a(".comm-layer");this.$viewArea=this.$viewLayer.find(".common-view");this._layerShow();this._layerClose();this._PrevNext()},_layerShow:function(){var b=this;a("body").on("click",".open-layer",function(c){c.preventDefault();a(".layer-content").removeClass("layer-active");b.setActiveLayer(a(this).parent());b.openCommonLayer();b.alignCenter();ArcheAge.Utils.isIE8()||b.openControl();"section5"==a(this).parents(".section").data("id")&&
b.$viewArea.addClass("layer-section5")})},setActiveLayer:function(b){this.$layerActive=b;this.$layerActive.addClass("layer-active")},openCommonLayer:function(){this.$layerActive.hasClass("play")?a(".btn-prevnext .prev, .btn-prevnext .next").css("display","none"):(0==this.$layerActive.prevAll().length?a(".btn-prevnext .prev").css("display","none"):a(".btn-prevnext .prev").css("display","block"),0==this.$layerActive.nextAll().length?a(".btn-prevnext .next").css("display","none"):a(".btn-prevnext .next").css("display",
"block"));this.$viewArea.empty();this.showContent()},alignCenter:function(){var b=this.$viewLayer.find(".cnt");a(window).scrollTop();var c=a(window).height()/2-b.outerHeight()/2;b.css("top",c+20+"px")},showContent:function(){var b=this.$layerActive.find(".open-layer").attr("rel"),a=this.$layerActive.find(".open-layer").attr("href"),b="movie"==b?'<iframe id="youtubePlayer" frameborder="0" allowfullscreen="1" title="YouTube video player" width="1066" height="600" src="'+a+'"></iframe>':'<img src="'+
a+'" alt="">';this.$viewArea.empty();this.$viewArea.append(b);this.$viewLayer.css("display","block")},_PrevNext:function(){var b=this;a("body").on("click",".btn-prevnext a",function(){a(".layer-contents").removeClass("layer-active");a(".btn-prevnext .prev, .btn-prevnext .next").css("display","block");a(this).parent().hasClass("prev")?(b.setActiveLayer(b.$layerActive.prev()),b.showContent(),0==b.$layerActive.prevAll().length&&a(".btn-prevnext .prev").css("display","none")):a(this).parent().hasClass("next")&&
(b.setActiveLayer(b.$layerActive.next()),b.showContent(),0==b.$layerActive.nextAll().length&&a(".btn-prevnext .next").css("display","none"))})},_layerClose:function(){var b=this;a("body").on("click",".close-layer, .layer-blind",function(){a(this).parents(".layer-wrap").css("display","none");a(".layer-content").removeClass("layer-active");0<a("#youtubePlayer").length&&a("#youtubePlayer").attr("src","about:blank");b.$viewArea.empty();b.$viewArea.removeClass("layer-section5");ArcheAge.Utils.isIE8()||
b.closeControl()})},openControl:function(){0<a(".section.active video").length&&a(".section.active video").get(0).pause()},closeControl:function(){var b=a(".section.active video").get(0);0<a(".section.active video").length&&b.play()}})})(jQuery);