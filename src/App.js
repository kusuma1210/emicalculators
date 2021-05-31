import React,{useState} from "react";
import './App.css';
import {withStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import {Table,TableCell,TableRow} from "@material-ui/core";
import TableDetails from "./TableDetails";

const PrettoSlider =withStyles({
  root:{color:"orange",height:10},
  thumb:{height:25,width:25,backgroundColor:"orange",border:"3px solid black",marginTop:-9,marginLeft:-9},
  track:{height:10,borderRadius:4},
  rail:{height:10,borderRadiu:4},
})(Slider);



function App() {
  const [pAmount,setpAmount]=useState(2755000);
  const [interest,setinterest]=useState(7);
  const [duration,setDuration]=useState(147);
  const maxValue=60000000;
  const intMax=20;
  const maxDuration=360;

  const intr=interest/1200;
  const intr1 =interest/300;
  const emi1=duration ? Math.round(pAmount* intr1/(1-(Math.pow(1/(1+intr1),duration)))):0;
  const emi=duration ? Math.round(pAmount* intr/(1-(Math.pow(1/(1+intr),duration)))):0;
  const totalAmt=duration*emi;
  var TotalAmountOfCredit=Math.round((emi/intr)*(1-Math.pow((1+intr),(-duration))));
  const TotalAmountOfInterest= Math.round(totalAmt-TotalAmountOfCredit);


  return (
    <div className="App">
      <div className="CalApp">
      <h2 className="CalHeading"><u>EMI Calculator</u></h2>

       <div>
        <Typography gutterBottom><strong>Loan Amount</strong></Typography>
        <PrettoSlider value={pAmount}  onChange={(event,vAmt)=>{setpAmount(vAmt);}}defaultValue={pAmount} max={maxValue}/>
        </div>
        <div>
        <Typography gutterBottom><strong>Interest Rate %</strong></Typography>
        <PrettoSlider value={interest} onChange={(event,vInt)=>{setinterest(vInt);}}defaultValue={interest} max={intMax}/>
        </div>
        <div>
        <Typography gutterBottom><strong>Trenue (Months)</strong></Typography>
        <PrettoSlider value={duration} onChange={(event,vDur)=>{setDuration(vDur);}}defaultValue={duration} max={maxDuration}/>
        </div>
      
      <div>
      <Table>
        <TableRow>
          <TableCell>
          <TableDetails pAmount={pAmount}  totalAmt={totalAmt} interest={interest} duration={duration} emi1={emi1} TotalAmountOfInterest={TotalAmountOfInterest}/>
        </TableCell>
        </TableRow>
      </Table>
      </div>
      </div>
    </div>
  );
}

export default App;
