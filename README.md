
> Open this page at [https://k3soft-hard.github.io/husky_lens_functions/](https://k3soft-hard.github.io/husky_lens_functions/)

## Introduction

This extension adds features for beginners to control the husky lens camera

## Usage Example

* Show coordinates on husky lens display
```blocks
huskylens.initI2c()
basic.forever(function () {
    K3huskyLens.showCoordinates(1, 100, 30)
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/k3soft-hard/husky_lens_functions** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/k3soft-hard/husky_lens_functions** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
