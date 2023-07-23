// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Apache 2.0':
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      default:
        console.warn(`License badge not found for '${license}'.`);
    }
  }
  return ''; // Return an empty string if there is no license.
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {

    const licenseLinks = {
      MIT: 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    };

    if (licenseLinks.hasOwnProperty(license)) {

      return `[License](${licenseLinks[license]})`;
    } else {

      console.warn(`License link for '${license}' not found.`);
    }
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);

    if (badge && link) {
      return `
        ## License
        ${badge}
        Licensed under the ${link}.
      `;
    } else {
      console.warn(`License badge or link missing for '${license}'.`);
    }
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contributions] (#contributions)
* [Tests] (#tests)
* [Questions] (#questions)

## Installation {#installation}
${data.installation}

## Usage {#usage}
${data.usageInfo}

## License {#license}
${renderLicenseSection(data.license)}

## Contributions {#contributions}
${data.contributions}

## Tests {#tests}
${data.test}

## Questions {#questions}
If you have any questions or need further assistance, feel free to contact me:
- GitHub [${data.github}](https://github.com/${data.github})
- Email [${data.email}]
`;
}

module.exports = generateMarkdown;
