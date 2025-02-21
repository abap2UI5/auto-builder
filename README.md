[![build_750](https://github.com/abap2UI5/test/actions/workflows/build_750.yml/badge.svg)](https://github.com/abap2UI5/test/actions/workflows/build_750.yml)
[![build_750_addons](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml/badge.svg)](https://github.com/abap2UI5/builds/actions/workflows/build_750_addons.yml)

# abap2UI5-builder

This repository provides scripts to create abap2UI5 projects installable it with a single abapGit pull.

Features:
* integrate abap2UI5, frotnend and mulptiple addons in a single project
* rename with abaplint renaming feature
* install your project wiht a sinlge abapgit pull
* run multiple builds oin the same system
  

### Build Process

Pull this repository and adjust the config for your build process:
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
Run the build script:
```
npm ci
npm run build
```
check out the folder putput with you newly generaten abapgit project, save in for exmaple in a separated branch with:
```
npm run create_project test
```


### Supported Projects
The follwowing projects are supported, all with different compatibility:

| Name      | Renaming | Cloud | v750 | v702 |
|-----------|----------|--------------|-------------|-------------|
| [abap2UI5](https://github.com/abap2UI5/abap2UI5) | true     | main         | main        | 702         |
| [samples](https://github.com/abap2UI5/samples)   | false    | cloud        | standard    | 702         |


### Default Builds
Some default build get auto generated and are avalible, just switch to the needed branch:

| Branch    | Language Version | System                | 
|-----------| ---------------------------| ----------------------------|
| cloud     | ABAP Cloud | S/4 Public Cloud, BTP ABAP Environment |
| standard  | Standard ABAP | S/4 Private Cloud, S/4 On-Premise, R/3 NetWeaver >750   |


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
