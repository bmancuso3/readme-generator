// Function to render the proper license badge under the title
function renderLicenseBadge(answers) {
  if(answers.license === 'MIT') {
    return "<img src='https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge'>"
  }
  else if(answers.license === 'Apache 2.0') {
    return "<img src='https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge'>"
  }
  else if(answers.license === 'Mozilla') {
    return "<img src='https://img.shields.io/badge/License-MPL_2.0-FF7139.svg?style=for-the-badge'>"
  }
  else if(answers.license === 'GNU') {
    return "<img src='https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge'>"
  }
  else {
    return ''
  }
}

// Function to send the proper license link to renderLicenseSection
function renderLicenseLink(answers) {
  if(answers.license === 'MIT') {
    return "License Link: https://en.wikipedia.org/wiki/MIT_License"
  }
  else if(answers.license === 'Apache 2.0') {
    return "License Link: http://www.apache.org/licenses/LICENSE-2.0"
  }
  else if(answers.license === 'Mozilla') {
    return "License Link: https://choosealicense.com/licenses/mpl-2.0/"
  }
  else if(answers.license === 'GNU') {
    return "License Link: https://www.gnu.org/licenses/gpl-3.0.txt"
  }
  else {
    return "License Link: None"
  }
}

// Function to render selected license description
function renderLicenseSection(answers) {
  renderLicenseLink(answers);
  if(answers.license === 'MIT') {
    "MIT LICENSE: Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
  }
  else if(answers.license === 'Apache 2.0') {
    "APACHE 2.0 LICENSE: Licensed under the Apache License, Version 2.0 (the License); you may not use this file except in compliance with the License. You may obtain a copy of the License at the link above. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License."
  }
  else if(answers.license === 'Mozilla') {
    "MOZILLA LICENSE: This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. You can obtain a copy of this license at the link above. If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice. You may add additional accurate notices of copyright ownership."
  }
  else if(answers.license === 'GNU') {
    "GNU LICENSE: This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You can obtain a copy of the GNU General Public License at the link above."
  }
  else {
    "No license has been applied to this project."
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
  ${renderLicenseBadge(answers)}

## Description
    ${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact Info](#contact-info)
* [Questions](#questions)
* [License](#license-used)

## Installation
    ${answers.instructions}

## Usage
    ${answers.usage}

## Contributing
    ${answers.contributing}

## Tests
    ${answers.tests}

## Contact Info
Please refer any questions through the contact information below:

    Github Username: ${answers.github}
    Email: ${answers.email}

## Questions
    ${answers.contact}

## License Used
${renderLicenseSection(answers)}
`;
}

module.exports = {generateMarkdown};
