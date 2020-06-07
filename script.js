$(() => {
  $('#js-shopping-list-form').on('click','button', e => {
      e.preventDefault();
      const userInput = $('#shopping-list-entry').val();
      $('.shopping-list').append(`<li class="item-container">
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      $('#shopping-list-entry').val("");
    });
    //
    $('.shopping-list').on('click', 'li > .shopping-item-controls > button.shopping-item-toggle', function(e) {
      $(this).closest('li').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', 'li > .shopping-item-controls > button.shopping-item-delete', function(e) {
      $(this).closest('li').remove();
    });

});

//When a user types something in to the form, and hits submit
//Create an li with a shopping-item inside of it
//When a user hits check, toggle the class .shopping-item__checked
//When a user hits delete .remove() $(this)
