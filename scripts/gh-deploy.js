const ghpages = require('gh-pages');
const path = require('path');

// Documentation deployment
ghpages.publish(
  path.join(__dirname, '..', 'dist'),
  {
    src: [
      '**/*.*',
    ],
    message: 'Automatic deployment update',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('No error in the demo website deployment');
    }
  }
);
