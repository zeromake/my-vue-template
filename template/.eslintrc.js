module.exports = {
    "parser": 'babel-eslint',
    "parserOptions": {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    "env": {
        browser: true,
        amd: true,
        es6: true,
        node: true,
        mocha: true
    },
    "rules": {
        "comma-dangle": 1,
        "strict": 0,
        "quotes": [
            1, "single"
        ],
        "no-undef": 1,
        "global-strict": 0,
        "no-extra-semi": 1,
        "no-underscore-dangle": 0,
        "no-console": 1,
        "no-unused-vars": 1,
        "no-trailing-spaces": [
            1, {
                "skipBlankLines": true
            }
        ],
        "no-unreachable": 1,
        "no-alert": 1
    }
}
