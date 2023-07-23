// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* Installation
* Usage
* License
* Contributions
* Tests

## Installation
${data.installation}

## Usage
${data.usageInfo}

## License
${renderLicenseSection(data.license)}

## Contributions
${data.contributions}

## Tests
${data.test}

## Questions
If you have any questions or need further assistance, feel free to contact me:
- GitHub [${data.github}](https://github.com/${data.github})
- Email [${data.email}]
`;
}

module.exports = generateMarkdown;
