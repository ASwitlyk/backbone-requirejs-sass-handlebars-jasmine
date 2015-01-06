This scaffolding will contain Backbone (with underscore, jquery), RequireJS for AMD, Handlebars
for templating, SASS (CSS preprocessiong), and Jasmine for frontend testing.

Jasmine installed is most recent version at the time of creating the scaffolding (i.e. 2.1.3)
It was manually put into the lib/ folder and npm and bower were not used because npm did not have
the front-end browser version. This may change in the future.

All remaining dependencies will reside within the node_modules folder


RequireJS Notes

- baseURL for script (where requirejs will begin loading modules)
  is in src/index.js since data-main is src/index.js in main index.html file
- shim: To convert non-AMD modules into AMD. Will load dependencies prior to loading
  module. The exports property is the Global object the particular module creates
  when it is loaded (i.e., loading underscore puts a global _ on the Window (this) global object)


SASS

- make sure SASS installed (check with sass -v)
- can precompile your sass with npm run sass
  - the script will compile all sass from root sass file src/sass/style.scss
  - to src/css/style.css
- for dev you can watch the sass directory with npm run sass-dev


Handlebars:

- Scaffolding uses precompiled handlebars templates
- make sure handlebars is installed (handlebars -v)
- template files (in templates/**.hbs) must be precompiled since using their precompiled
  functions in the views. Do this with npm run handlebar-precompile
  - this will precompile all **.hbs files and put them into one js file
  in compiledTemplates/template.js
  - in the npm script command, the -f is the file flag for the output file
  the -a is the amd flag to use the requirejs AMD style in the compiled format
  and the -e is the template extension flag to get rid of the .hbs from the module names
- since using npm for build tool, I added watch to the command line to watch directorys
  - make sure it is installed with npm install -g watch
  - dev option for handlebars will now watch template directory for changes and
  will run handlebars-precompile script when there are changes


npm run dev: will run sass watch and handlebars watch
