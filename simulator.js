//stores variables states------------------------------------------------------------------------------------------------------
var variables = [[false, false], /*logic gate 0, result for 2*/
                 [false, false], /*logic gate 1, result for 2*/
                 [false, false], /*logic gate 2, result for 6*/
                 [false, false], /*logic gate 3, result for 5*/
                 [false, false], /*logic gate 4, result for 5*/
                 [false, false], /*logic gate 5, result for 6*/
                 [false, false], /*logic gate 6, final result*/
                 [false, false]];/*final result*/

//calculates boolean results for each gate (each gate is an instance)---------------------------------------------------------
let Operation = function(mygate, myid, mycanv, myresult, index)
{
  this.mygate = mygate; //where get entry variables
  this.myid = myid;//select element ID
  this.mycanv = mycanv;//canvas ID
  this.myresult = myresult;//where store results
  this.index = index;//index of my result
}

Operation.prototype.select_gate = function()
{
  let my_gate = document.getElementById(this.myid);
  //AND operation------------------------------------------------------------------------------------------------------------
  if(my_gate.value === "AND")
  {
    let result = this.mygate[0] && this.mygate[1];
    this.myresult[this.index] = result;
    let ctx = document.getElementById(this.mycanv).getContext("2d");
    let img_gate = new Image();
    let img_state = new Image();
    if(result === true)
    {
      img_state.src = "images/high-level.png";
    }
    else
    {
      img_state.src = "images/low-level.png";
    }
    img_gate.src = "images/portaAND.png"
    img_gate.onload = function()
    {
      ctx.drawImage(img_gate, 0, 10, 220, 150);
    }
    img_state.onload = function()
    {
      ctx.drawImage(img_state, 230, 50);
    }
  }

  //OR operation-----------------------------------------------------------------------------------------------------------
  if(my_gate.value === "OR")
  {
    let result = this.mygate[0] || this.mygate[1];
    this.myresult[this.index] = result;
    let ctx = document.getElementById(this.mycanv).getContext("2d");
    let img_gate = new Image();
    let img_state = new Image();
    if(result === true)
    {
      img_state.src = "images/high-level.png";
    }
    else
    {
      img_state.src = "images/low-level.png";
    }
    img_gate.src = "images/portaOR.png"
    img_gate.onload = function()
    {
      ctx.drawImage(img_gate, 0, 10, 220, 150);
    }
    img_state.onload = function()
    {
      ctx.drawImage(img_state, 230, 50);
    }
  }

  //XOR operaion-------------------------------------------------------------------------------------------------------------
  if(my_gate.value === "XOR")
  {
    let result = (this.mygate[0] || this.mygate[1]) && !(this.mygate[0] && this.mygate[1]);
    this.myresult[this.index] = result;
    let ctx = document.getElementById(this.mycanv).getContext("2d");
    let img_gate = new Image();
    let img_state = new Image();
    if(result === true)
    {
      img_state.src = "images/high-level.png";
    }
    else
    {
      img_state.src = "images/low-level.png";
    }
    img_gate.src = "images/portaXOR.png"
    img_gate.onload = function()
    {
      ctx.drawImage(img_gate, 0, 5, 220, 140);
    }
    img_state.onload = function()
    {
      ctx.drawImage(img_state, 230, 50);
    }
  }

  //NAND operation------------------------------------------------------------------------------------------------------------
  if(my_gate.value === "NAND")
  {
    let result = !(this.mygate[0] && this.mygate[1]);
    this.myresult[this.index] = result;
    let ctx = document.getElementById(this.mycanv).getContext("2d");
    let img_gate = new Image();
    let img_state = new Image();
    if(result === true)
    {
      img_state.src = "images/high-level.png";
    }
    else
    {
      img_state.src = "images/low-level.png";
    }
    img_gate.src = "images/portaNAND.png"
    img_gate.onload = function()
    {
      ctx.drawImage(img_gate, 0, 10, 220, 150);
    }
    img_state.onload = function()
    {
      ctx.drawImage(img_state, 230, 50);
    }
  }

  //NOR operation-----------------------------------------------------------------------------------------------------------
  if(my_gate.value === "NOR")
  {
    let result = !(this.mygate[0] || this.mygate[1]);
    this.myresult[this.index] = result;
    let ctx = document.getElementById(this.mycanv).getContext("2d");
    let img_gate = new Image();
    let img_state = new Image();
    if(result === true)
    {
      img_state.src = "images/high-level.png";
    }
    else
    {
      img_state.src = "images/low-level.png";
    }
    img_gate.src = "images/portaNOR.png"
    img_gate.onload = function()
    {
      ctx.drawImage(img_gate, 0, 0, 220, 150);
    }
    img_state.onload = function()
    {
      ctx.drawImage(img_state, 230, 50);
    }
  }

  //XNOR operaion-------------------------------------------------------------------------------------------------------------
  if(my_gate.value === "XNOR")
  {
    let result = !((this.mygate[0] || this.mygate[1]) && !(this.mygate[0] && this.mygate[1]));
    this.myresult[this.index] = result;
    let ctx = document.getElementById(this.mycanv).getContext("2d");
    let img_gate = new Image();
    let img_state = new Image();
    if(result === true)
    {
      img_state.src = "images/high-level.png";
    }
    else
    {
      img_state.src = "images/low-level.png";
    }
    img_gate.src = "images/portaXNOR.png"
    img_gate.onload = function()
    {
      ctx.drawImage(img_gate, 0, 5, 220, 140);
    }
    img_state.onload = function()
    {
      ctx.drawImage(img_state, 230, 50);
    }
  }
}

//changes entry variables---------------------------------------------------------------------------------------------------
let states = function(myid, mygate, myvar)
{
  this.myid = myid;
  this.mygate = mygate;//where store my result
  this.myvar = myvar;//index of my result
}
states.prototype.change_me = function()
{
  variables[this.mygate][this.myvar] = !variables[this.mygate][this.myvar];
  if(variables[this.mygate][this.myvar] === true)
  {
    document.getElementById(this.myid).src = "images/high-level.png";
  }
  else
  {
    document.getElementById(this.myid).src = "images/low-level.png";
  }
}


//Simulator-------------------------------------------------------------------------------------------------------------------
/*
position schema of states an gates
state0
        gate0
state1
                gate2
state2
        gate1
state3
                       gate6
state4
        gate3
state5
                gate5
state6
        gate4
state7

the methods are called via html on clicks (on states) and on changes(on select)
*/
let state_0 = new states("state_0", 0, 0);
let state_1 = new states("state_1", 0, 1);
let state_2 = new states("state_2", 1, 0);
let state_3 = new states("state_3", 1, 1);
let state_4 = new states("state_4", 3, 0);
let state_5 = new states("state_5", 3, 1);
let state_6 = new states("state_6", 4, 0);
let state_7 = new states("state_7", 4, 1);

let gate_0 = new Operation(variables[0], "gate_0", "canvas_0", variables[2], 0);
let gate_1 = new Operation(variables[1], "gate_1", "canvas_1", variables[2], 1);
let gate_2 = new Operation(variables[2], "gate_2", "canvas_2", variables[6], 0);
let gate_3 = new Operation(variables[3], "gate_3", "canvas_3", variables[5], 0);
let gate_4 = new Operation(variables[4], "gate_4", "canvas_4", variables[5], 1);
let gate_5 = new Operation(variables[5], "gate_5", "canvas_5", variables[6], 1);
let gate_6 = new Operation(variables[6], "gate_6", "canvas_6", variables[7], 0);


