'use strict';

var Raven = require( 'raven-js' );

Raven.config('https://abc123@example.com/').install();

// This will *not* be reported to sentry
foo();

// This will be correctly reported to sentry
// (if you comment the error above)
setTimeout(function() { bar2(); });
