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
${data.description}

## Table of Contents
- [License](#license)
- [How to Install](#how-to-install)
- [How to Use](#how-to-use)
- [How to Contribute](#how-to-contribute)
- [Testing](#testing)
- [Contact Me](#contact-me)

## License

## How to Install

## How to Use

## How to Contribute

## Testing

## Contact Me
`;
}

module.exports = generateMarkdown;
