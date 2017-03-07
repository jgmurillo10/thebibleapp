'use strict';

//Its better to extract this URL to an Environment Variable, right now I can access your DB and delete all entries.
module.exports = {
  'port': process.env.PORT || 3000,
  'url' : 'mongodb://admin:thebible@ds161059.mlab.com:61059/thebible'
};
