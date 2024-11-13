import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Load dataset
data = pd.read_csv('../data/voting_data.csv')

# Prepare features and labels
X = data.drop('winner', axis=1)
y = data['winner']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model
import joblib
joblib.dump(model, 'voting_model.pkl')
