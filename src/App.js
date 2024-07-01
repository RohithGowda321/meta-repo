import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

const App = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My App</title>
        {isProduction && (
          <>
            <meta name="description" content="This app provides end-to-end information about the Global Coffee Industry" />
            <meta property="og:title" content="www.coffeeweb.com" />
            <meta property="og:description" content="This app provides end-to-end information about the Global Coffee Industry" />
            <meta property="og:url" content="www.coffeeweb.com" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeeweb_menu_icons/CoffeeWeb_Logo_White_Background_Blue_Text.png" />
          </>
        )}
      </Helmet>
      <h1>Hello, world!</h1>
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
