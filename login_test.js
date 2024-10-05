Feature('login');

Scenario('Login with valid credentials', ({ I }) => {
  I.amOnPage('https://github.com/login');
  I.fillField('Username or email address', 'nasif1731');
  I.fillField('Password', 'Cumin432');
  I.click('Sign in');
  
  // Wait for the page to load after signing in
  I.waitForNavigation();
  I.see('Dashboard'); // Replace with a specific element that appears after login
});

Scenario('Login with invalid credentials', ({ I }) => {
  I.amOnPage('https://github.com/login');
  I.fillField('Username or email address', 'invalid_username');
  I.fillField('Password', 'invalid_password');
  I.click('Sign in');
  
  // Wait for error message to appear
  I.waitForText('Incorrect username or password.', 5); // Waits for up to 5 seconds
  I.see('Incorrect username or password.');
});

Scenario('Login with too many failed attempts', ({ I }) => {
  I.amOnPage('https://github.com/login');
  
  for (let i = 0; i < 10; i++) { // Simulate 10 failed attempts
    I.fillField('Username or email address', 'invalid_username');
    I.fillField('Password', 'invalid_password');
    I.click('Sign in');
    
    // Wait for error message to appear
    I.waitForText('Incorrect username or password.', 5);
    I.see('Incorrect username or password.');
  }
});
Scenario('Terms',({I})=> {
  I.amOnPage('https://github.com/login');
  I.click('Terms');

  // Wait for the terms of service form to appear
  I.waitForText('GitHub Terms of Service', 5);
  
});

Scenario('Forgot Password', ({ I }) => {
  I.amOnPage('https://github.com/login');
  I.click('Forgot password?');
  
  // Wait for the reset password form to appear
  I.waitForText('Verify your account', 5);
});
