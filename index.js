$('.fidgetComp').on('mouseenter', function(){
    var subCircles = $(this).find('.sub');
    $.each(subCircles, function(i, circle){
        if($(circle).hasClass('active') === false){
            if($(this).hasClass('subCircle1')){
                $(this).addClass('subCircle1-expand')
            }

            if($(this).hasClass('subCircle2')){
                $(this).addClass('subCircle2-expand')
            }

            if($(this).hasClass('subCircle3')){
                $(this).addClass('subCircle3-expand')
            }
        }
        
    })
    $(subCircles).on('click', function(e){
        var excluded = $(subCircles).not(this);
        var positionArr = [
            {
                position: 'bottom',
                css: {
                    right: '32rem',
                    top: '10rem'
                },
                textCss: {
                    top: '2.5rem',
                    left: '1.5rem'
                }
            },
            {
                position: 'right',
                css:{
                    right: '26rem',
                    top: '1rem'
                },
                textCss: {
                    left: '2.5rem',
                    top: '1rem'
                }
            },
            {
                position: 'left',
                css: {
                    right: '38rem',
                    top: '1rem'
                },
                textCss: {
                    left: '0.5rem'
                }
            },
        ];

        var positionRight = positionArr.filter(function(i){
            return i.position === 'right'
        })
        
        var positionLeft = positionArr.filter(function(i){
            return i.position === 'left'
        })
        var positionBottom = positionArr.filter(function(i){
            return i.position === 'bottom'
        })

        $(this).addClass('active');
        $(subCircles).not(this).removeClass('active');
        if($(this).hasClass('bottom')){
            updatePosition(this, positionRight[0].css, 'bottom', 'active-right', positionRight[0].textCss)
            $.each(excluded, function(i, el){
                if($(el).hasClass('right')){
                   updatePosition(this, positionLeft[0].css, 'right', 'left', positionLeft[0].textCss)
                }else if($(el).hasClass('active-right')){
                    updatePosition(this, positionLeft[0].css, 'active-right', 'left', positionLeft[0].textCss)
                }else if($(el).hasClass('left')){
                    updatePosition(this, positionBottom[0].css, 'left', 'bottom', positionBottom[0].textCss)
                }else if($(el).hasClass('active-left')){
                    updatePosition(this, positionBottom[0].css, 'active-left', 'bottom', positionBottom[0].textCss)
                }
            })
        }else if($(this).hasClass('left')){
            updatePosition(this, positionBottom[0].css, 'left', 'active-bottom', positionBottom[0].textCss)
            $.each(excluded, function(i, el){
                if($(el).hasClass('right')){
                   updatePosition(this, positionLeft[0].css, 'right', 'left', positionLeft[0].textCss)
                }else if($(el).hasClass('bottom')){
                   updatePosition(this, positionRight[0].css, 'bottom', 'right', positionRight[0].textCss)
                }else if($(el).hasClass('active-bottom')){
                    updatePosition(this, positionRight[0].css, 'active-bottom', 'right', positionRight[0].textCss)
                }else if($(el).hasClass('active-right')){
                    updatePosition(this, positionLeft[0].css, 'active-right', 'left', positionLeft[0].textCss)
                }
            })
        }else if($(this).hasClass('right')){
            updatePosition(this, positionLeft[0].css, 'right', 'active-left', positionLeft[0].textCss)
            $.each(excluded, function(i, el){
                if($(el).hasClass('bottom')){
                   updatePosition(this, positionRight[0].css, 'bottom', 'right', positionRight[0].textCss)
                }else if($(el).hasClass('left')){
                   updatePosition(this, positionBottom[0].css, 'left', 'bottom', positionBottom[0].textCss)
                }else if($(el).hasClass('active-left')){
                    updatePosition(this, positionBottom[0].css, 'active-left', 'bottom', positionBottom[0].textCss)
                }else if($(el).hasClass('active-bottom')){
                    updatePosition(this, positionRight[0].css, 'active-bottom', 'right', positionRight[0].textCss)
                 }
            })
        }
    })
})

function updatePosition(thisEl, css, removedClass, addedClass, textCss){
    $(thisEl).removeClass(removedClass).addClass(addedClass);
    $(thisEl).css(css)
    $(thisEl).find('.subCircle-content').css(textCss)
}

$('.fidgetComp').on('mouseleave', function(){
    var subCircles = $(this).find('.sub');
    $.each(subCircles, function(i, circle){
        if($(circle).hasClass('active') === false){
            if($(this).hasClass('subCircle1')){
                $(this).removeClass('subCircle1-expand')
            }

            if($(this).hasClass('subCircle2')){
                $(this).removeClass('subCircle2-expand')
            }

            if($(this).hasClass('subCircle3')){
                $(this).removeClass('subCircle3-expand')
            }
        }
    })
})