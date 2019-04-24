# Source

```js
import React from "react"
import { FormattedMessage } from "react-intl"

export default function Hello() {
  return <FormattedMessage id="foo"/>
}
```

# Bundle Actual

```js
'use strict';

require('react');
require('react-intl');

function Hello() {
  return <FormattedMessage id="foo"/>
}

module.exports = Hello;
```

# Bundle Expected

```js
'use strict';

require('react');
var reactIntl = require('react-intl');

var FormattedMessage = reactIntl.FormattedMessage;

function Hello() {
  return <FormattedMessage id="foo"/>
}

module.exports = Hello;
```
