backbone-requirejs-sass-handlebars-jasmine
==========================================

> A frontend scaffolding using backbone, requirejs, sass, handlebars, and jasmine testing. Dependencies and build handled through npm

This is a front-end scaffolding utilizing backbone for the framework, requirejs for the AMD, sass for optional css preprocessing, handlebars for templating, and jasmine 2.1.3 for testing.

## Requirements:

The scaffolding uses npm for dependency management and basic testing and build tools (precompiling templates and css).

The scaffolding uses [watch](https://www.npmjs.com/package/watch) to watch for file/folder changes during development. Install watch on the command line with:
`npm install -g watch`

The handlebars templates are precompiled for efficiency through the [Handlebars CLI](https://www.npmjs.com/package/handlebars). Install on the command line with:
`npm install -g handlebars`
Make sure it's installed with:
'handlebars -v'

The SASS/SCSS is compiled into CSS through the sass CLI, install with:
`npm install -g sass`
Make sure it's installed with:
'sass -v'

## Installing
Clone the repository and cd into the cloned directory. Install the dependencies with: `npm install`

## Usage

For development:
* `npm run dev`  This will watch the src/sass and src/templates directory for changes and precompile any changed or new files/folders

There is currently no server included with this scaffolding so you the entry point is currently just index.html.

### Testing

The Jasmine testing suite is being utilized, version 2.1.3. The entry point for the tests is currently just opening SpecRunner.html in your browser of choice. This will change in future versions if a server is added.

Add test suites to the test/spec folder and add them to the runner by including them the files as a module within the require([], function(){}) statement in the SpecRunner.html file.

A basic example of loading RequireJS modules for use within Jasmine 2.0+ is contained in the test/spec/example_test.js file.

## Misc:

Some miscellaneous details on the scaffolding

### RequireJS

RequireJS is utilized for AMD and it's configuration resides within src/requirejsConfig.js

### Templating

For efficiency, the Handlebars templates are precompiled into javascript code. The templates are compiled from the src/templates/ folder into the src/compiledTemplates/template.js file. Template files should have the handlebars suffix .hbs. The templates are name spaced by Handlebars on the module exported from the src/compiledTemplates/template.js file by their respective filename (sans suffix) After compilation, the template javascript file resides within src/compiledTemplates/template.js, which is the requireJS module *template*.

#### Example Templating Usage

Utilize the example template **example.hbs*** residing within src/templates/example.hbs with requireJS syntax by first making sure the template is precompiled (if in dev mode this will be done for you or you can manually precompile templates by running `npm run handlebars-precompile` on the CLI). Then use precompiled template:

```
require(['template'], function(template) {
// if only one template file in src/templates/ folder, compiled // template will reside on base template module. This example
// assumes there are multiple files in the folder

template['example'](context);

});

```

## License
Released under the MIT license.
