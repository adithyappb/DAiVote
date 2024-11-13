import joblib
import pandas as pd

# Load the model
model = joblib.load('voting_model.pkl')

# Predict the winner
def predict_winner(data):
    prediction = model.predict(data)
    return prediction

# Example input
data = pd.DataFrame({'age': [30], 'income': [60000], 'education': ['Master'], 'gender': ['Female']})
winner = predict_winner(data)
print(f"The predicted winner is {winner[0]}")
