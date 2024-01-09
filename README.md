# Ecommerce Store🛒

`Live preview 👉` https://ecommerce-store-frontend-rust.vercel.app/

Welcome to our E-commerce Store, a modern and efficient platform designed to provide users with a seamless online shopping experience. This comprehensive repository houses the codebase for both the frontend and backend components, utilizing cutting-edge technologies. On the frontend, we leverage the power of `React and TypeScript`, ensuring a dynamic and scalable user interface. The inclusion of `React Tables` enhances data management, streamlining product browsing for a more efficient shopping journey. Meanwhile, our `admin dashboard` offers a holistic view of the business, featuring insightful analytics through bar charts, pie charts, and line charts, providing real-time information on transactions, customers, and user activities. Fun fact - `SCSS` is used here!🎨

Our E-commerce Store boasts a range of functionalities, including product management, a user-friendly shopping cart for adding and reviewing items, a seamless order placement process, and real-time tracking of order statuses. The integration of the Stripe payment gateway ensures secure and seamless transactions.🛍️

The ecommerce backend is a robust and efficient solution developed using `Node.js and Express`, incorporating various technologies to ensure seamless functionality. The database architecture is designed with a combination of `Firebase` for authentication and `MongoDB` for storing all collections and data, providing a secure and scalable foundation for the ecommerce platform.🍀

Firebase is utilized for user authentication, ensuring a reliable and secure login process. MongoDB serves as the primary database, offering a flexible and scalable solution for storing diverse data collections related to products, orders, and other essential ecommerce entities. The use of `TypeScript` enhances the codebase by introducing static typing, making it more maintainable and reducing the likelihood of runtime errors.✒️

For payment processing, the integration of the `Stripe` payment gateway adds a secure and efficient means of handling transactions. This enables the ecommerce platform to provide a seamless and trustworthy payment experience for users.💸

To optimize data retrieval, the implementation includes `NodeCache` for caching. By storing frequently accessed data locally, the system significantly reduces the latency associated with fetching information from the database. This ensures a responsive user experience, with initial data fetch times exceeding 50ms and subsequent retrievals reduced to `less than 10ms` due to efficient local caching.🏪

The codebase follows the `REST architectural style`, offering a clear and standardized set of APIs and endpoints for communication between the frontend and backend. The use of the `MVC (Model-View-Controller) pattern` enhances code organization, making it more modular and maintainable. This design choice promotes scalability and flexibility, allowing for easier feature additions and modifications.🌵

The application is structured as a `monolith`, simplifying deployment and maintenance. It is hosted on `render.com`, providing a reliable and scalable hosting platform. The deployment ensures that the APIs and endpoints are live, enabling seamless interaction with the ecommerce platform. Essential packages, such as `Multer` for image storage and CORS for preventing cross-origin issues, contribute to the overall robustness and security of the backend code.🐪

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
