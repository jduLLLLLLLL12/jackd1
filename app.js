(function () {
  "use strict";

  // --- State ---
  let selectedCity = null;
  const preferences = {};

  // Initialize all preferences to 5 (neutral)
  LIFESTYLE_DIMENSIONS.forEach(function (dim) {
    preferences[dim.key] = 5;
  });

  // --- DOM refs ---
  const stepCity = document.getElementById("step-city");
  const stepPrefs = document.getElementById("step-preferences");
  const stepResults = document.getElementById("step-results");
  const cityGrid = document.getElementById("city-grid");
  const slidersContainer = document.getElementById("sliders-container");
  const resultsList = document.getElementById("results-list");
  const resultsCityName = document.getElementById("results-city-name");

  // --- Navigation ---
  function showStep(step) {
    [stepCity, stepPrefs, stepResults].forEach(function (s) {
      s.classList.remove("active");
    });
    step.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Build City Grid ---
  function renderCities() {
    Object.keys(CITIES).forEach(function (cityName) {
      var city = CITIES[cityName];
      var card = document.createElement("button");
      card.className = "city-card";
      card.innerHTML =
        '<span class="city-emoji">' + city.emoji + "</span>" +
        '<div class="city-name">' + cityName + "</div>" +
        '<div class="city-count">' + city.neighborhoods.length + " neighborhoods</div>";
      card.addEventListener("click", function () {
        selectedCity = cityName;
        showStep(stepPrefs);
      });
      cityGrid.appendChild(card);
    });
  }

  // --- Build Sliders ---
  function renderSliders() {
    LIFESTYLE_DIMENSIONS.forEach(function (dim) {
      var row = document.createElement("div");
      row.className = "slider-row";

      row.innerHTML =
        '<div class="slider-header">' +
          '<span class="slider-label"><span class="icon">' + dim.icon + "</span>" + dim.label + "</span>" +
          '<span class="slider-value" id="val-' + dim.key + '">5</span>' +
        "</div>" +
        '<div class="slider-desc">' + dim.description + "</div>" +
        '<input type="range" min="0" max="10" value="5" id="slider-' + dim.key + '">';

      slidersContainer.appendChild(row);

      var slider = document.getElementById("slider-" + dim.key);
      var valueDisplay = document.getElementById("val-" + dim.key);

      slider.addEventListener("input", function () {
        preferences[dim.key] = parseInt(slider.value, 10);
        valueDisplay.textContent = slider.value;
      });
    });
  }

  // --- Matching Algorithm ---
  // Weighted cosine-like similarity: each dimension is weighted by the
  // user's preference value. Higher preference = more weight in the score.
  function scoreNeighborhood(neighborhood) {
    var weightedSum = 0;
    var maxPossible = 0;

    LIFESTYLE_DIMENSIONS.forEach(function (dim) {
      var weight = preferences[dim.key];
      var nScore = neighborhood.scores[dim.key] || 0;
      weightedSum += weight * nScore;
      maxPossible += weight * 10;
    });

    if (maxPossible === 0) return 0;
    return weightedSum / maxPossible;
  }

  function getResults() {
    var city = CITIES[selectedCity];
    if (!city) return [];

    var scored = city.neighborhoods.map(function (n) {
      return { neighborhood: n, score: scoreNeighborhood(n) };
    });

    scored.sort(function (a, b) { return b.score - a.score; });
    return scored;
  }

  // --- Render Results ---
  function renderResults() {
    resultsList.innerHTML = "";
    resultsCityName.textContent = selectedCity;

    var results = getResults();

    results.forEach(function (item, index) {
      var n = item.neighborhood;
      var pct = Math.round(item.score * 100);
      var rank = index + 1;

      var card = document.createElement("div");
      card.className = "result-card" + (rank <= 3 ? " rank-" + rank : "");

      // Build score tags
      var tagsHtml = "";
      LIFESTYLE_DIMENSIONS.forEach(function (dim) {
        var s = n.scores[dim.key] || 0;
        var userPref = preferences[dim.key];
        // Only show tags for dimensions the user cares about (>= 3)
        if (userPref >= 3) {
          var tagClass = "score-tag";
          if (s >= 8) tagClass += " high";
          else if (s <= 3) tagClass += " low";
          tagsHtml += '<span class="' + tagClass + '">' + dim.icon + " " + s + "/10</span>";
        }
      });

      var boroughHtml = n.borough
        ? '<div class="result-borough">' + n.borough + "</div>"
        : "";

      card.innerHTML =
        '<div class="result-rank">#' + rank + "</div>" +
        '<div class="result-name">' + n.name + "</div>" +
        boroughHtml +
        '<span class="result-vibe">' + n.vibe + "</span>" +
        '<div class="match-bar-container">' +
          '<div class="match-label">' +
            '<span>Match</span>' +
            '<span class="match-percent">' + pct + "%</span>" +
          "</div>" +
          '<div class="match-bar">' +
            '<div class="match-bar-fill" style="width: 0%"></div>' +
          "</div>" +
        "</div>" +
        '<div class="result-description">' + n.description + "</div>" +
        '<div class="result-meta">' +
          "<span>Avg Rent: <strong>$" + n.avgRent.toLocaleString() + "/mo</strong></span>" +
        "</div>" +
        '<div class="score-tags">' + tagsHtml + "</div>";

      resultsList.appendChild(card);

      // Animate the match bar after a short delay
      setTimeout(function () {
        card.querySelector(".match-bar-fill").style.width = pct + "%";
      }, 80 + index * 60);
    });
  }

  // --- Button Events ---
  document.getElementById("btn-back-city").addEventListener("click", function () {
    showStep(stepCity);
  });

  document.getElementById("btn-find").addEventListener("click", function () {
    renderResults();
    showStep(stepResults);
  });

  document.getElementById("btn-back-prefs").addEventListener("click", function () {
    showStep(stepPrefs);
  });

  document.getElementById("btn-start-over").addEventListener("click", function () {
    selectedCity = null;
    showStep(stepCity);
  });

  // --- Init ---
  renderCities();
  renderSliders();
})();
