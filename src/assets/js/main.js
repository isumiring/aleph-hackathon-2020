$(function() {
    // lazy image
    const observer = lozad();
    observer.observe();
    
    $('.floating-labels .form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0))
    }).trigger('blur')
})
