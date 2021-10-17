const testContext = require.context('./src', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);
