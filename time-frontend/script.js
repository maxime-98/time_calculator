async function calculate() {
    const currentTime = document.getElementById("currentTime").value;
    const duration = document.getElementById("duration").value;
    const operation = document.getElementById("operation").value;
  
    const response = await fetch("https://time-calculator-api-rci5.onrender.com/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentTime,
        duration: parseInt(duration),
        operation
      }),
    });
  
    const data = await response.json();
  
    if (data.result) {
      document.getElementById("result").innerText =
        `${data.result.time} le ${data.result.date}`;
    } else {
      document.getElementById("result").innerText = "Erreur : " + (data.error || "inconnue");
    }
  }
  