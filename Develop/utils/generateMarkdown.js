// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license !== 'None') {
//     return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
//   } 
//     return '';
// }
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return `\n* [License](#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ` # License`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}


  ## Table of Contents
  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Test](#test)

  *[Questions](#questions)

  # Installation
  To install necessary dependencies, run the following command: 

    ${data.install}


  # Usage
  ${data.usage}


  ${renderLicenseSection(data.license)}

  This project is licensed under ${data.license}

  # Contributing
  ${data.contributing}

  # Test
  To run tests, run the following command:
  ${data.test}

  # Questions
  If you have any questions about the repo, open an issue or contact me directly at 
  ${data.email}. You can find more of my work at github.com/${data.username} 
`;
}

module.exports = generateMarkdown;
