module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "indentation": 2,
        "string-quotes": "single",
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": ["composes"]
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": ["global"]
            }
        ],
        "no-descending-specificity": [
            true,
            {
                "ignore": ["selectors-within-list"]
            }
        ]
    }
}
