
import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# Load the sales dataset
data = pd.read_csv("sales_data.csv")

# Input: Advertising
X = data[["Advertising"]]

# Output: Sales
y = data["Sales"]

# Train the machine learning model
model = LinearRegression()
model.fit(X, y)

# Save the trained model
with open("sales_model.pkl", "wb") as file:
    pickle.dump(model, file)

print("Sales prediction model trained successfully!")
