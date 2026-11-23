

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
app = FastAPI(title="Smart Sales Prediction System")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load the trained machine learning model
with open("sales_model.pkl", "rb") as file:
    model = pickle.load(file)
class SalesInput(BaseModel):
    Advertising: float
@app.get("/")
def home():
    return {"message": "Smart Sales Prediction System is running!"}
@app.post("/predict")
def predict_sales(data: SalesInput):
    prediction = model.predict([[data.Advertising]])
    return {
        "Advertising": data.Advertising,
        "Predicted_Sales": round(float(prediction[0]), 2)
    }
