//variables to store results and entries values---------------------------------------------------------------------
let a_num = [false, false];
let b_num = [false, false];
let sum = [false, false];
let carry = [false, false];
let no_carry = [false, false];

function xor(a, b)
{
  let c = (a || b) && !(a && b);
  return c;
}

//creates and operates a full adder------------------------------------------------------------------------------------------
let adder = function(my_dig, my_s_id, my_c_id, my_cin)
{
  this.my_dig = my_dig;
  this.my_s_id = my_s_id;
  this.my_c_id = my_c_id;
  this.my_cin = my_cin;
}

adder.prototype.calculate = function()
{
  sum[this.my_dig] = xor(a_num[this.my_dig], xor(b_num[this.my_dig], this.my_cin[(this.my_dig) - 1]));
  carry[this.my_dig] = (a_num[this.my_dig] && b_num[this.my_dig]) ||
                       (a_num[this.my_dig] && this.my_cin[(this.my_dig) - 1]) ||
                       (b_num[this.my_dig] && this.my_cin[(this.my_dig) - 1]);
  if(sum[this.my_dig] === true)
  {
    document.getElementById(this.my_s_id).src = "high-level.png";
    document.getElementById(this.my_s_id.substr(1)).innerHTML = "1";
  }
  else
  {
    document.getElementById(this.my_s_id).src = "low-level.png";
    document.getElementById(this.my_s_id.substr(1)).innerHTML = "0";
  }
  if(carry[this.my_dig] === true)
  {
    document.getElementById(this.my_c_id).src = "high-level.png";
    document.getElementById(this.my_c_id.substr(1)).innerHTML = "1";
  }
  else
  {
    document.getElementById(this.my_c_id).src = "low-level.png";
    document.getElementById(this.my_c_id.substr(1)).innerHTML = "0";
  }
  if(this.my_c_id ==="SC0")
  {
    document.getElementById("SCin"). src = document.getElementById("SC0").src;
  }
}
//changes entry variables---------------------------------------------------------------------------------------------------
let states = function(myid, mynum, myvar)
{
  this.myid = myid;
  this.mynum = mynum;//where store my result
  this.myvar = myvar;//index of my result
}
states.prototype.change_me = function()
{
  this.mynum[this.myvar] = !this.mynum[this.myvar];
  if(this.mynum[this.myvar] === true)
  {
    document.getElementById(this.myid).src = "high-level.png";
    document.getElementById(this.myid.substr(1)).innerHTML = "1";
  }
  else
  {
    document.getElementById(this.myid).src = "low-level.png";
    document.getElementById(this.myid.substr(1)).innerHTML = "0";
  }
}

//entry variables------------------------------------------------------------------------------------------------------
let A0 = new states("SA0", a_num, 0);
let A1 = new states("SA1", a_num, 1);
let B0 = new states("SB0", b_num, 0);
let B1 = new states("SB1", b_num, 1);

//adders---------------------------------------------------------------------------------------------------------------
let half = new adder(0, "SS0", "SC0", no_carry);
let full = new adder(1, "SS1", "SC1", carry);


