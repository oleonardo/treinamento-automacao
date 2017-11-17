exports.config = {
    sauceUser: "leonardo.oliveira",
    sauceKey: "5c0d3123-8a68-4f31-9dbc-7b8756ce18c8",
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },
    getPageTimeout: 20000,
    allScriptsTimeout: 600000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        './**/*.feature'
    ],
    cucumberOpts: {
        format: ['json:reports/cucumber_report.json'],
        require: ['./elements/**/*.js', './steps/**/*.js', './support/**/*.js', './pages/**/*.js']
    },
    baseUrl: "https://angularjs.org/",
    ignoreUncaughtExceptions: true,
    onComplete: () => {
    },
    afterLaunch: () => {
    },
    noGlobals: true
};