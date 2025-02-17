[![build_750](https://github.com/abap2UI5/test/actions/workflows/build_750.yml/badge.svg)](https://github.com/abap2UI5/test/actions/workflows/build_750.yml)
[![build_750_addons](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml/badge.svg)](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml)

# abap2UI5 Builds

This repository provides builds of abap2UI5 for various SAP systems. Switch to the branch you need and install it with a single abapGit pull.

#### Branch

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


#### Namespace
All artifacts are generated under the namespace `zabap2ui5`. This differs from the main repository to allow both versions to coexist on the same system. One version for modifications and contributions (z2ui5), this one for productive usage (zabap2ui5).

Additionally, you can fork this repository and rename the artifacts to your own custom namespace using:
```
...
```

#### Contribution
This repository contains auto-generated code from every commit made to the main abap2UI5 repository. Please contribute via the main abap2UI5 project for code changes. Pull Requests can not be accepted here, as changes will be overwritten automatically.

#### Issues
For bug reports or feature requests, please open an issue in the [abap2UI5 repository.](https://github.com/abap2UI5/abap2UI5/issues)
