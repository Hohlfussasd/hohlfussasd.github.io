// Initialize variables
var blood = 2000;
var bloodPerSecond = 0;
var scorpions = 0;
var scorpionsCost = 10;
var barakas = 0;
var barakaCost = 100;
var noobSaibots = 0;
var noobSaibotCost = 1000;

// Update display of variables
function updateDisplay() {
  document.getElementById("blood").innerHTML = blood.toFixed(2);
  document.getElementById("bloodThisSecond").innerHTML = bloodPerSecond.toFixed(2);
  document.getElementById("scorpions").innerHTML = scorpions;
  document.getElementById("scorpionsCost").innerHTML = scorpionsCost.toFixed(2);
  document.getElementById("barakas").innerHTML = barakas;
  document.getElementById("barakaCost").innerHTML = barakaCost.toFixed(2);
  document.getElementById("noobSaibots").innerHTML = noobSaibots;
  document.getElementById("noobSaibotCost").innerHTML = noobSaibotCost.toFixed(2);
}

// Buy scorpions
function buyScorpions() {
  if (blood >= scorpionsCost) {
    scorpions++;
    blood -= scorpionsCost;
    scorpionsCost = Math.pow(scorpionsCost, 1.1);
    updateDisplay();
  }
}

// Buy barakas
function buyBarakas() {
  if (blood >= barakaCost) {
    barakas++;
    blood -= barakaCost;
    barakaCost = Math.pow(barakaCost, 1.1);
    updateDisplay();
  }
}

// Buy noob saibots
function buyNoobSaibots() {
    if (blood >= noobSaibotCost) {
      noobSaibots++;
      blood -= noobSaibotCost;
      noobSaibotCost *= 1.1;
      updateDisplay();
    }
  }
  
  // Update bloodPerSecond every second
  setInterval(function() {
    var barakasProducing = barakas * 0.1;
    var scorpionsProducing = scorpions * 0.01;
    bloodPerSecond = scorpionsProducing + barakasProducing + (noobSaibots * 100);
    blood += bloodPerSecond;
    updateDisplay();
  }, 1000);
  
  // Save game every 30 seconds
  setInterval(function() {
    var gameData = {
      blood: blood,
      bloodPerSecond: bloodPerSecond,
      scorpions: scorpions,
      scorpionsCost: scorpionsCost,
      barakas: barakas,
      barakaCost: barakaCost,
      noobSaibots: noobSaibots,
      noobSaibotCost: noobSaibotCost
    };
    document.cookie = "gameData=" + JSON.stringify(gameData) + "; max-age=30";
  }, 30000);
  
  // Load game on page load
  window.onload = function() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      if (cookies[i].trim().startsWith("gameData=")) {
        var gameData = JSON.parse(cookies[i].trim().substring(9));
        blood = gameData.blood;
        bloodPerSecond = gameData.bloodPerSecond;
        scorpions = gameData.scorpions;
        scorpionsCost = gameData.scorpionsCost;
        barakas = gameData.barakas;
        barakaCost = gameData.barakaCost;
        noobSaibots = gameData.noobSaibots;
        noobSaibotCost = gameData.noobSaibotCost;
        updateDisplay();
      }
    }
  };
  