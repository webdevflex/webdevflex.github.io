$('.product-testimonials').slick({
    centerMode: true,
    slidesToShow:3,

    variableWidth: true,
  });



    $('.content-blog-slider').slick({
      slidesToShow:3,
      arrows: false,
      variableWidth: true,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow:3,
              slidesToScroll:2,
              variableWidth: false,
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow:2,
              slidesToScroll:2,
              variableWidth: false,
             
            }
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow:1,
              slidesToScroll :1,
              variableWidth: false,
             
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow:2,
              slidesToScroll :1,
              variableWidth: true,
              centerPadding: '10px',
             
            }
          },
        ]  
    });

    $('.company-slider').slick({
      slidesToShow:6,
      arrows: false,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint:1440,
          settings: {
            slidesToShow: 6,
            variableWidth: true,
          }
        },
        {
          breakpoint:1200,
          settings: {
            slidesToShow: 3,
          }
          
      },
      {
        breakpoint:666,
        settings: {
          slidesToShow: 1,
        }
        
    },
    {
      breakpoint:380,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
      }
      
  },
    ]
    });

      $('.people-slider').slick({
        slidesToShow:6,
        // arrows: false,
        slidesToScroll: 3,
        responsive :[
          {
              breakpoint:1438,
              settings:{
                slidesToShow: 4,
                }
          },
          {
              breakpoint:1024,
              settings:{
                slidesToShow: 3,
              }
          },
          {
              breakpoint:795,
              settings:{
                slidesToShow: 2,
            }
          },   
          {
              breakpoint:550,
              settings:{
                slidesToShow: 1,
            }
          },
          {
            breakpoint:380,
            settings:{
              slidesToShow: 3,
              arrows: false,
            }
          },
          ]
        });

    //mobile-menu
    let activemenu = document.querySelector('.mobile-menu');
    let menu = document.querySelector('.menu-list');

    activemenu.addEventListener('click',_ => {
      menu.classList.toggle('active');
    });

 