$(document).ready(function () {
    
    $('.nav-links a').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 60,
          },
          800
        );
      }
    });
  
   
    $('.hamburger').click(function () {
      $('.nav-links').toggleClass('show');
    });
  
 
    $('.project').click(function () {
      const title = $(this).find('h3').text();
      const desc = $(this).find('p').text();
      const img = $(this).find('img').attr('src');
  
      $('.modal-content h3').text(title);
      $('.modal-content p').text(desc);
      $('.modal-content img').attr('src', img);
      $('.modal').fadeIn();
    });
  
    $('.close-btn').click(function () {
      $('.modal').fadeOut();
    });
  
  
    $('form').submit(function (e) {
      e.preventDefault();
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const message = $('#message').val().trim();
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
      if (name === '' || !email.match(emailPattern) || message === '') {
        alert('Please fill all fields with a valid email.');
        return;
      }
  
      alert('Thank you for your message!');
      this.reset();
    });

      
  function revealOnScroll() {
    $('.reveal').each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom - 50) {
        $(this).addClass('active');
      }
    });
  }

  revealOnScroll(); 
  $(window).on('scroll', revealOnScroll); 


    $('#darkModeToggle').click(function () {
        $('body').toggleClass('dark-mode');
    
        const icon = $(this).find('i');
        if ($('body').hasClass('dark-mode')) {
          icon.removeClass('fa-moon').addClass('fa-sun');
        } else {
          icon.removeClass('fa-sun').addClass('fa-moon');
        }
      });
    

  });
  