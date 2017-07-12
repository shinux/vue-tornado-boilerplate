# vue-tornado-boilerplate

### Feature

- Tornado: no less speed than Node.JS.
- ES6
- Vue 2
- Webpack 3


### Usage

    git clone https://github.com/shinux/vue-tornado-boilerplate.git

`pipenv` is recommended rather than pure `virtualenv` or `virtualenv-wrapper`, it depends.

    pip install -r requirements.txt

**built mode**(Webpack builds client side code into `bundle.js`, and tornado starts serving):

    npm run build
    npm run server

**develop mode**(both webpack-dev-server and tornado starts, perform hot-reload):

    npm run dev

access from browser:

    open http://localhost:8888

### License

**MIT**
