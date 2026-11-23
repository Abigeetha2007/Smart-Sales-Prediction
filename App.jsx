
import { useState } from "react";
import "./index.css";

function App() {
  const [advertising, setAdvertising] = useState("");
  const [predictedSales, setPredictedSales] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async (e) => {
    e.preventDefault();

    if (advertising === "" || Number(advertising) < 0) {
      setError("Please enter a valid advertising budget.");
      setPredictedSales(null);
      return;
    }

    setLoading(true);
    setError("");
    setPredictedSales(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Advertising: Number(advertising),
        }),
      });

      if (!response.ok) {
        throw new Error("Prediction failed. Please try again.");
      }

      const data = await response.json();
      setPredictedSales(data.Predicted_Sales);
    } catch (err) {
      setError(
        "Cannot connect to the backend. Please make sure FastAPI is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <span className="brand-icon">S</span>
          <span>SmartSales</span>
        </div>
        <span className="nav-label">AI-Powered Sales Forecasting</span>
      </header>

      <main className="main-content">
        <section className="hero">
          <span className="badge">MACHINE LEARNING PROJECT</span>

          <h1>
            Predict Your <span>Sales</span>
          </h1>

          <p>
            Discover how advertising investment can influence sales using
            Machine Learning and Linear Regression.
          </p>
        </section>

        <section className="prediction-card">
          <div className="card-heading">
            <div className="heading-icon">↗</div>
            <div>
              <h2>Sales Prediction</h2>
              <p>Enter your advertising expenditure below.</p>
            </div>
          </div>

          <form onSubmit={handlePredict}>
            <label htmlFor="advertising">Advertising Budget</label>

            <div className="input-wrapper">
              <span className="input-symbol">₹</span>
              <input
                id="advertising"
                type="number"
                min="0"
                step="any"
                placeholder="Enter advertising amount"
                value={advertising}
                onChange={(e) => setAdvertising(e.target.value)}
                required
              />
            </div>

            <small>
              Enter a value in the same units used by your training dataset.
            </small>

            <button type="submit" disabled={loading}>
              {loading ? "Predicting..." : "Predict Sales →"}
            </button>
          </form>

          {error && <div className="error-message">{error}</div>}

          {predictedSales !== null && (
            <div className="result-card">
              <span className="result-label">PREDICTED SALES</span>
              <h3>{Number(predictedSales).toLocaleString("en-IN")}</h3>
              <p>
                Estimated using your trained Linear Regression model.
              </p>
            </div>
          )}
        </section>

        <section className="info-grid">
          <div className="info-card">
            <span className="info-icon">📊</span>
            <h3>Data-Driven</h3>
            <p>Uses your sales dataset to learn the relationship between advertising and sales.</p>
          </div>

          <div className="info-card">
            <span className="info-icon">🧠</span>
            <h3>Linear Regression</h3>
            <p>Applies a machine learning model trained on historical data.</p>
          </div>

          <div className="info-card">
            <span className="info-icon">⚡</span>
            <h3>Instant Results</h3>
            <p>Connects the React interface to your FastAPI prediction endpoint.</p>
          </div>
        </section>

        <footer>
          SmartSales Prediction System | Built with React, FastAPI and
          Machine Learning
        </footer>
      </main>
    </div>
  );
}

export default App;
