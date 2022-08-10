/* Start BX slider*/

/* End BX slider*/


/* Start Flip Slider Slider*/
(function () {

    var event = jQuery.event,

        //helper that finds handlers by type and calls back a function, this is basically handle
        // events - the events object
        // types - an array of event types to look for
        // callback(type, handlerFunc, selector) - a callback
        // selector - an optional selector to filter with, if there, matches by selector
        //     if null, matches anything, otherwise, matches with no selector
        findHelper = function (events, types, callback, selector) {
            var t, type, typeHandlers, all, h, handle,
                namespaces, namespace,
                match;
            for (t = 0; t < types.length; t++) {
                type = types[t];
                all = type.indexOf(".") < 0;
                if (!all) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespace = new RegExp("(^|\\.)" + namespaces.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
                }
                typeHandlers = (events[type] || []).slice(0);

                for (h = 0; h < typeHandlers.length; h++) {
                    handle = typeHandlers[h];

                    match = (all || namespace.test(handle.namespace));

                    if (match) {
                        if (selector) {
                            if (handle.selector === selector) {
                                callback(type, handle.origHandler || handle.handler);
                            }
                        } else if (selector === null) {
                            callback(type, handle.origHandler || handle.handler, handle.selector);
                        } else if (!handle.selector) {
                            callback(type, handle.origHandler || handle.handler);

                        }
                    }


                }
            }
        };

    /**
     * Finds event handlers of a given type on an element.
     * @param {HTMLElement} el
     * @param {Array} types an array of event names
     * @param {String} [selector] optional selector
     * @return {Array} an array of event handlers
     */
    event.find = function (el, types, selector) {
        var events = ($._data(el) || {}).events,
            handlers = [],
            t, liver, live;

        if (!events) {
            return handlers;
        }
        findHelper(events, types, function (type, handler) {
            handlers.push(handler);
        }, selector);
        return handlers;
    };
    /**
     * Finds all events.  Group by selector.
     * @param {HTMLElement} el the element
     * @param {Array} types event types
     */
    event.findBySelector = function (el, types) {
        var events = $._data(el).events,
            selectors = {},
            //adds a handler for a given selector and event
            add = function (selector, event, handler) {
                var select = selectors[selector] || (selectors[selector] = {}),
                    events = select[event] || (select[event] = []);
                events.push(handler);
            };

        if (!events) {
            return selectors;
        }
        //first check live:
        /*$.each(events.live || [], function( i, live ) {
			if ( $.inArray(live.origType, types) !== -1 ) {
				add(live.selector, live.origType, live.origHandler || live.handler);
			}
		});*/
        //then check straight binds
        findHelper(events, types, function (type, handler, selector) {
            add(selector || "", type, handler);
        }, null);

        return selectors;
    };
    event.supportTouch = "ontouchend" in document;

    $.fn.respondsTo = function (events) {
        if (!this.length) {
            return false;
        } else {
            //add default ?
            return event.find(this[0], $.isArray(events) ? events : [events]).length > 0;
        }
    };
    $.fn.triggerHandled = function (event, data) {
        event = (typeof event == "string" ? $.Event(event) : event);
        this.trigger(event, data);
        return event.handled;
    };
    /**
     * Only attaches one event handler for all types ...
     * @param {Array} types llist of types that will delegate here
     * @param {Object} startingEvent the first event to start listening to
     * @param {Object} onFirst a function to call
     */
    event.setupHelper = function (types, startingEvent, onFirst) {
        if (!onFirst) {
            onFirst = startingEvent;
            startingEvent = null;
        }
        var add = function (handleObj) {

            var bySelector, selector = handleObj.selector || "";
            if (selector) {
                bySelector = event.find(this, types, selector);
                if (!bySelector.length) {
                    $(this).delegate(selector, startingEvent, onFirst);
                }
            } else {
                //var bySelector = event.find(this, types, selector);
                if (!event.find(this, types, selector).length) {
                    event.add(this, startingEvent, onFirst, {
                        selector: selector,
                        delegate: this
                    });
                }
            }
        },
            remove = function (handleObj) {
                var bySelector, selector = handleObj.selector || "";
                if (selector) {
                    bySelector = event.find(this, types, selector);
                    if (!bySelector.length) {
                        $(this).undelegate(selector, startingEvent, onFirst);
                    }
                } else {
                    if (!event.find(this, types, selector).length) {
                        event.remove(this, startingEvent, onFirst, {
                            selector: selector,
                            delegate: this
                        });
                    }
                }
            };
        $.each(types, function () {
            event.special[this] = {
                add: add,
                remove: remove,
                setup: function () {},
                teardown: function () {}
            };
        });
    };
})(jQuery);
(function ($) {
    var isPhantom = /Phantom/.test(navigator.userAgent),
        supportTouch = !isPhantom && "ontouchend" in document,
        scrollEvent = "touchmove scroll",
        // Use touch events or map it to mouse events
        touchStartEvent = supportTouch ? "touchstart" : "mousedown",
        touchStopEvent = supportTouch ? "touchend" : "mouseup",
        touchMoveEvent = supportTouch ? "touchmove" : "mousemove",
        data = function (event) {
            var d = event.originalEvent.touches ?
                event.originalEvent.touches[0] :
                event;
            return {
                time: (new Date).getTime(),
                coords: [d.pageX, d.pageY],
                origin: $(event.target)
            };
        };

    /**
     * @add jQuery.event.swipe
     */
    var swipe = $.event.swipe = {
        /**
         * @attribute delay
         * Delay is the upper limit of time the swipe motion can take in milliseconds.  This defaults to 500.
         *
         * A user must perform the swipe motion in this much time.
         */
        delay: 500,
        /**
         * @attribute max
         * The maximum distance the pointer must travel in pixels.  The default is 75 pixels.
         */
        max: 75,
        /**
         * @attribute min
         * The minimum distance the pointer must travel in pixels.  The default is 30 pixels.
         */
        min: 30
    };

    $.event.setupHelper([

        /**
         * @hide
         * @attribute swipe
         */
        "swipe",
        /**
         * @hide
         * @attribute swipeleft
         */
        'swipeleft',
        /**
         * @hide
         * @attribute swiperight
         */
        'swiperight',
        /**
         * @hide
         * @attribute swipeup
         */
        'swipeup',
        /**
         * @hide
         * @attribute swipedown
         */
        'swipedown'
    ], touchStartEvent, function (ev) {
        var
        // update with data when the event was started
        start = data(ev),
            stop,
            delegate = ev.delegateTarget || ev.currentTarget,
            selector = ev.handleObj.selector,
            entered = this;

        function moveHandler(event) {
            if (!start) {
                return;
            }
            // update stop with the data from the current event
            stop = data(event);

            // prevent scrolling
            if (Math.abs(start.coords[0] - stop.coords[0]) > 10) {
                event.preventDefault();
            }
        };
        // Attach to the touch move events
        $(document.documentElement).bind(touchMoveEvent, moveHandler)
            .one(touchStopEvent, function (event) {
                $(this).unbind(touchMoveEvent, moveHandler);
                // if start and stop contain data figure out if we have a swipe event
                if (start && stop) {
                    // calculate the distance between start and stop data
                    var deltaX = Math.abs(start.coords[0] - stop.coords[0]),
                        deltaY = Math.abs(start.coords[1] - stop.coords[1]),
                        distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                    // check if the delay and distance are matched
                    if (stop.time - start.time < swipe.delay && distance >= swipe.min) {
                        var events = ['swipe'];
                        // check if we moved horizontally
                        if (deltaX >= swipe.min && deltaY < swipe.min) {
                            // based on the x coordinate check if we moved left or right
                            events.push(start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight");
                        } else
                        // check if we moved vertically
                        if (deltaY >= swipe.min && deltaX < swipe.min) {
                            // based on the y coordinate check if we moved up or down
                            events.push(start.coords[1] < stop.coords[1] ? "swipedown" : "swipeup");
                        }
                        // trigger swipe events on this guy
                        $.each($.event.find(delegate, events, selector), function () {
                            this.call(entered, ev, {
                                start: start,
                                end: stop
                            })
                        })
                    }
                }
                // reset start and stop
                start = stop = undefined;
            })
    });
})(jQuery)

 
    $(function () {
       
			var Page = (function() {
				
				var config = {
						$bookBlock : $( '#bb-bookblock' ),
						$navNext : $( '#bb-nav-next' ),
						$navPrev : $( '#bb-nav-prev' ),
						$navFirst : $( '#bb-nav-first' ),
						$navLast : $( '#bb-nav-last' )
					},
					init = function() {
						config.$bookBlock.bookblock( {
							speed : 1000,
							shadowSides : 0.8,
							shadowFlip : 0.4,
							autoplay : false
						} );
						initEvents();
					},
					initEvents = function() {
						
						var $slides = config.$bookBlock.children();

						// add navigation events
						config.$navNext.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'next' );
							return false;
						} );

						config.$navPrev.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'prev' );
							return false;
						} );

						config.$navFirst.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'first' );
							return false;
						} );

						config.$navLast.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'last' );
							return false;
						} );
						
						// add swipe events
						$slides.on( {
							'swipeleft' : function( event ) {
								config.$bookBlock.bookblock( 'next' );
								return false;
							},
							'swiperight' : function( event ) {
								config.$bookBlock.bookblock( 'prev' );
								return false;
							}
						} );

						// add keyboard events
						$( document ).keydown( function(e) {
							var keyCode = e.keyCode || e.which,
								arrow = {
									left : 37,
									up : 38,
									right : 39,
									down : 40
								};

							switch (keyCode) {
								case arrow.left:
									config.$bookBlock.bookblock( 'prev' );
									break;
								case arrow.right:
									config.$bookBlock.bookblock( 'next' );
									break;
							}
						} );
					};

					return { init : init };

			})();
		
				Page.init();
	
    });
    /* End Flip Slider Slider*/
 


$(window).load(function () {

    if ($('.container-draggable').length) {
        var originX = $('.container-draggable').position().left;
    }

    $('.btn-drag-watch').mousedown(function (e) {
        var elt = $(this),
            topParent = elt.parents('.photo').position().top,
            leftParent = elt.parents('.photo').position().left,
            heightParent = elt.parents('.photo').height(),
            widthParent = elt.parents('.photo').width(),
            topContainer = elt.parents('.side').position().top + parseFloat(elt.parents('.side').css('padding-top'));

        e.preventDefault();
        elt.addClass('active');

        $(document).bind('mousemove', function (e) {
            var pageX = e.pageX - elt.parents('.photo').parent().offset().left,
                pageY = e.pageY - topContainer;

            if (pageX > leftParent && pageX < leftParent + widthParent) {
                $('.photo .face').css({
                    width: pageX - leftParent + 2
                });
                $('.photo .dos').css({
                    width: leftParent + widthParent - pageX + 2
                });

                elt.parent().css({
                    right: originX - pageX + elt.parent().width() / 2
                });
            }

            if (pageY > topParent && pageY < topParent + heightParent) {
                elt.css({
                    bottom: topParent + heightParent - pageY - elt.height()
                })
            }


            e.preventDefault();
            return false;
        });
        return false;
    })

});

$(document).ready(function () {

    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });


    $("body").on("contextmenu", function (e) {
        return false;
    });
});

$(document).ready(function ($) {
    $(document).keydown(function (event) {
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

        if ((event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) || (event.ctrlKey && event.shiftKey && pressedKey == "i") || event.keyCode == "123") {
            //alert('Sorry, This Functionality Has Been Disabled!');
            //disable key press porcessing
            return false;
        }
    });
});

function openModal()
		{
			$.modal({
				content: "<p style='text-align: center;margin-top: 20px;'><img src='../img/help.jpg'></p>"+
						 
						  "</ul>",
				title: 'Help',
				maxWidth: 800,
				Width: 800,
				
			});
		}
		
				 
var input = document.getElementById("SearchText");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("searchtextbtn").click();
  }
});
	
    $('#messages-info a').click(function(){
        if(divId == hash){
			 var divId = $('#bb-bookblock > div').attr('id');
   var hash = window.location.hash;
	var hashVal = window.location.hash.split("#")[1]; 
$('#bb-bookblock div.bb-item').hide();
$('#bb-bookblock .bb-item# ' + divId).show();		 
		} 

  	 });
	$("#bb-nav-next").on("click", ".bb-custom-wrapper", function () {
	$(this).toggleClass('hover');
});
			

			




$("#comment").click(function(){
	
$(".commentdiv").toggleClass("showdefault");

  });


$("#zoom").click(function(){
$("a#zoom").css("opacity","1");
$(".zoomdiv").toggleClass("zoomdivshow");

  });
  
  $("#closezoom").click(function(){
	  $("a#zoom").css("opacity","0");
	$(".zoomdiv").toggleClass("zoomdivshow");
	});
$("#close").click(function(){
	$(".commentdiv").toggleClass("showdefault");
	});
	
	$("#bookmarkicon").click(function(){
	$("#bookmark").toggleClass("bookmarkicons");
	});
	
$('#zoom-in').click(function() {
   updateZoom(0.1);
});

$('#zoom-out').click(function() {
   updateZoom(-0.1);
});


zoomLevel = 1;

var updateZoom = function(zoom) {
   zoomLevel += zoom;

   $('#bb-bookblock').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
}

  $(".panel").click(function(){
	$("#upper").slideToggle();
	$(".panel a").toggleClass("downarrow");
	});

	$(".exitfullscreen").hide();
					$('.fullscreen .requestfullscreen').click(function() {
						
						$('.fullscreen1').fullscreen();
						$(".exitfullscreen").show();
						
						return false;
					});

					// exit fullscreen
					$('.fullscreen1 .exitfullscreen').click(function() {
						$(".exitfullscreen").hide();
						$.fullscreen.exit();
						
						return false;
					});

					// document's event
					$(document).bind('fscreenchange', function(e, state, elem) {
						// if we currently in fullscreen mode
						if ($.fullscreen.isFullScreen()) {
							$('.fullscreen1 .requestfullscreen1').hide();
							$('.fullscreen1 .exitfullscreen').show();
						} else {
							$('.fullscreen1 .requestfullscreen1').show();
							$('.fullscreen1 .exitfullscreen').hide();
						}

						$('#state').text($.fullscreen.isFullScreen() ? '' : 'not');
					});
// $("body").append("<div class='popup'><a href='../index.htm' id='resources' target='_blank'><img src='../img/study.png'></a></div>");	
	
	$("#resources").click(function(){
	$("#slidedown").trigger("click");
	});		