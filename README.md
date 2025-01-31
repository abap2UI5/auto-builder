# abap2UI5 Builds

[![build_750](https://github.com/abap2UI5/test/actions/workflows/build_750.yml/badge.svg)](https://github.com/abap2UI5/test/actions/workflows/build_750.yml)

This repository provides builds of abap2UI5 for various SAP systems. Switch to the branch you need and install it with a single abapGit pull.

#### Branch

| Branch    | System                | 
|-----------|----------------------------|
| cloud     | S/4 Public Cloud, BTP ABAP Environment |
| 750      | S/4 Private Cloud, S/4 On-Premise    |
| 702      | R/3 NetWeaver                   |
| node      | node, open-abap                  |

#### Content
| Branch    | Language, Version   | Content | Info                | 
|-----------|-------------------| ------------------| ------------------|
| cloud     | ABAP, Cloud | abap2UI5, http handler       | |
| 750      | ABAP, Standard  | abap2UI5, http handler, bsp  | |
| 702      | ABAP, Standard  | abap2UI5, http handler       | Downported |
| node      | JavaScript, Node.js | abap2UI5, icf shim     |  Transpiled |


### Namespace
All artifacts are generated under the namespace `zabap2ui5`. This differs from the main repository to allow both versions to coexist on the same system. One version for modifications and contributions (z2ui5), this one for productive usage (zabap2ui5).

Additionally, you can fork this repository and rename the artifacts to your own custom namespace using:
```
...
```

### PR
This repository contains auto-generated code from every commit made to the main abap2UI5 repository. Please contribute via the main abap2UI5 project for code changes. Pull Requests can not be accepted here, as changes will be overwritten automatically.

### Issues
For bug reports or feature requests, please open an issue in the main abap2UI5 repository.
