import React from 'react';
import './App.css';
import {Table,TableCell,TableRow,TableHead} from "@material-ui/core"

export default function TableDetails(props) {
  return (
    <Table className="tableHead" style={{width:'100%',backgroundColor:'white', border:"2px solid #CCC"}} aria-label="simple table">
    <TableHead>
      <TableRow style={{width:'100%',backgroundColor:'white', border:"2px solid #CCC"}}>
  
    {/* <Table style={{width:'100%',border:"2px solid #CCC"}} aria-label="simple table">
<TableHead> */}
  {/* <TableRow> */}
    <TableCell className="EtableCellText"><strong>Loan Amount</strong></TableCell>
  <TableCell className="EtableCellVal"><strong>₹</strong>{props.pAmount}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell className="EtableCellText"><strong>Interest %</strong></TableCell>
  <TableCell className="EtableCellVal"><strong></strong>{props.interest}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell className="EtableCellText"><strong>Tenure (months)</strong></TableCell>
  <TableCell className="EtableCellVal"><strong></strong>{props.duration}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell className="EtableCellText"><strong>EMI (Monthly)</strong></TableCell>
  <TableCell className="EtableCellVal"><strong>₹</strong>{props.emi1}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell className="EtableCellText"><strong>Total Interest</strong></TableCell>
  <TableCell className="EtableCellVal"><strong>₹</strong>{props.TotalAmountOfInterest}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell className="EtableCellText"><strong>Total Payment</strong><br/>(Loan Amount+Interest)</TableCell>
  <TableCell className="EtableCellVal"><strong>₹</strong>{props.totalAmt ? props.totalAmt:0}</TableCell>
  </TableRow>
</TableHead>

    </Table>
 
  
    )
}

