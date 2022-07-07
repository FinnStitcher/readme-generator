// [![Alt text](image source)](outgoing link)
const licenses = {
	"Apache 2.0": {
		name: "Apache 2.0",
		imgLink: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
		infoLink: "https://opensource.org/licenses/Apache-2.0",
	},
	"CC0 1.0": {
		name: "CC0 1.0",
		imgLink: "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
		infoLink: "https://creativecommons.org/publicdomain/zero/1.0",
	},
	"CC BY 4.0": {
		name: "CC BY 4.0",
		imgLink: "https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg",
		infoLink: "https://creativecommons.org/licenses/by/4.0",
	},
	"CC BY-NC 4.0": {
		name: "CC BY-NC 4.0",
		imgLink:
			"https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg",
		infoLink: "https://creativecommons.org/licenses/by-nc/4.0",
	},
	"GNU GPL v3": {
		name: "GPL v3",
		imgLink: "https://img.shields.io/badge/License-GPLv3-blue.svg",
		infoLink: "https://www.gnu.org/licenses/gpl-3.0",
	},
	"ISC License": {
		name: "ISC",
		imgLink: "https://img.shields.io/badge/License-ISC-blue.svg",
		infoLink: "https://opensource.org/licenses/ISC",
	},
	"MIT License": {
		name: "MIT",
		imgLink: "https://img.shields.io/badge/License-MIT-yellow.svg",
		infoLink: "https://opensource.org/licenses/MIT",
	},
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (!license) {
		return "";
	}

	const selectedLicense = licenses[license];
	const {name, imgLink, infoLink} = selectedLicense;

	return `[![License: ${name}](${imgLink})](${infoLink})`;
}

function addTestingSection(text) {
    if (text) {
		return `## Testing
        ${text}`;        
    }
	else {
        return '';
	};
}

function addContact(github, email) {
    if (github) {
        return `For questions or further information, reach out to ${email}. This project is owned and managed by [https://github.com/${github}|${github}].`
    } else {
        return `For questions or further information, reach out to ${email}.`
    }
};

// generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}
${data.description}
${renderLicenseBadge(data.license)}

## Installation
${data.install}

## How to Use
${data.use}

## How to Contribute
${data.contribute}

${addTestingSection(data.test)}

## Questions
${addContact(data.github, data.email)}`;
}

module.exports = generateMarkdown;
