# abap2UI5-auto-builder

Automatically create your own abap2UI5 version. Choose the language version you need and select the frontend and addons.

Features:
* Integrates abap2UI5, frontend, and multiple addons into a single project
* Rename all artifacts to your custom namespace
* Supports multiple builds on the same system
* Install your new project with a single abapGit pull

### Build Process
1. Clone this repository and adjust the configuration for your build process [here:](https://github.com/abap2UI5/builder/blob/main/build.json)
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
2. Run the build script:
```
npm ci
npm run build
```
3. Find your newly generated abapGit project in the `dist` folder. Create a new branch with for this build with:
```
npm run create_build
```
4. Pull this branch to your ABAP system, and you're ready to go.

### Supported Projects
Check out all supported projects, each with different compatibility [here:](https://github.com/abap2UI5/builder/blob/main/setup/config-repos.jsonc)

| Name      | Renaming | Cloud | v750 | v702 |
|-----------|----------|--------------|-------------|-------------|
| [abap2UI5](https://github.com/abap2UI5/abap2UI5) | X     | X         | X        | X         |
| [samples](https://github.com/abap2UI5/samples)   |     | X        | X    | X         |
| [layout-variant-management](https://github.com/abap2UI5-addons/layout-variant-management)   | X    | X        | X    |          |
| [table-maintenance](https://github.com/abap2UI5-addons/table-maintenance)   | X    | X        | X    |          |

Your project is not listed here? Feel free to extend the list and send a PR.

###### Legend
* Renaming: Change Namespace
* Cloud: S/4 Public Cloud, BTP ABAP Environment
* v750: S/4 Private Cloud, S/4 On-Premise, R/3 NetWeaver 750
* v702: R/3 NetWeaver <750

### Namespace
All artifacts are generated under the namespace `zabap2ui5`. This differs from the main repository to allow both versions to coexist on the same system. One version for modifications and contributions (z2ui5), this one for productive usage (zabap2ui5). Just change the `build.json` for the use of your custom namespace.

Credits: Automagic standalone renaming of ABAP objects [(SCN - 20.02.2021)](https://community.sap.com/t5/application-development-blog-posts/automagic-standalone-renaming-of-abap-objects/ba-p/13499851)

### Concept
<img width="700" alt="image" src="https://github.com/user-attachments/assets/bad5ed8e-2fa3-4ce4-a0d1-fcd1608b4984" />


### Issues
For bug reports or feature requests, please open an issue.
