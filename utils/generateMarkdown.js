// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return URL string to license badge link (somewhere in github documentation)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // call renderLicenseBadge
  // call renderLicenseLink
  // or
  // return Markdown as a string like following line
  // ## License Used: ${renderLicenseSection(data.license)}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return 
    `# ${answers.title}
   include rest of markdown skeleton here
  ## License Used: ${renderLicenseSection(answers.license)}

`;
}

module.exports = generateMarkdown;
