<style>
.outer-panel {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    border-radius: 0.9375rem;
    border: 1px solid;
    padding: 0;
    box-shadow: 0.3125rem 0.625rem 0.5rem 0.625rem #888888;
    overflow: auto;
    min-width: 4.6875rem;
    max-width: 93.75rem;
    width: auto;
    min-height: 46.875rem;
    max-height: 375rem;
}

.inner-panel {
    margin: auto;
    padding: 0.3125rem;
    text-align: center;
    height: auto;
    max-height: 6.875rem;
    background-color: #0000ff;
    color: white;
    width: auto;
}

.white-header {
    color: white;
    text-align: center;
  }

.button-wrapper {
    padding: 1rem 0 1rem;
    margin: 0;
}

.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-inline {
    width: auto;
    height: auto; /* Maintain aspect ratio */
    max-width: 95%;
    max-height: 80rem;
    display: block; /* Key: Makes the image a block element */
    margin: 1rem auto; /* Key: Centers the image horizontally */
}

.table-wrapper {
    padding: 0 1.875rem;
    margin: 0;
}

.section-button {
    /* Default button styles */
    background-color: #e0e0e0;
    color: #333;
    padding: 0.625rem 1.25rem;
    border: none;
    cursor: pointer;
    margin: 1rem 1.25rem;
}

.section-button:hover {
    /* Hover styles */
    background-color: #ddd;
}

.section-button.active {
    /* Active button styles */
    background-color: #0000ff;
    color: white;
}

[id^="table-service"] {
    /* Target the entire table */
    font-size: 1rem;
    border-collapse: collapse;
}

[id^="table-service"] th {
    /* Target table header elements */
    font-size: 1.4rem;
    text-align: center;
    padding-top: 1.25rem;
    font-weight: 500!important;
}

[id^="table-service"] td {
    /* Target table cell elements */
    font-size: 1.3rem;
    text-align: center;
    padding: 0;
}

/**
<script>
    
    <div class="button-wrapper">
        <button class="section-button sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" onclick="scrollToSection('service-proposition')">Value</button>
        <button class="section-button sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" onclick="scrollToSection('service-overview')">Highlights</button>
    </div>

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });

        // Update active button (optional)
        const buttons = document.querySelectorAll('.section-button');
        buttons.forEach(button => button.classList.remove('active'));
        const activeButton = document.querySelector(`.section-button[onclick="scrollToSection('${sectionId}')"]`);
        activeButton.classList.add('active');
    }
</script>
**/
</style>
