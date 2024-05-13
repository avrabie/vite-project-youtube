# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This template uses the official `@vitejs/plugin-react` plugin.

This is a 1-1 follow of tutorial from https://www.youtube.com/watch?v=LDB4uaJ87e0&t=5612s

# Reproduction

This is the tutorial of the video above:
[YouTube Traversy Media](https://www.youtube.com/watch?v=LDB4uaJ87e0)

1. Start a vite project from scratch:
2. Make sure you have node installed and npm
3.  npm install vite

    1.2. Install Vite globally
    `npm init vite@latest my-vite-project`
    Select react
    
   1.3. Docs about react: https://vitejs.dev/guide/features.html#react
      react.dev

2. Change the port of the server in:
    `vite.config.js`
    ```js
    export default {
      server: {
        port: 3000
      }
    }
    ```
3. Install project dependencies and you can Run the project:
    ```bash
    npm install
    npm run dev
    ```
   Install Json-Server
    ```bash
    npm install -D  json-server
    npx json-server --watch data/db.json --port 8000
    ```
   Instead of using the `npx json-server` you can modify/add scripts inside package.json to:
    ```json
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "serve": "vite preview",
      "json-server": "json-server --watch data/db.json --port 8000"
    }
    ```
    Then you can run the json-server with:
    ```bash
    npm run json-server
    ```
    And you can run the project with:
    ```bash
    npm run dev
    ```
   
4. Add the following dependencies:
    ```bash
    npm install react-router-dom
    npm install react-icons
    npm install react-toastify

[//]: # (    npm install @emotion/react @emotion/styled)
[//]: # (    npm install react-query)
[//]: # (    npm install react-hook-form)
[//]: # (    npm install react-select)
[//]: # (    npm install react-table)

5. Install tailwind

Search for the latest version of tailwindcss, postcss and autoprefixer in npmjs.com
https://tailwindcss.com/docs/guides/vite

    ```bash
    
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p
    ```
    ```bash
    npm install @headlessui/react
    npm install @heroicons/react
    npm install @heroicons
    ```
6. Change the tailwind.config.js file to:
    ```js
    module.exports = {
      mode: 'jit',
      purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
    ```
   Then add the following to the `index.css` file:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
   