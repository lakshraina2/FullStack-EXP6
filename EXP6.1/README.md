# Experiment-1: Handling Forms Using Controlled Components

## Aim
To create and handle forms in a frontend application using controlled components in React.

## Software Requirements
- Node.js
- React
- VS Code
- Web Browser

## Theory
Controlled components are React components in which form data is handled by the component's state. This provides complete control over user input.

## Features
This React application demonstrates a comprehensive form with controlled components including:

1. **First Name** - Text input
2. **Last Name** - Text input
3. **Date of Birth** - Date picker
4. **Gender** - Radio buttons (Male/Female/Other)
5. **Skills** - Multiple checkboxes (JavaScript, React, Python, Node.js)
6. **Address** - Textarea
7. **State** - Dropdown selection (California, Texas, Florida, New York, Illinois)

All form inputs are controlled by React state using `useState`. When the form is submitted, all entered data is displayed in an alert dialog.

## Installation

1. Navigate to the project directory:
```bash
cd controlled-form-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Build for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
controlled-form-app/
├── src/
│   ├── App.jsx          # Main form component with controlled inputs
│   ├── App.css          # Styles for the form
│   └── main.jsx         # Application entry point
├── index.html
└── package.json
```


## Technologies Used
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling


## License
This project is created for educational purposes.
