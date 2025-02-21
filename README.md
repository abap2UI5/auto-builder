# abap2UI5-builder

This repository provides scripts to create abap2UI5 projects, installable with a single abapGit pull.

Features:
* Integrates abap2UI5, frontend, and multiple addons into a single project
* Uses abaplint renaming features, supporting multiple builds on the same system
* Install your project with a single abapGit pull


### Build Process
Clone this repository and adjust the configuration for your build process [here:](https://github.com/abap2UI5/builder/blob/main/build.json)
```json
{
  "abap_version": "Cloud",
  "rename": {
    "active": false,
    "oldName": "z2ui5_(.*)",
    "newName": "z2ui51222_$1"
  },
  "repositories": [
    "abap2UI5",
    "samples"
  ]
}
```
Run the build script:
```
npm ci
npm run build
```
Find your newly generated abapGit project in the `src` folder. Pull this to your ABAP system, and you're ready to go.

### Supported Projects
Check out all supported projects, each with different compatibility [here:](https://github.com/abap2UI5/builder/blob/main/setup/config-repos.jsonc)

| Name      | Renaming | Cloud | v750 | v702 |
|-----------|----------|--------------|-------------|-------------|
| [abap2UI5](https://github.com/abap2UI5/abap2UI5) | true     | true         | true        | true         |
| [samples](https://github.com/abap2UI5/samples)   | false    | true        | true    | true         |

###### Legend
* Renaming: Change Namespace
* Cloud: S/4 Public Cloud, BTP ABAP Environment
* v750: S/4 Private Cloud, S/4 On-Premise, R/3 NetWeaver 750
* v702: R/3 NetWeaver <750

### Namespace
All artifacts are generated under the namespace `zabap2ui5`. This differs from the main repository to allow both versions to coexist on the same system. One version for modifications and contributions (z2ui5), this one for productive usage (zabap2ui5).

Additionally, you can fork this repository and rename the artifacts to your own custom namespace using:
```
...
```
### Credits
* Automagic standalone renaming of ABAP objects [(SCN - 20.02.2021)](https://community.sap.com/t5/application-development-blog-posts/automagic-standalone-renaming-of-abap-objects/ba-p/13499851)

### Issues
For bug reports or feature requests, please open an issue in the [abap2UI5 repository.](https://github.com/abap2UI5/abap2UI5/issues)
