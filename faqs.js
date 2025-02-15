<style>

.accordion {
  background-color: #eee;
  color: #0000ff;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border-radius: 25px;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
}
   
.active, 
.accordion:hover, 
.accordion-subscriptions-bookkeeping:hover, 
.accordion-subscriptions-software:hover, 
.accordion-subscriptions-payroll:hover, 
.accordion-subscriptions-billpay:hover 
{
  background-color: #ccc;
}

.paragraph-subscriptions
{
	text-align: center;
	font-weight: bold;
}

.div-subscriptions-bookkeeping, 
.div-subscriptions-software, 
.div-subscriptions-payroll, 
.div-subscriptions-billpay
{
  	border-radius: 15px;
   	border: 1px solid;
   	box-shadow: 5px 10px 8px 10px #888888;
    
    padding: 10px;
  	display: block;
  	margin-left: auto;
  	margin-right: auto;
    width: 90%;
    height: 100%;
    overflow: clip;
    position: relative;
}
  
.accordion:after, 
.accordion-subscriptions-bookkeeping:after, 
.accordion-subscriptions-software:after, 
.accordion-subscriptions-payroll:after, 
.accordion-subscriptions-billpay:after 
{
  content: '\002B';
  color: #0000ff;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}
   
.panel-subscriptions-bookkeeping, 
.panel-subscriptions-software, 
.panel-subscriptions-payroll, 
.panel-subscriptions-billpay 
{
  text-align: center;
  padding: 4px 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.accordion-subscriptions-bookkeeping, 
.accordion-subscriptions-software, 
.accordion-subscriptions-payroll, 
.accordion-subscriptions-billpay 
{
  background-color: #eee;
  color: #0000ff;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border-radius: 25px;
  border: none;
  text-align: center;
  outline: none;
  transition: 0.4s;
}
  
.panel {
  padding: 4px 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

</style>

<div class="div-subscriptions-bookkeeping">
<div style="text-align: center;"><p2 class="paragraph-subscriptions">Frequently Asked Questions</p2><br></div>

<button class="accordion" id="secure">Is my data secure?</button>
<div class="panel">
  <p>Your data is extremely secure! Your QuickBooks data is stored and secured by Intuit Cloud Services! Their proprietary network and storage solutions are top-notch and they are renowned for their level of protection.
Sync-Up will never store your QuickBooks data. We are merely a pass-through mechanism to allow you to see the data from QuickBooks.
</p>
</div>

<button class="accordion" id="accurate">Is my data accurate?</button>
<div class="panel">
  <p>Due to our partner integration with <a class="services-hyperlink" href="https://coefficient.io/" target="_blank">Coefficient</a>, your QuickBooks data is refreshed once per hour. Any updates made in QuickBooks will be accurately reflected in your Financial Statements reports within an hour.</p>
</div>

<button class="accordion" id="easeofuse">Is my data simple to understand?</button>
<div class="panel">
  <p>We present your data in a variety of ways. At the very top level, we summarize your data into income and expenses. You are then able to "drill down" and see your data at a more detailed level. 
At Sync-Up, our proprietary processes and reporting make the data understandable for both you and your accountant.
</p>
</div>

<button class="accordion" id="readilyavailable">When am I able to access my data?</button>
<div class="panel">
  <p>Your Financial Statements and other financial data are available 24/7 via a secure link from Google Sheets.</p>
</div>

<button class="accordion">How much is a subscription?</button>
<div class="panel">
  <p>For bookkeeping services, subscriptions start off at $369.00 per month*. This includes up to 325 transactions per month. Most small businesses will fall into this category. If you have lots of transactions during the month, we have additional subscription tiers.
<p style="font-size: small">* Does not include the required  subscription to Quickbooks 
<a class="services-hyperlink" href="https://quickbooks.intuit.com/online/plus/" target="_blank">Online</a>, 
or add-on services such as 
<a class="services-hyperlink" href="https://quickbooks.intuit.com/payroll/" target="_blank">Payroll</a> or 
<a class="services-hyperlink" href="https://quickbooks.intuit.com/bill-pay/" target="_blank">Bill Pay</a>
.</p>
</p>
</div>

<button class="accordion">What is included?</button>
<div class="panel">
  <p>Beyond the services of bookkeeping, Sync-Up offers two add-on services: Payroll and Bill Pay.
These two services each have additional fees which are based upon the volume of services required.</p>
</div>

<button class="accordion">Am I locked into a contract?</button>
<div class="panel">
  <p>No, you are never locked into a long-term contract.
  <br>
  Your contract extends only to the end of the current subscription period.
  For monthly subscribers, your contract is month to month.
  <br>
  For annual subscribers, your contract ends at the end of your pre-paid period.
  </p>
</div>

<button class="accordion">Can I get a refund for early cancellation?</button>
<div class="panel">
  <p>We provide subscription-based services. We do not offer refunds for early cancellation.</p>
</div>

<button class="accordion">How do I sign up?</button>
<div class="panel">
  <p>Visit our  
<a class="services-hyperlink" href="https://www.syncupbookkeeping.com/appointments" target="_blank">Get Started</a> page.</p>
</div>

<button class="accordion" id="taxreduction">How can I reduce my tax liability?</button>
<div class="panel">
  <p>An integral part of good bookkeeping is making sure that we are capturing any and all expenses that could be used to reduce your taxable income.
<br>Using our proprietary software, we can track your direct and indirect expenses to ensure that we are capturing all business related expenses thereby reducing your taxable income.
</p>
</div>

<button class="accordion" id="riskmitigation">How can I limit my overall risks?</button>
<div class="panel">
  <p>Professional, accurate, and well-documented bookkeeping practices include assurance of backup documentation, as well as a detailed explanation of the purpose for the expenditure.
<br>Using our proprietary software, you can upload all documents related to an expense, asset acquisition, capital expenditures, legal notifications, license renewals, etc. This practice in and of itself will reduce your risk overall.
</p>
</div>

<button class="accordion" id="irsprotection">What happens if I get audited?</button>
<div class="panel">
  <p>Documentation, Documentation, Documentation!
<br>Never underestimate the importance of <i>good solid documentation</i>. Maintaining receipts for a minimum of seven years after the year of incurrence is our minimum of recommendation.
<br>If you are ever faced with an audit, one of the initial things the auditor will ask for is documentation and an explanation of an expense.
<br>Using our proprietary software, you can upload all documents related to an expense, asset acquisition, capital expenditures, legal notifications, license renewals, etc. This practice in and of itself will reduce your risk overall.
</p>
</div>

<button class="accordion" id="compliance">Will my books be compliant with applicable laws?</button>
<div class="panel">
  <p>In a nutshell, yes. By default, we adhere to <a class="services-hyperlink" href="https://www.investopedia.com/terms/g/gaap.asp" target="_blank">Generally Accepted Accounting Principles (GAAP)</a> when we perform your bookkeeping.
<br>There are certain business models that are not required to follow GAAP, but in most cases we will recommend strict adherence.
</p>
</div>

<button class="accordion" id="scalability">How can I prepare to scale my business?</button>
<div class="panel">
  <p>Understanding your financial position can be misleading for many business owners. 
<br>There are a myriad of factors that must be examined prior to making a decision to expand.
<br>Understanding your overall financial picture is just one of the ways that we can help.
</p>
</div>

<button class="accordion" id="wealthprotection">How can bookkeeping help protect my wealth?</button>
<div class="panel">
  <p>Accurate bookkeeping can help a business owner understand not only their current financial position, but what their position will be in the future when factoring in predicted behavior.
<br>No one can predict the future. However, past performance is an excellent indicator of future results.
</p>
</div>

<button class="accordion" id="taxstrategies">Will your service coincide with my tax strategies?</button>
<div class="panel">
  <p>Yes. We can work with your CPA and/or financial planner to ensure that your current and future tax strategies are being taken into consideration when we keep your books.
</p>
</div>

<button class="accordion" id="futureexpansion">Can you help us understand our current financial position so that we can expand in the future?</button>
<div class="panel">
  <p>Absolutely! And that is why we exist!
<br>We are here to help you grow your business. When you flourish, so do we.
<br>Our number one goal is to help you improve operations and increase profitability.
</p>
</div>

</div>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
</script>
