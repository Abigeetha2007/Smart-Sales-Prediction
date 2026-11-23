Smart Sales Prediction System

About the Project

Smart Sales Prediction is a machine learning-based application that predicts sales based on advertising expenditure.

The project uses Linear Regression to understand the relationship between advertising investment and sales. Users can enter an advertising budget throu then why you gh a React interface and receive predicted sales.

Technologies Used

- Python
- Machine Learning
- Linear Regression
- Pandas
- Scikit-learn
- FastAPI
- React.js
- JavaScript
- HTML
- CSS

Project Workflow

1. Machine Learning: Train a Linear Regression model using historical sales data.
2. Backend: FastAPI loads the trained model and provides a prediction API.
3. Frontend: React provides a user interface for entering the advertising budget.
4. Prediction: The backend predicts sales and sends the result to the frontend.

Project Files

- "main.py" – FastAPI backend.
- "train_model.py" – Machine Learning model training.
- "sales_data.csv" – Dataset used for training.
- "sales_model.pkl" – Saved trained model.
- "App.jsx" – React application.
- "App.css" – Application styling.
- "index.css" – Global styling.
- "main.jsx" – React entry point.

How to Run the Project

1. Train the Machine Learning Model

python train_model.py

2. Start the Backend

uvicorn main:app --reload

3. Start the Frontend

Open another terminal:

npm install
npm run dev

Open the local URL displayed by Vite in your browser.

Model Used

Linear Regression

Project Objective

To demonstrate how Machine Learning can be integrated with a backend API and a frontend application to make sales predictions based on advertising expenditure.
