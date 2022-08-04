import * as flsFunctions from './functions.js';

flsFunctions.isWebp();
flsFunctions.menuInit();

$(document).ready(function () {
  // $('.filter-section__title').click(function () {
  //   $(this).parent().children('.filter-section__items').slideToggle('slow');
  // });

  document.querySelector('.filters-block__filters').addEventListener('click', handleFilterTitleClick);

  function handleFilterTitleClick(e) {
    if (e.target.classList.contains('filter-section__title')) {
      const parent = e.target.parentElement;
      flsFunctions._slideToggle(parent.querySelector('.filter-section__items'));
      e.target.classList.toggle('filter-section__title--active');
    }
  }

  let form = $('form.filters-block__filters');
  //   ============= сброс выбранных данных формы
  $('.filters-block__top-reset').click(function () {
    form[0].reset();
    $('.filters-block__top-reset').removeClass('filters-block__top-reset--show');
  });
  //   ====================== появление кнопки сброса данных формы
  form.change(function () {
    let resetBtn = $('.filters-block__top-reset');
    let ckeckedElems = $(this).find('input:checked').length;
    if (ckeckedElems) {
      resetBtn.addClass('filters-block__top-reset--show');
    } else {
      resetBtn.removeClass('filters-block__top-reset--show');
    }
  });
});
