import {calculateInvestmentResults , formatter} from "../util/investment.js"

export default function Result ({input}){
const resultData = calculateInvestmentResults(input)
console.log(resultData);
const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment


return <table id="result">
<thead>
    <tr>
        <th>Year</th>
        <th>Investment value</th>
        <th>Interest (Year)</th>
        <th>Total interest</th>
        <th>Invested Copital</th>
    </tr>
</thead>
<tbody>
    {resultData.map(yearData =>{
        const toTalInterest = 
        yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment

        const totalAmountInvestment = yearData.valueEndOfYear - toTalInterest
        return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(toTalInterest)}</td>
            <td>{formatter.format(totalAmountInvestment)}</td>
        </tr>
    })}
</tbody>
</table>


}