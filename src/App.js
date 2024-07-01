import React from 'react';

function App() {
  return (
    <div>
      {process.env.REACT_APP_ENV === 'production' ? (
        <>
          <meta name="description" content="Production description" />
          <meta property="og:title" content="Production Title" />
        <meta property="og:image" content="https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeeweb_menu_icons/CoffeeWeb_Logo_White_Background_Blue_Text.png" />

          {/* Add other production meta tags */}
        </>
      ) : (
        <>
          <meta name="description" content="Development description" />
          <meta property="og:title" content="Development Title" />
          {/* Add other development meta tags */}
        </>
      )}
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </div>
  );
}

export default App;
