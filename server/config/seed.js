/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import SitePage from '../api/sitePage/sitePage.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

SitePage.find({}).remove()
  .then(() => {
    SitePage.create({
      name: 'amazon.com',
      rating: 4.5,
      numberReviews: 0,
      reviews: [{
        thisIsFillerModel: "Im Sleepy",
        descript: "This is a gr8 site. I buy still from here all ze time.",
        rate: 5
      }, {
        thisIsFillerModel: "Hello World",
        descript: "This is an ok site.",
        rate: 4
      }, {
        thisIsFillerModel: "Angular Js",
        descript: "I buy still from here all teh time.",
        rate: 5
      }],
      category: 'Shopping'
    }, {
      name: 'amazon.ca',
      rating: 4.1,
      numberReviews: 0,
      reviews: [],
      category: 'Shopping'
    }, {
      name: 'google.com',
      rating: 4.8,
      numberReviews: 0,
      reviews: [],
      category: 'Other'
    });
  });
