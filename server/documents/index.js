module.exports = ({name, rollno, english, mathematics, physics, chemistry, computerScience}) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myscoolserver.com%2Fmss%2Fcbse-color-logo%2F&psig=AOvVaw1rmpvHg7sMOsaA4FudYA9q&ust=1684316010067000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjqzZ7E-f4CFQAAAAAdAAAAABAI"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                              Student Name: ${name}
                            </td>
                            <td>
                               Roll number: ${rollno}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Subjects:</td>
                   <td>Marks</td>
                </tr>
                
                <tr class="item">
                   <td>English:</td>
                   <td>${english}</td>
                </tr>
                <tr class="item">
                <td>Physics:</td>
                <td>${physics}</td>
             </tr>
             <tr class="item">
             <td>Mathematics:</td>
             <td>${mathematics}</td>
          </tr>
          <tr class="item">
          <td>Chemistry:</td>
          <td>${chemistry}</td>
            </tr>
            <tr class="item">
            <td>Computer Science:</td>
            <td>${computerScience}</td>
         </tr>
             </table>
             <br />
             <h1 class="justify-center">Total Marks: ${(parseInt(english) + parseInt(physics) + parseInt(mathematics) + parseInt(chemistry) + parseInt(computerScience))}</h1>
             <h1 class="justify-center">Percentage: ${((parseInt(english) + parseInt(physics) + parseInt(mathematics) + parseInt(chemistry) + parseInt(computerScience))/500 * 100).toFixed(2)}</h1>
          </div>
       </body>
    </html>
    `;
};