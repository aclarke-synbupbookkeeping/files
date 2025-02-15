<style>
.div-header-label-info-graphic
{
   margin: auto;
   padding: 5px;
   text-align: center;
   height: auto;
   max-height: 110px;
   background-color: #0000ff;
   color: white;
   width: auto;
}

.header-graphic
{
   margin: auto;
   padding: 5px;
   text-align: center;
   height: auto;
   max-height: 110px;
   background-color: #0000ff;
   color: white;
   width: auto;
}

.startup-costs-calculator-content {
    line-height: 1.5;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

.startup-costs-calculator-heading {
  /* Styles for the main headings (h2) */
  font-size: 1.5rem;
  color: #000fff; /* Your blue accent color */
  margin-bottom: 1rem;
}

.startup-costs-calculator-subheading {
  /* Styles for subheadings (h3) */
  font-size: 1.3rem;
  color: #333; 
  margin-bottom: 0.5rem;
}

.startup-costs-calculator-paragraph {
  /* Styles for paragraphs */
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.startup-costs-calculator-list {
  /* Styles for lists */
  font-size: 1.2rem;
  list-style: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

/* Column widths for general-costs table */
#general-costs th:nth-child(1),
#general-costs td:nth-child(1) {
    width: 90%;
}

#general-costs th:nth-child(2),
#general-costs td:nth-child(2) {
    width: 10%;
}

/* Column widths for industry-specific tables */
.table-calculator-startup th:nth-child(1),.table-calculator-startup td:nth-child(1) {
    width: 90%;
}

.table-calculator-startup th:nth-child(2),.table-calculator-startup td:nth-child(2) {
    width: 10%;
}

/* Hide all industry tables initially, but not the selector */
/** Commented out - 10-FEB-2025 - Andrew - Show table at all times.
section[id$="-costs"]:not(#industry-specific-costs) {
    display: none;
}
**/
/* Hide category totals and grand total initially */
#category-totals { 
  display: none; 
}
#grand-totals { 
  display: none; 
}

#grand-totals {
    margin-top: .25rem;
    text-align: center;
}

#grand-totals h3 {
    font-size: 1.2rem; /* 19.2px converted to rem */
    color: #000fff;
}

#grand-total-value {
    font-weight: bold;
    font-size: 1.1rem; /* Slightly larger for emphasis */
}

.subtotal-label {
    text-align: right;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: #f5f5f5;
}

.image-calculator-startup {
    width: auto; /* Example width in REM units */
    height: auto; /* Maintain aspect ratio */
    max-width: 95%;
    max-height: 80rem;
    display: block; /* Key: Makes the image a block element */
    margin: 1rem auto; /* Key: Centers the image horizontally */
}

.startup-costs-calculator-image-container {
    display: flex;
  justify-content: center; /* Center horizontally */
  margin: 1rem 0; /* Add some top/bottom margin */
}

/* Target the entire table */
.table-calculator-startup {
    font-size: 0.875rem!important; /* 14px converted to rem */
    width: 90%!important; /* Keep your existing width, but add!important */
    border-collapse: collapse!important; /* Make sure borders collapse */
    border: 1px solid #000fff!important; /* Keep your border style */
    margin-right: 15px!important;
    margin-left: 15px!important;
}

.table-calculator-startup th { /* Target table headers */
    font-size: 0.875rem!important; /* 14px converted to rem */
    padding: 0.5rem!important; /* 8px converted to rem */
    border: 1px solid #000fff!important; /* Keep your border style */
}

.table-calculator-startup td { /* Target table cells */
    font-size: 0.875rem!important; /* 14px converted to rem */
    padding: 0.5rem!important; /* 8px converted to rem */
    border: 1px solid #000fff!important; /* Keep your border style */
}

.table-header-calculator-startup { /* Target category headers */
    font-size: 1rem!important; /* 16px converted to rem */
    font-weight: bold!important;
    text-align: center!important;
    background-color: #e0e0e0!important;
    color: #000000!important;
    padding: 0.5rem!important; /* 8px converted to rem */
    colspan: 2!important; /* Corrected typo here */
}

.table-cell-label-calculator-startup { /* Target labels */
    font-size: 0.875rem!important; /* 14px converted to rem */
    text-align: right!important;
    color: #000000!important;
    padding: 0.5rem!important; /* 8px converted to rem */
    line-height: 1.5; /* Testing to see if this will help with cramped text on the phone. Or a larger value if needed */
}

.table-cell-input-calculator-startup { /* Target input fields */
    font-size: 0.875rem!important; /* 14px converted to rem */
    text-align: right!important;
    color: #000000!important;
    padding: 0.5rem!important; /* 8px converted to rem */
}

/* Optional: Style the select dropdown */
#industry-select {
    font-size: 0.875rem!important; /* 14px converted to rem */
    max-height: 12.5rem; /* 200px converted to rem (200 / 16) */
    overflow-y: auto;
}

/* Optional: Style the total cost display */
#total-cost-value {
    font-size: 1rem!important; /* 16px converted to rem */
    font-weight: bold!important;
}

/* Target the 'Startup Costs Estimator' header */
.div-header-label-info-graphic h1 {
    font-size: 1.5rem!important;  /* Adjust as needed */
}

/* Target the 'Select your industry:' header */
.div-calculator-industry-selector h2 {
    font-size: 1.2rem!important;  /* Adjust as needed */
    padding: 0rem!important;
    margin: 0rem!important;
}

.div-calculator-industry-selector {
    border-bottom: 1px solid #000fff; 
    margin-top: 1.25rem;
    margin-bottom: 0rem;
    padding-bottom: .5rem;
}
  
/* Target the 'Industry-Specific Costs' header */
#div-header-industry-costs h2 {
    font-size: 1.2rem!important;  /* Adjust as needed */
}

#header-industry-costs {
    margin-top: .25rem;
    margin-bottom: .5rem;
    padding: 0rem;
    display: none;
}

#header-industry-costs button { 
    width: 8rem!important;   /* Adjust width as needed */
    height: 3rem!important;  /* Adjust height as needed */
    font-size: 0.9rem!important;  /* Adjust font size as needed */
    padding: 0rem!important; /* Adjust padding as needed */
}

/* Target the 'General Costs' header */
#div-header-general-costs h2 {
    font-size: 1.2rem!important;  /* Adjust as needed */
}

/* Target table rows (both headers and regular rows) */
.table-calculator-startup tr {
    line-height: .5rem; /* Adjust this value as needed */
}

#category-totals h3 {
    margin-top: 1.25rem; /* 20px converted to rem */
    font-size: 1.2rem!important;  /* Adjust as needed */
    color: #000fff;
}

#category-totals-table {
    margin-top: 1.25rem; /* 20px converted to rem */
    font-size: 1.2rem!important;  /* Adjust as needed */
    color: #000fff;
}

</style>
    
<script>
        function populateForm(industry, costData) {
            // Clear industry-specific table container
            document.getElementById('industry-specific-table').innerHTML = '';

            // Create the industry-specific table
            const industryTable = document.createElement('table');
            industryTable.classList.add('table-calculator-startup');
            const industryTbody = industryTable.appendChild(document.createElement('tbody'));

            // Populate industry-specific table (if industry is selected)
            if (industry!== 'general' && costData[industry]) {
                const industryData = costData[industry];
                for (const category in industryData) {
                    const headerRow = industryTbody.insertRow();
                    const headerCell = headerRow.insertCell();
                    headerCell.classList.add('table-header-calculator-startup');
                    headerCell.colSpan = 2;
                    headerCell.id = `${industry}-${category}-header`;

                    // Use category name directly (no renaming needed now)
                    headerCell.textContent = category;

                    industryData[category].forEach(itemData => {
                        const row = industryTbody.insertRow();
                        const labelCell = row.insertCell();
                        labelCell.classList.add('table-cell-label-calculator-startup');
                        const labelText = industry === 'general'? itemData.item: itemData.item.split(',').pop().trim();
                        labelCell.innerHTML = `<label for="${industry}-${category}-${itemData.item}">${labelText}</label>`;

                        const inputCell = row.insertCell();
                        inputCell.classList.add('table-cell-input-calculator-startup');
                        inputCell.innerHTML = `<input type="number" step="100" value="${itemData.cost}" oninput="calculateTotalCost()" id="${industry}-${category}-${itemData.item}">`;
                    });

                    // Add subtotal row for the category (Industry-specific)
                    const subtotalRow = industryTbody.insertRow();
                    const subtotalLabelCell = subtotalRow.insertCell();
                    const subtotalValueCell = subtotalRow.insertCell();
                    subtotalLabelCell.classList.add('table-cell-label-calculator-startup');
                    subtotalLabelCell.classList.add('subtotal-label');
                    subtotalLabelCell.textContent = "Subtotal";
                    subtotalValueCell.id = `${industry}-${category}-subtotal`;
                    subtotalValueCell.classList.add('subtotal-label');
                    subtotalValueCell.textContent = "0";
                }
                document.getElementById('industry-specific-table').appendChild(industryTable);
            }
        }

        async function fetchCostData() {
            try {
                const response = await fetch('https://aclarke-synbupbookkeeping.github.io/files/costs.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching or parsing JSON:', error);
                return null;
            }
        }

        async function updateIndustryTable() {
            const selectedIndustry = document.getElementById('industry-select').value;
            const costData = await fetchCostData();

            if (selectedIndustry) {
                if (costData) {
                    populateForm(selectedIndustry, costData); // Single call to populateForm()

                    // Show the selected industry's table (if it exists)
                    const selectedTable = document.getElementById(`${selectedIndustry}-costs`);
                    if (selectedTable) {
                        selectedTable.style.display = 'block';
                    }

                    // Show the header-industry-costs panel
                    document.getElementById('header-industry-costs').style.display = 'block';

                    // Show the grand totals
                    document.getElementById('grand-totals').style.display = 'block';
                }
            } else {
                // Hide all tables if no industry is selected
                const industryTables = document.querySelectorAll('section[id$="-costs"]:not(#industry-specific-costs)');
                industryTables.forEach(table => {
                    table.style.display = 'none';
                });

                // Hide the header-industry-costs panel
                document.getElementById('header-industry-costs').style.display = 'none';

                // Hide the grand totals
                document.getElementById('grand-totals').style.display = 'none';

                // Clear the industry-specific table
                const industrySpecificTable = document.getElementById('industry-specific-table');
                industrySpecificTable.innerHTML = '';
            }

            calculateTotalCost();
        }

        function calculateTotalCost() {
            const selectedIndustry = document.getElementById('industry-select').value; // Get the selected industry

            let totalCost = 0;
            let USDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
            });

            const inputFields = document.querySelectorAll('input[type="number"]');

            if (selectedIndustry) { // Only calculate IF an industry is selected

                inputFields.forEach(inputField => {
                    const inputValue = parseFloat(inputField.value);

                    // Logging statement
                    console.log("Input field ID:", inputField.id, "Value:", inputValue);

                    if (!isNaN(inputValue)) {
                        totalCost += inputValue;
                    } else {
                        console.error(`Invalid input value in field ${inputField.id}: ${inputField.value}`);
                    }
                });

            } else { // Handle the case where no industry is selected

                // Clear grand total
                const grandTotalValue = document.getElementById('grand-total-value');
                grandTotalValue.innerText = USDollar.format(0); // Or any default value you prefer

                return; // Exit the function early
            }

            // Calculate category totals
            const categoryTotals = {};
            inputFields.forEach(inputField => {
                const [industry, category, subCategory] = inputField.id.split('-'); // Extract all three levels
                const categoryKey = `${industry}-${category}-${subCategory}`; // Include subCategory in the key
                const inputValue = parseFloat(inputField.value);
                if (!isNaN(inputValue)) {
                    categoryTotals[categoryKey] = (categoryTotals[categoryKey] || 0) + inputValue;
                }
            });

            // Logging statement
            console.log("Category totals:", categoryTotals);

            // Update category subtotals in the tables
            for (const categoryKey in categoryTotals) {
                // *** Add console.log for debugging ***
                console.log("Category Key:", categoryKey);

                const subtotalId = `${categoryKey}-subtotal`;

                // *** Add console.log for debugging ***
                console.log("Subtotal ID:", subtotalId);

                const subtotalCell = document.getElementById(subtotalId);
                if (subtotalCell) {
                    subtotalCell.textContent = USDollar.format(categoryTotals[categoryKey]);
                } else {
                    // Logging statement
                    console.log("Subtotal cell not found for ID:", subtotalId);
                }
            }

            // Update grand total
            const grandTotalValue = document.getElementById('grand-total-value');
            grandTotalValue.innerText = USDollar.format(totalCost);
        }

        function resetValuesToZero() {
            const inputFields = document.querySelectorAll('input[type="number"]');

            inputFields.forEach(inputField => {
                inputField.value = 0;
            });

            calculateTotalCost();
        }
    </script>