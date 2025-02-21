[![build_750](https://github.com/abap2UI5/test/actions/workflows/build_750.yml/badge.svg)](https://github.com/abap2UI5/test/actions/workflows/build_750.yml)
[![build_750_addons](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml/badge.svg)](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml)

# abap2UI5-builds

This repository provides script to create abap2UI5 projects installable it with a single abapGit pull.

# Projects
The follwowing projects are supported:
| Branch    | Content |
|-----------|------------------|
| cloud     | abap2UI5, http handler       |
| standard      |  abap2UI5, http handler, bsp  |
|   -    |    |
| +addons  | layout-variant, table-maintenance, sql-console |


#### Default Builds
Some default build get auto generated:

| Branch    | Language Version | System                | 
|-----------| ---------------------------| ----------------------------|
| cloud     | ABAP Cloud | S/4 Public Cloud, BTP ABAP Environment |
| standard  | Standard ABAP | S/4 Private Cloud, S/4 On-Premise, R/3 NetWeaver >750   |

#### Content
| Branch    | Content |
|-----------|------------------|
| cloud     | abap2UI5, http handler       |
| standard      |  abap2UI5, http handler, bsp  |
|   -    |    |
| +addons  | layout-variant, table-maintenance, sql-console |


#### Build Process

#### Namespace
All artifacts are generated under the namespace `zabap2ui5`. This differs from the main repository to allow both versions to coexist on the same system. One version for modifications and contributions (z2ui5), this one for productive usage (zabap2ui5).

Additionally, you can fork this repository and rename the artifacts to your own custom namespace using:
```
...
```

#### Build
Setup your configuration:
```json
{
  "inputDir": "input",
  "outputDir": "src",
  "repos": [
    {
      "url": "https://github.com/abap2UI5/abap2UI5",
      "branch": "702",
      "active": true,
      "sourceDir": "src",
      "targetDir": "01"
    },
    {
      "url": "https://github.com/abap2UI5/samples",
      "branch": "702",
      "active": true,
      "sourceDir": "src",
      "targetDir": "02"
    }
  ]
}
```
Run:
```
npm ci
npm run build
```

#### Contribution
This repository contains auto-generated code from every commit made to the main abap2UI5 repository. Please contribute via the main abap2UI5 project for code changes. Pull Requests can not be accepted here, as changes will be overwritten automatically.

#### Issues
For bug reports or feature requests, please open an issue in the [abap2UI5 repository.](https://github.com/abap2UI5/abap2UI5/issues)
