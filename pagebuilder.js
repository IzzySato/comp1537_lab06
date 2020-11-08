import * as Util from './util.js';

const customerReviews = {
  reviews: [
    {
      id: 1,
      stars: 3,
      name: 'Mary Brown',
      date: 'yesterday',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 2,
      stars: 5,
      name: 'amy william',
      date: 'yesterday',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 3,
      stars: 4,
      name: 'john miller',
      date: 'Oct 25, 2020',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 4,
      stars: 5,
      name: 'patricia davis',
      date: 'Oct 14, 2020',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 5,
      stars: 3,
      name: 'james jones',
      date: 'Oct 2, 2020',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 6,
      stars: 5,
      name: 'lisa smith',
      date: 'Sept 30, 2020',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
  ] };

const buildNav = () => {
  $('body').append('<header id="mainHeader"><nav id="mainNav"><ul id="mainNavUl"><li id="NavLi01" class="NavLi">Locations</li><li id="NavLi02" class="NavLi">Fees</li><li id="NavLi03" class="NavLi">Login</li></ul></nav></header>');
  $('#mainHeader').append('<nav id="phoneNav"><div><i id="hamburgerMenu" class="fas fa-bars"></i></div></nav>');
  $('#phoneNav').append('<div><h1 id="companyName">Top Gyms</h1></div>');
  $('#phoneNav').append('<div><i id="icons" class="fas fa-ellipsis-h"></i></div>');
  $('#mainHeader').append('<div id="nameLocationContainer"><div id="gymName"><h2>silver\'s gym club</h2></div></div>');
  $('#nameLocationContainer').append('<div id="location"><i id="locationIcon" class="fas fa-map-marker-alt"></i><h3 id="locationText">new york, NY</h3></div>');
  $('#NavLi03').before($('<li id="NavLi04" class="NavLi">Contact</li>'));
  $('#hamburgerMenu').click(() => {
    $('#mainNav').toggleClass('menu-show');
    $('.NavLi').hover(function () {
      $(this).toggleClass('highlightLi');
      $(this).addClass('link');
    });
    $('.footerLi').hover(function () {
      $(this).css('cursor', 'pointer');
    });
  });
};

const createReview = (options) => {
  const { id, stars = 5, text = '', name = 'Jane Doe', date = 'yesterday' } = options;
  const review = document.createElement('div');
  review.id = `review${id}`; // = 'rating' + id;
  review.classList.add('review');
  const starsArray = Array(5).fill('<i class="fas fa-star"></i>', 0, Util.validatedStars(stars));
  review.innerHTML = `
            <div class="rating">
              ${starsArray.join('')}
            </div>
            <div class="comment">
              <p>
              ${Util.validatedText(text)}
              </p>
            </div>
            <div class="customerContainer">
              <img class="customerImage" src="images/customer${id}.png" alt="photo of customer ${Util.validatedName(name)}">
              <h3 class="customerName">${Util.validatedName(name)}</h3>
              <h4 class="commentDate">${Util.validatedDate(date)}</h4>
            </div>   
  `;
  return review;
};

const buildSection = () => {
  $('body').append('<div id="tabs"><a id="facilitiesTab" class="tab" href="#">facilities</a><a id="Tab" class="tab" href="#">reviews</a></div>');
  $('body').append('<section id="mainSection"></section>');
  $('#mainSection').append('<div id="reviewContainer"></div>');
  customerReviews.reviews.forEach((review) => {
    $('#reviewContainer').append(createReview(review));
  });
  $('.comment').after($('<p>read more...</p>'));
  $('.comment').prepend($('<p>comment:<p/>'));
};

const buildFooter = () => {
  $('body').append('<footer><ul><li><i class="fab fa-facebook-square footerLi"></i></li><li><i class="fab fa-twitter footerLi"></i></li><li><i class="fas fa-user-plus footerLi"></i></li></ul></footer>');
};

$().ready(() => {
  buildNav();
  buildSection();
  buildFooter();
});
