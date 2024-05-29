# This is a React Repo

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Faster Builds using Caching
- Image Optimization
- Minification
- Bundle
- File Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older version browsers or different types of browsers
- Diagnostics
- Error Handling
- HTTPs hosting
- Tree Shaking - removes unused Code
- Different dev and prod bundles

- Two types of Export/ Import

- Default export/import

export default Component;
import Component from "path";

- Named export/import

export const Component;
import {component} from "path;

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Setting Up Testing

- Install React Testing Library
- Installed jest
- Installed Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation. SO that I can Use the new babel Configuration.
- Jest Configuration - npx jext --init
- Install jsdom Library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel Configuration
- Install npm i -D @testing-library/jest-dom
