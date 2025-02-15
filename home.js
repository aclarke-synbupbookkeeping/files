<style>

.h1-white-header {
    color: white;
}

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 100;
    padding: 0.625rem; /* 10px converted to rem */
}

/** Relocated code from code-injection file**/
/** Relocated on 09-FEB-2025 **/
iframe {
    width: 90%;
    height: 90%;
}

.ui-resizable-helper {
    border: 1px dotted gray;
}
  
.resizable {
    display: block;
    width: 100%;
    height: 75%;
    padding: 1px;
    border: 1px solid #0000ff;
  	border-radius: 25px;
    overflow: auto;
    position: relative;
  	background-color: #ffffff;
  	color: #0000ff;
  	font-size: 5px;
  }
  
.main-div {
    display: block;
    width: 100%;
    height: 500px;
    overflow: clip;
    position: relative;
}
    
.appts-div {
    display: block;
    width: 95%;
    height: 800px;
    overflow: auto;
    position: relative;
}

.services-grid-container
 {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  background-color: #ffffff;
  color: #0000ff;
}

  .div-home-page-header
 {
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 10px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 2200px;
   width: auto;
   min-height: 100px;
   max-height: 200px;
  }
  
  .div-home-page-outer
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 1500px;
   width: auto;
   min-height: 325px;
   max-height: 600px;
  }
  
.div-home-page
 {
   padding: 0px;
   background-color: #ffffff;
   color: #0000ff;
   text-align: center;
   overflow: auto;
   
   min-width: 100%;
   min-height: 100%;
  }

  .div-home-page-services-outer
 {
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 10px solid;
   padding: 10px;
   border-style: outset;
   
   overflow: auto;
   min-width: 75px;
   max-width: 575px;
   width: auto;
   min-height: 200px;
   max-height: 500px;
  }
  
.div-home-page-services
 {
   padding: 0px;
   background-color: #ffffff;
   color: #0000ff;
   text-align: center;
   overflow: auto;
   
   min-width: 100%;
   min-height: 100%;
  }

.header-label-home-page {
  padding: 0px;
  margin: 0px;
  text-align: center;
  }
  
.paragraph-home-page-services {
  text-align: justified;
  width: 95%;
  
  }
  
.paragraph-contact-us,
.paragraph-team{
  color: #000000;
  text-align: left;
  width: 95%;
  
  }

  .div-services-outer
 {
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 10px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 335px;
   width: auto;
   min-height: 300px;
   max-height: 600px;
  }
  
.div-services
 {
   padding: 0px;
   background-color: #ffffff;
   color: #0000ff;
   text-align: center;
   overflow: auto;
   
   min-width: 100%;
   min-height: 100%;
  }

  .div-services-inner
  {
 	width: 95%;
   	height: 95%;
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
  
  .div-build-a-plan-pricing
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
  
  .div-pricing-outer
 {
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
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
  
  .table-pricing {
    width: auto;
   	margin-right: auto;  
	margin-left: auto; 
  }
  
  .table-pricing-header {
   	border: 1px solid;
 	color: #000000;
   	text-align: center;
  }
  
  .table-pricing-cell {
   	border: 1px solid;
 	color: #000000;
   	text-align: right;
  }
  
  .table-ebooks-cell {
   	border: 0px solid;
 	color: #000000;
   	text-align: left;
    font-size: 1rem;
  }
  
  .div-helping-outer
 {
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 10px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 200px;
   max-width: 385px;
   width: auto;
   min-height: 425px;
   max-height: 600px;
  }
  
.div-helping
 {
   padding: 0px;
   background-color: #ffffff;
   color: #0000ff;
   text-align: center;
   overflow: auto;
   position: relative;
   min-width: 100%;
   min-height: 100%;
  }

.paragraph-helping {
  text-align: left;
  width: 95%;
  
  }

  .div-serving-outer
 {
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 10px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 800px;
   width: auto;
   min-height: 300px;
   max-height: 600px;
   margin: 20px;
  }
  
.div-serving
 {
   padding: 0px;
   background-color: #ffffff;
   color: #000000;
   text-align: center;
   overflow: auto;
   position: relative;
   min-width: 100%;
   min-height: 100%;
  }

  .div-team-outer
 {
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 850px;
   width: auto;
   min-height: 900px;
   max-height: 1100px;
   margin: 10px;
  }
  
.div-team
 {
   padding: 0px;
   background-color: #ffffff;
   color: #000000;
   text-align: center;
   overflow: auto;
   position: relative;
   min-width: 100%;
   min-height: 100%;
  }

  .div-mission-outer
 {
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 800px;
   width: auto;
   min-height: 300px;
   max-height: 970px;
   margin: 0px;
  }
  
.paragraph-serving,
.paragraph-peace {
  text-align: left;
  width: 95%;
  
  }

  .div-reports-outer
 {
   margin-left: 20px;
   margin-right: 20px;
   margin-top: 0px;
   margin-bottom: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 1500px;
   width: auto;
   min-height: 325px;
   max-height: 600px;
  }
  
.div-reports
 {
   padding: 0px;
   background-color: #ffffff;
   color: #0000ff;
   text-align: center;
   overflow: auto;
   
   min-width: 100%;
   min-height: 100%;
  }

  .div-reports-sample-outer
 {
   margin-left: 20px;
   margin-right: 20px;
   margin-top: 0px;
   margin-bottom: 0px;
   position: relative;
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 10px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 150px;
   max-width: 1500px;
   width: 95%;
   min-height: 600px;
   max-height: 3000px;
   height: 800px;
   display: block;
  }
  
.div-reports-sample
 {
   padding: 0px;
   background-color: #ffffff;
   color: #0000ff;
   text-align: center;
   overflow: auto;
   
   min-width: 100%;
   min-height: 100%;
  }

  .div-consent-outer
 {
   margin-left: 20px;
   margin-right: 20px;
   margin-top: 0px;
   margin-bottom: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 1000px;
   width: auto;
   min-height: 500px;
   max-height: 1500px;
  }
  
.paragraph-services {
  text-align: left;
  width: 95%;
  
  }

.services-glossary-header {
    padding: 0px;
    border: 0px;
  	background-color: #ffffff;
  	color: #0000ff;
  }

.services-glossary-detail {
    padding: 0px;
    border: 0px;
  	background-color: #ffffff;
  	color: black;
  }

.reports-header {
	text-align: center;
    padding: 0px;
    border: 0px;
  	background-color: #ffffff;
  	color: #0000ff;
  }
  
.reports-sub-header {
	text-align: left;
    padding: 0px;
    border: 0px;
  	background-color: #ffffff;
  	color: black;
  }
  
.reports-paragraph {
	text-align: center;
    padding: 0px;
    border: 0px;
  	background-color: #ffffff;
  	color: black;
  }

.reports-detail {
    text-align: center;
  	padding: 0px 18px;
    border: 0px;
  	background-color: #ffffff;
  	color: black;
  }
  
.reports-hyperlink {
  	text-align: center;
    text-decoration: underline;
  	color: #0000ff;
  }

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
  
.div-navigation-buttons
{
  	border: 0px;
    padding: 0px;
  	display: block;
  	margin-left: auto;
  	margin-right: auto;
    width: 100%;
    height: 100%;
    overflow: clip;
    position: relative;
}
  
.table-navigation {
  table-layout: fixed;
  width: 100%;
}

.table-cell-navigation {
  text-align: center;
  color: #0000ff;
}
    
.table-cell-navigation:hover {
  border-radius: 25px;
  border: 0px solid #0000ff;
  background-color: #0000ff;
  color: #ffffff;
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

.navbar {
  overflow: hidden;
  background-color: #ffffff;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #0000ff;
  text-align: center;
  padding: 4px 4px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #0000ff;
  color: #ffffff;
}

.navbar a.active {
  background: #ffffff;
  color: #0000ff;
}
  
  .list-info-graphic
  {
    text-align: left;
    
    padding: 30px;
    padding-bottom: 10px;
  }
  
  .div-info-graphic
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 600px;
   width: auto;
   min-height: 500px;
   max-height: 900px;
  }
  
  .div-info-graphic-team
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 600px;
   width: auto;
   min-height: 600px;
   max-height: 1200px;
  }
  
  .div-info-graphic-services
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px soli
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 600px;
   width: auto;
   min-height: 450px;
   max-height: 900px;
  }
  
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
  
 
  .div-info-graphic-revised
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 600px;
   width: auto;
   min-height: 1100px;
   max-height: 1500px;
  }
  
  .div-header-label-info-graphic-revised
 {
   margin: auto;
   padding: 5px;
   
   text-align: center;
   height: auto;
   max-height: 150px;
   background-color: #0000ff;
   color: white;
   width: auto;
  }
  
  .div-footer-label-info-graphic
 {
   margin-left: auto;
   margin-right: auto;
   margin-top: auto;
   margin-bottom: 0px;
   padding: 5px;
   position: absolute;
   bottom: 5px;
   text-align: center;
   height: auto;
   max-height: 110px;
   background-color: #0000ff;
   color: white;
   width: auto;
   font-size: 12px;
   border-radius: 15px;
  }
  
  .div-image-wrapper-info-graphic
 {
   padding: 5px;
   position: relative;
   text-align: center;
   height: auto;
   width: auto;
   margin: auto;
   display: block;
   border: 0px black solid;
  }
  
  .div-leadership-info-graphic
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 600px;
   width: auto;
   min-height: 800px;
   max-height: 1200px;
  }
  
  .div-header-label-signup
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 600px;
   width: auto;
   min-height: 350px;
   max-height: 400px;  
  }
  
  .div-services-info-graphic
 {
   margin: 0px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 00px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 250px;
   max-width: 800px;
   width: auto;
   min-height: 350px;
   max-height: 500px;
  }
  
  .table-info-graphic {
    width: auto;
   	margin-right: auto;  
	margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    height: auto;
   	text-align: center;
    position: relative;
  }
    
  .table-row-info-graphic {
    padding: 20px;
  }
  
  .table-cell-info-graphic {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
  .table-footer {
    width: 50%;
   	margin-right: auto;  
	margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
   	text-align: center;
    position: relative;
    font-size: 10px;
    color: #0000ff;
  }

  .div-calculator-outer
 {
   margin-left: 20px;
   margin-right: 20px;
   margin-top: 0px;
   margin-bottom: 20px;
   
   
   text-align: center;
   
   border-radius: 15px;
   border: 1px solid;
   padding: 0px;
   box-shadow: 5px 10px 8px 10px #888888;
   
   overflow: auto;
   min-width: 75px;
   max-width: 500px;
   width: auto;
   
   min-height: 325px;
   height: auto;
  }

/* Target input fields ONLY within the calculator container */
.div-calculator-outer input { /* This is the key change */
    box-sizing: border-box; /* Corrected to box-sizing */
    min-width: .5rem!important; /* 100px converted to rem (100 / 16) */
    max-width: 5rem!important;
    text-align: right;
    font-size: 0.875rem!important; /* 14px converted to rem */
    padding: 0.25rem!important; /* 4px converted to rem */
}
  
.table-calculator-startup {
    width: 90%;
   	margin-right: 15px;
	margin-left: 15px;
    border-collapse: collapse;
    border: 1px solid #000fff;
  }
  
  .table-header-calculator-startup {
   	border: 1px solid #000fff;
 	color: #000000;
   	text-align: center;
    padding: 8px;
    background-color: #f0f0f0;
    font-weight: bold;
  }
  
  .table-cell-label-calculator-startup {
   	border: 1px solid #000fff;
 	color: #000000;
   	text-align: right;
    padding: 8px;    
  }
  
  .table-cell-input-calculator-startup {
   	border: 1px solid #000fff;
 	color: #000000;
   	text-align: right;
    padding: 8px;
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
/** END - Relocated code from code-injection file **/
/** END - Relocated on 09-FEB-2025 **/

</style>


<script type="module">
  import Chatbot from "https://cdn.jsdelivr.net/npm/@denserai/embed-chat@1/dist/web.min.js";
 
  Chatbot.init({
    chatbotId: "5a9e92f9-76ae-4102-b09a-6dbbab5b4d23",
    theme: {
      button: {
        iconCover: true,
        size: "large"
      },
    },
  });
</script>
