
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['rkp7qWLQHCmR9Ro3fpzJa'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  