# abap2UI5-auto-builder

Automatically create your own abap2UI5 version. Choose the language version you need and select the frontend and addons.

Features:
* Integrates abap2UI5, frontend, and multiple addons into a single project
* Supports multiple builds on the same system via abaplint renaming feature
* Install your new project with a single abapGit pull

### Build Process
Clone this repository and adjust the configuration for your build process [here:](https://github.com/abap2UI5/builder/blob/main/build.json)
```json
{
  "abap_version": "Cloud",
  "rename": {
    "active": false,
    "oldName": "z2ui5_(.*)",
    "newName": "zabap2ui5_$1"
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

### Credits
* Automagic standalone renaming of ABAP objects [(SCN - 20.02.2021)](https://community.sap.com/t5/application-development-blog-posts/automagic-standalone-renaming-of-abap-objects/ba-p/13499851)

### Issues
For bug reports or feature requests, please open an issue in the [abap2UI5 repository.](https://github.com/abap2UI5/abap2UI5/issues)
