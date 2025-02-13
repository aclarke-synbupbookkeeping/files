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