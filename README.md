# Webpack email template
##### webpack-email-template

A simple webpack project to start creating an email template.
![banner](https://psv4.userapi.com/c532036/u141593906/docs/d42/eb3e1bae6005/Frame_1.jpg?extra=gQ2Pxj-Bk0-SCcNd-XHvrfmVahj7FJV1BVczVKfFg7TXE2hpZNC6CnF0bDwstBKdteKB9BndYOQms2hPQdumhlDw3wqdC76hVKyq_reDRllo8RpERQkPXND-H2Qlos_rl5OhdkevCDJAMbPVaj8xBOI2)


### NPM Commands
Launch a web server for development:
```
npm run serve
```
Build a project:
```
npm run build
```
Build a project for production:
```
npm run production
```


### Basic project structure
- src
  - components
    - paragraph.html
  - index.html
  - index.js
- .gitignore
- LICENSE
- package-lock.json
- package.json
- README.md
- webpack.config.js


### Brief description

In `index.html` you can insert the layout of your email.

The `components` directory contains html files that can describe individual blocks, such as an email header, a text block, a product block, and so on.

To insert a block in `index.html` you must call the block using the lodash syntax:
```lodash
<%=_.template(require(‘./link/to/your/component.html’).default)(data)%>
```

The `template` method takes a string with an html template as a parameter. In our case, we get the template using the `require` method.

`data` – any JavaScript object with a set of data that we can use inside the html template which we called.

You can read more about the template method and the lodash template engine [here](https://lodash.com/docs/4.17.15).

### Plugins
- [base64-inline-loader](https://github.com/monolithed/base64-inline-loader) - if you need to integrate images directly into html as a base64 string.