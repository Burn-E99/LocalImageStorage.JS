# LocalImageStorage.JS V1.0.0 (1/21/17)

A simple library designed to make saving commonly loaded images to localstorage.

LocalImageStorage.JS (Referred as LIS.JS from now on) is designed to allow you to save PNGs to the web browser's localstorage so that future loads of your website are faster and require much less bandwidth.  This is especially useful when you need multiple clients to load the same set of images on a rotating set of pages when limited by network bandwidth and speed.

## Setting LIS.JS up for Use

1. First download the latest release from the release folder, and save it.
2. Next, include the following in your HTML `<head>`: `<script type="text/javascript" src="/path/to/LocalImageStorageVX.X.X.min.js"></script>` (replacing `/path/to` with the path, and X.X.X with the version you are using)
3. [OPTIONAL] To save the typing of LocalImageStorage each time you need to use it, place this code at the top of your JS files to be able to use LIS instead: `var LIS = LocalImageStorage`.

## LIS.JS Docs

* AddImage(String Path, String Name)
  * Adds the image to LocalStorage by using the direct path provided and then saving it under the name provided.
* GetImage(String Name)
  * Returns the image data from LocalStorage (assuming it was Initialized or Added prior to this) to the user using the name provided.
* RemoveImage(String Name)
  * Removes the image from LocalStorage using the name provided in the case that the user does not want it saved anymore.
* InitializeImage(String Path, String Name)
  * Adds the image just the same as AddImage, but instead immediately returns a Promise with the image data.
* GetAvailableSpace()
  * Returns the amount of space left in KB.
* Version()
  * Returns the version number.

## LIS.JS Wishlist

* JPEG/JPG Support
* Documented Code

## Example Code

Please see my test bench at [http://testbench.burne99.com/LIS/examples](http://testbench.burne99.com/LIS/examples) for examples and more information.

## Questions?

If you come across any bugs or compatibility issues with LIS.JS, please submit an issue to this repository, and I will be sure to look into it.

## License

### The MIT License (MIT)
Copyright (c) 2016 Ean Milligan (ean.milligan@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
