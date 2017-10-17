describe('Visibility', function(){
  it('does not work as intended for the widget example', function() {
    cy.
      visit('https://jsfiddle.net/benb88/8j89jbzh/3/show').
      // expect this input to be visible
      // but it says the content is clipped by one of its parent elements
      get('input.budget-input').
        type('135');
  });
})
