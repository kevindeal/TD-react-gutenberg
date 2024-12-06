jQuery(document).ready(function($) {

    console.log("Tabbed Conent Script Loaded.");

    if(window.location.hash) {
        // Fragment exists
        console.log("Window Hash", window.location.hash);
        $(".tab-links li").removeClass("active");
        $(`.tab-links li[data-push-state-id=${window.location.hash.substring(1)}]`).addClass("active");

        $('.tab-block .tab-contents').removeClass('flex');
        $('.tab-block .tab-contents').removeClass('md:flex');
        $('.tab-block .tab-contents').removeClass('lg:flex');
        $('.tab-block .tab-contents').addClass('hidden');
        $('.tab-block .tab-contents').addClass('md:hidden');
        $('.tab-block .tab-contents').addClass('lg:hidden');

        let data = $(window.location.hash).first().data();
        if(data.visibleMobile){
            $(window.location.hash).addClass('flex');
            $(window.location.hash).removeClass('hidden');
        }
        if(data.visibleTablet){
            $(window.location.hash).addClass('md:flex');
            $(window.location.hash).removeClass('md:hidden');
        }
        if(data.visibleDesktop){
            $(window.location.hash).addClass('lg:flex');
            $(window.location.hash).removeClass('lg:hidden');
        }
    } else {
        // Fragment doesn't exist
        console.log("No Hash");
        $(".wp-block-td-tabbed-content").each((i,e)=> {
            $(e).find(`.tab-links li:first`).addClass("active");
            $(e).find(`.tab-contents`).removeClass('flex md:flex lg:flex').addClass("hidden md:hidden lg:hidden");
            $(e).find(`.tab-container .tab-block:first .tab-contents`).addClass('flex md:flex lg:flex').removeClass("hidden md:hidden lg:hidden");
        });
    }


    $(".wp-block-td-tabbed-content").each((i,e)=> {
        $(e).attr("data-tcid",`TC${i}`);
        $(e).find(".tab-links").each((i,e)=> {
            $(e).attr('data-parentTC', `TC${i}`);
        });
    });

    const detectScroll = ()=>{
        $('.scroll-right-wrapper').each((index, elem)=>{
            let tabLinks = $(elem).siblings('.tab-links').eq(0);
            if(tabLinks.length > 0){
                let scrollWidth = $(tabLinks).get()[0].scrollWidth;
                let innerWidth = $(tabLinks).innerWidth();
                let difference = scrollWidth - innerWidth;
                let tabCount = $(tabLinks).children().length;
    
    
                if(difference > 0) {
                    $(elem).css('display', 'flex');
                    $(elem).css('left', $(tabLinks).position().left + innerWidth - $(elem).innerWidth());
                    $(elem).off('click');
                    $(elem).on("click", ()=>{
                        let scrollLeft = $(tabLinks).scrollLeft();
                        let scrollTo = scrollLeft + innerWidth;
                        console.log("Scroll Right Button Clicked", scrollLeft);
                        if(scrollLeft + 5 > difference){
                            //Add 5 for buffer and then loop around.
                            scrollTo = 0;
                        }
                        $(tabLinks.scrollLeft(scrollTo));
                    });
                } else {
                    $(elem).css("display", "none");
                }
            }
        });
    }

   detectScroll();

   window.addEventListener('resize', function(event){
        detectScroll();
   });



    $(".tab-links li").click((e)=>{
        console.log("A tab link was clicked", e, this);
        const $TC = $(e.currentTarget).closest(".wp-block-td-tabbed-content");
        const tcid = $TC.data("tcid");

        $TC.find(".tab-links li").removeClass("active");
        $(e.currentTarget).addClass("active");
        console.log("Tab Data", $(e.currentTarget).data('pushStateId'));

        $TC.find('.tab-block .tab-contents').removeClass('flex');
        $TC.find('.tab-block .tab-contents').removeClass('md:flex');
        $TC.find('.tab-block .tab-contents').removeClass('lg:flex');

        $TC.find('.tab-block .tab-contents').addClass('hidden');
        $TC.find('.tab-block .tab-contents').addClass('md:hidden');
        $TC.find('.tab-block .tab-contents').addClass('lg:hidden');

        console.log('Push State Element', $(`#${$(e.currentTarget).data('pushStateId')}`).first().data())
        let data = $(`#${$(e.currentTarget).data('pushStateId')}`).first().data();
        if(data.visibleMobile){
            $TC.find(`#${$(e.currentTarget).data('pushStateId')}`).addClass('flex');
            $TC.find(`#${$(e.currentTarget).data('pushStateId')}`).removeClass('hidden');
        }
        if(data.visibleTablet){
            $TC.find(`#${$(e.currentTarget).data('pushStateId')}`).addClass('md:flex');
            $TC.find(`#${$(e.currentTarget).data('pushStateId')}`).removeClass('md:hidden');
        }
        if(data.visibleDesktop){
            $TC.find(`#${$(e.currentTarget).data('pushStateId')}`).addClass('lg:flex');
            $TC.find(`#${$(e.currentTarget).data('pushStateId')}`).removeClass('lg:hidden');
        }

    });

});