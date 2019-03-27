(function() {

  var packageData = [{
      name: '1. atom-beautify',
      description: 'Beautify HTML, CSS, JavaScript, and more in Atom.',
      author: 'Glavin001',
      url: 'https://atom.io/packages/atom-beautify',
      downloads: 6020750,
      stars: 5051,
      selector: 'p1',
    },
    {
      name: '2. highlight selected',
      description: 'Highlight the current word selected when double-clicking.',
      author: 'richrace',
      url: 'https://atom.io/packages/highlight-selected',
      downloads: 171248,
      stars: 3053,
      selector: 'p2',
    },
    {
      name: '3. pigments',
      description: 'A package to display colors in project and files.',
      author: 'abe33',
      url: 'https://atom.io/packages/pigments',
      downloads: 2543447,
      stars: 3603,
      selector: 'p3',
    }
  ];

  function createPackage(packageData) {
    this.name = packageData.name;
    this.description = packageData.description;
    this.author = packageData.author;
    this.url = packageData.url;
    this.downloads = packageData.downloads;
    this.stars = packageData.stars;
    this.selector = packageData.selector;

    this.getFormattedDownloads = function() {
      return this.downloads.toLocaleString();
    }

    this.getFormattedStars = function() {
      return this.stars.toLocaleString();
    }
  }

  var getElement = function(id) {
    return document.getElementById(id);
  }

  /**
   * @param {createPackage} package
   * @return {void}
   */

  var displayPackage = function(package) {
    var selector = package.selector,
      nameEl = getElement(selector + '-name'),
      descEl = getElement(selector + '-description'),
      authorEl = getElement(selector + '-author'),
      urlEl = getElement(selector + '-url'),
      dlEl = getElement(selector + '-downloads'),
      starsEl = getElement(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authorEl.textContent = package.author;
    urlEl.textContent = package.url;
    dlEl.textContent = package.downloads;
    starsEl.textContent = package.stars;
  }

  for (var i = 0; i < packageData.length; i++) {
    var package = new createPackage(packageData[i]);
    displayPackage(package);
  }
}());
