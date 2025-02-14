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