

# abap2UI5-builder

This repository provides scripts to create abap2UI5 projects that can be installed with a single abapGit pull.

Features:
* Integrates abap2UI5, frontend, and multiple addons into a single project.
* Uses abaplint renaming features, supporting multiple builds on the same system
* Install your project with a single abapGit pull.


### Build Process
Clone this repository and adjust the configuration for your build process:
```json
{
  "abap_version": "Cloud",
  "input": "input",
  "output": "output",
  "rename": {
    "active": false,
    "oldName": "z2ui5_(.*)",
    "newName": "z2ui51222_$1"
  },
  "repositories": [
    "abap2UI5",
    "samples"
  ],
  "config_repos": "./config-repos.jsonc"
}
```
Run the build script:
```
npm ci
npm run build
```
Check the output folder containing your newly generated abapGit project. Save it in a separate branch and install it with abapGit.


### Supported Projects
The following projects are supported, each with different compatibility:

| Name      | Renaming | Cloud | v750 | v702 |
|-----------|----------|--------------|-------------|-------------|
| [abap2UI5](https://github.com/abap2UI5/abap2UI5) | true     | true         | true        | true         |
| [samples](https://github.com/abap2UI5/samples)   | false    | true        | true    | true         |


### Default Builds
Pre-generated builds are available. Simply switch to the required branch:

| Branch    | Language Version | System                | 
|-----------| ---------------------------| ----------------------------|
| cloud     | ABAP Cloud | S/4 Public Cloud, BTP ABAP Environment |
| standard  | Standard ABAP | S/4 Private Cloud, S/4 On-Premise, R/3 NetWeaver >750   |

[![build_750](https://github.com/abap2UI5/test/actions/workflows/build_750.yml/badge.svg)](https://github.com/abap2UI5/test/actions/workflows/build_750.yml)
[![build_750_addons](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml/badge.svg)](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml)

### Namespace
All artifacts are generated under the namespace `zabap2ui5`. This differs from the main repository to allow both versions to coexist on the same system. One version for modifications and contributions (z2ui5), this one for productive usage (zabap2ui5).

Additionally, you can fork this repository and rename the artifacts to your own custom namespace using:
```
...
```


### Contribution
This repository contains auto-generated code from every commit made to the main abap2UI5 repository. Please contribute via the main abap2UI5 project for code changes. Pull Requests can not be accepted here, as changes will be overwritten automatically.

### Issues
For bug reports or feature requests, please open an issue in the [abap2UI5 repository.](https://github.com/abap2UI5/abap2UI5/issues)
