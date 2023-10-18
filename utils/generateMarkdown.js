// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return URL string to license badge link (somewhere in github documentation)
}
// MIT [Badge License]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge
// Apache 2.0 [Badge License]: https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge
// Mozilla [Badge License]: https://img.shields.io/badge/License-MPL_2.0-FF7139.svg?style=for-the-badge
// GNU [Badge License]: https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}
// MIT [License]: https://en.wikipedia.org/wiki/MIT_License
// Apache 2.0 [License]: http://www.apache.org/licenses/LICENSE-2.0
// Mozilla [MPL 2]: https://choosealicense.com/licenses/mpl-2.0/
// GNU [GPLv3]: https://www.gnu.org/licenses/gpl-3.0.txt

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // call renderLicenseLink
  // or
  // return Markdown as a string like following line
  // ## License Used: ${renderLicenseSection(data.license)}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
  ${renderLicenseBadge(answers.license)}

## Description
    ${answers.description}

## Table of Contents
    

## Installation
    ${answers.instructions}

## Usage
    ${answers.usage}

## Contributing
    ${answers.contributing}

## Tests
    ${answers.tests}

## License Used
    ${renderLicenseSection(answers.license)}

## Contact Info
Please refer any questions through the contact information below:
    ${answers.github}
    ${answers.email}

## Questions
    ${answers.contact}
`;
}

module.exports = {generateMarkdown};
