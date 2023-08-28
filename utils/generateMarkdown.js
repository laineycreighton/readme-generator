// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '![alt text](https://img.shields.io/badge/License-MIT-yellow.svg) <br>';
      case 'Apache 2.0':
        return '![alt text](https://img.shields.io/badge/License-Apache%202.0-blue.svg) <br>';
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
  if (license && license !== 'None') {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);

    if (badge && link) {
      return `
${badge}
Licensed under the ${license} ${link}.
`;
    } else {
      console.warn(`License badge or link missing for '${license}'.`);
    }
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usageInfo}

<video width="700" controls>
  <source src="./video/readme-generator.mp4" type="video/mp4">
</video>

## License
${renderLicenseSection(answers.license)}

## Contributions
${answers.contributions}

## Tests
${answers.test}

## Questions
If you have any questions or need further assistance, feel free to contact me:
- GitHub [${answers.github}](https://github.com/${answers.github})
- Email [${answers.email}](${answers.email})
`;
}

module.exports = generateMarkdown;
