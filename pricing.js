<style>

.outer-panel
{
   margin: 0px;
   text-align: center;
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   overflow: auto;
   min-width: 250px;
   max-width: 1200px;
   width: auto;
   min-height: 400px;
   max-height: 1200px;
}

.inner-panel
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

.white-header 
{
    color: white;
}

.div-pricing-plan
{
   margin: 0px;
   text-align: center;
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   overflow: auto;
   min-width: 250px;
   max-width: 1200px;
   width: auto;
   min-height: 600px;
   max-height: 1600px;
}

.div-pricing-outer
 {
   text-align: center;
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   overflow: auto;
   min-width: 300px;
   max-width: 775px;
   width: auto;
   min-height: 350px;
   max-height: 750px;
}

.div-pricing-optional-services-outer
{
   text-align: center;
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   overflow: auto;
   min-width: 250px;
   max-width: 775px;
   width: auto;
   min-height: 900px;
   max-height: 1500px;
}
  
.div-pricing
{
   padding: 0px;
   background-color: #ffffff;
   text-align: center;
   overflow: auto;
   position: relative;
   min-width: 100%;
   min-height: 100%;
}
  
.table-pricing 
{
    width: auto;
   	margin-right: auto;  
	margin-left: auto; 
}
  
.table-pricing-header 
{
   	border: 1px solid;
 	color: #000000;
   	text-align: center;
}
  
.table-pricing-cell 
{
   	border: 1px solid;
 	color: #000000;
   	text-align: right;
}


/* Slider buttons */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 90%;
  width: 25px;
  left: 4px;
  top: 5%;
  bottom: auto;
  background-color: white;
  -webkit-transition: .4s;
  transition: .2s;
}

input:checked + .slider {
  background-color: #000fff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
/* END - Slider buttons */
  
/* Drop Down Lists */
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
/* END - Drop Down Lists */

</style>

<script>

function showPricing() 
{
  var subscriptionTypeHeader = document.getElementById("subscription_type_header");
  var planPrice = document.getElementById("plan_price");
  var planPriceDiscount = document.getElementById("plan_price_discount");
  var planPriceDiscountDescription = document.getElementById("plan_price_discount_description");
  
  var billingFrequency = document.getElementById("billing_frequency_annual");
  var qboSubscriptionSelected = document.getElementById("select_qbo_subscription");
  var payrollSubscriptionSelected = document.getElementById("select_payroll");
  var billPaySubscriptionSelected = document.getElementById("select_bill_pay");
  var numberOfEmployees = document.getElementById("number_of_employees");
  var numberOfBillPayItems = document.getElementById("number_of_bill_pay_items");
  
  var qboSubscriptionPrice = 0;
  var payrollSubscriptionPrice = 0;
  var billPaySubscriptionPrice = 0;
  var totalSubscriptionPrice = 0;
  var billingFrequencyDescription = "";

  const bookkeepingSubscriptionPrice = 399;
  const perEmployeeFee = 25;
  const perBillPayItemFee = 1;

  var totalEmployeesCost = 0;
  var totalBillPayItemsCost = 0;

  var totalPayrollCost = 0;
  var totalBillPayCost = 0;

  var totalAnnualCost = 0;
  var savingsWhenPaidAnnually = 0;
  var discountedMonthlyCostForAnnualSubscription = 0;

  var averageCostPerMonth = 0;

  var planPriceDiscountDescriptionExplanation = "Savings When Paid Annually";

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    });

  if (billingFrequency.checked === true)
  {
    subscriptionTypeHeader = "Annual Bookkeeping Services";
    billingFrequencyDescription = "Average Per Month (Billed Annually)";    
  }
  else
  {
    subscriptionTypeHeader = "Monthly Bookkeeping Services";
    billingFrequencyDescription = "Per Month (Billed Monthly)";    
  }

  if (qboSubscriptionSelected.checked === true) {qboSubscriptionPrice = 99;}
  
  if (payrollSubscriptionSelected.checked === true) 
  {
    payrollSubscriptionPrice = 99;
    numberOfEmployees.disabled = false;    
    totalEmployeesCost = (perEmployeeFee * numberOfEmployees.value);
    totalPayrollCost = (payrollSubscriptionPrice + totalEmployeesCost);
  }
  else
  {
    numberOfEmployees.disabled = true;
    numberOfEmployees.value = 0;
    payrollSubscriptionPrice = 0;
    totalEmployeesCost = 0;
    totalPayrollCost = 0;
  }
  
  if (billPaySubscriptionSelected.checked === true) 
  {
    billPaySubscriptionPrice = 99;
    numberOfBillPayItems.disabled = false;
    totalBillPayItemsCost = (perBillPayItemFee * numberOfBillPayItems.value);
    totalBillPayCost = (billPaySubscriptionPrice + totalBillPayItemsCost);
  }
  else
  {
    numberOfBillPayItems.disabled = true;
    numberOfBillPayItems.value = 0;
    billPaySubscriptionPrice = 0;
    totalBillPayItemsCost = 0;
    totalBillPayCost = 0;
  }

  totalSubscriptionPrice = bookkeepingSubscriptionPrice + qboSubscriptionPrice + totalPayrollCost + totalBillPayCost;
  
  totalAnnualCost = totalSubscriptionPrice * 12;
  
  savingsWhenPaidAnnually = (bookkeepingSubscriptionPrice + qboSubscriptionPrice + payrollSubscriptionPrice + billPaySubscriptionPrice);
  discountedMonthlyCostForAnnualSubscription = (totalAnnualCost - savingsWhenPaidAnnually) / 12;
  
  if (billingFrequency.checked === true)
  {
    averageCostPerMonth = (discountedMonthlyCostForAnnualSubscription);
    planPriceDiscountDescriptionExplanation = "Savings When Paid Annually";
    planPriceDiscount.style="color: black; margin: 0px; padding: 0px;"
    planPriceDiscount.innerHTML = USDollar.format(savingsWhenPaidAnnually);
  }
  else
  {
    averageCostPerMonth = (totalSubscriptionPrice);
    planPriceDiscountDescriptionExplanation = "Lost Annual Savings When Paid Monthly";
    planPriceDiscount.style="color: red; margin: 0px; padding: 0px;"
    planPriceDiscount.innerHTML = "(" + USDollar.format(savingsWhenPaidAnnually) + ")";
  }

  /** averageCostPerMonth = USDollar.format(averageCostPerMonth); **/
  plan_price.innerHTML = USDollar.format(averageCostPerMonth).concat("*");
  plan_price_description.innerHTML = billingFrequencyDescription;  
  planPriceDiscountDescription.innerHTML = planPriceDiscountDescriptionExplanation;
}

</script>
