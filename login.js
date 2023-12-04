describe('Login Test', () => {
  const validCredentials = [
    { username: 'admin@admin.com', password: '2020' },
    { username: 'biancunha@gmail.com, password: '123456' },
	{ username: 'growdev@growdev.com.br', password: 'growdev123' },
   
  ];

  validCredentials.forEach((credentials) => {
    it(`should log in with valid credentials: ${credentials.username}`, () => {
      // Visit the login page
      cy.visit('file:///C:/Users/Admin/Downloads/assignment/testautomation-web/testautomation-web/index.html');

      // Enter username and password
      cy.get('#email').type(credentials.username);
      cy.get('#password').type(credentials.password);

      // Click the login button
      cy.get('#login').click();

      // Assert that the login was successful
      cy.get('div.home').should('be.visible'); 
	  
	  // Capture a screenshot and save it to the screenshots folder
      cy.screenshot('example_screenshot');

    // Get the text content of the entire page
    cy.get('body').invoke('text').then((text) => {
      // Extract the word 'home' from the page content
      const match = text.match(/\bhome\b/i);
      const capturedWord = match ? match[0] : 'Not found';

      // Print the captured word
      cy.log('Captured word:', capturedWord);
	  
	  // Find the element with the text 'Products' and trigger a hover event
    cy.contains('Products').trigger('mouseover');

    // Print a message
    cy.log('Hovered over the element with the text "Products"');
	
	 // Get the text content of the entire page
    cy.get('body').invoke('text').then((text) => {
      // Count the number of words in the page content
      const wordCount = countWords(text);

      // Print the word count
      cy.log('Number of words:', wordCount);
	  
	    // Click on the profile button (replace the selector with the actual selector for your profile button)
    cy.get('user').click();

    // Wait for the profile modal or dropdown to appear (replace the selector with the actual selector)
    cy.get('user').should('be.visible');

    // Click on the logout button inside the profile modal (replace the selector with the actual selector)
    cy.get('logout').click();
     
    });
  });


});
