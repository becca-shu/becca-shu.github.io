document.addEventListener('DOMContentLoaded', () => {
  const $form = $('#contact-form');

  $form.on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
    $('submit-form').prop('disabled', true);
    $('submit-form').html('Sending...');
    $.ajax({
      url:'https://formspree.io/tarotisforeveryone@gmail.com',
      method:'POST',
      data:{
        name: name,
        _replyto: email,
         email: email,
        message: message,
        _subject: `message from ${name}`,
      },
      dataType:"json",
      success:function() {
        $form.hide();
        $('#thank-you-block').show();
        $('submit-form').prop('disabled', false);
        $('submit-form').html('Send');
        console.log('success');
      }
    });

  });

});
