var x="Hello World!";

/*function a(){

	var x="this is function a";
	console.log(x);
}

function b()
{
	console.log(x);
}
  a();
  b();

var y;
console.log(y);

if(y==undefined)
{
	y="skjdfgjf"
}
else
{
	y=5;
}
console.log(y);


var x=5;
var string="hello";

string+=" kusuma";

console.log(string);
console.log(x);

var y=6;
console.log(x/y);

console.log(undefined/5);

var z="6";

if(x===y)
{
	 console.log("x===y");

}
if(y===z)
{
	console.log("y===z");
}

else
{
	console.log("y data type !=z data type");
}


if(false|| NaN || ""|| 0 || undefined || null)
{
	console.log("not true");

}
else
{
	console.log("all are false");



}

if(true || "hdfb" || 1 || -1 )
{
	console.log("true");
}

function a(){
	return {
		name :"kusuma"
	};
}

console.log(a());

var sum=100;
for(var i=1;i<10;i++)
{
	sum+=i;
	console.log(sum);
}	

function dff(abc)
{
	abc= abc||"kusuma";
	console.log("hello "+abc);
}

dff();
dff("siddu");

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}

//one way to vreate an object

var company=new Object();
company.name="airframe";
company.value=300;

company.ceo=new Object();
company.ceo.firstname="Kusuma";
company.ceo.lastname="chunduru";
console.log(company);
console.log(company.ceo.firstname);

console.log(company["value"]);

var color="company color";
company[color]="blue";
console.log(company[color]);


company.$price=110;
console.log(company.$price);

console.log(company);


//Other way of creating object


var fundango={
	Movies: {
		m1:"abd",
		price:20
	},
	location: "700edgewater",
	vehicle:"car"

};

console.log(fundango);




///functions

function Multiplier(x,y)
{
	return x*y;
}

console.log(Multiplier(4,5));


function mul(miltiple)
{
	var result=function(x)
	{
		return x*miltiple;
	};

	return result;
}

var mult=mul(3);
console.log(mult(100));

var ghn=mul(100);
var test=ghn(300);
console.log(test);


//parameterizing function

function doOperation(x,operarion)
{
	return operarion(x);
}

var result=doOperation(5,mult);
console.log(result);

var a=34;
var b=a;
console.log("value of a"+a);
console.log("value of b"+b);

b=8;
console.log("value of b"+b);



var a={x:7};
var b=a;

console.log(a);
console.log(b);

b.x=123;
console.log(a);
console.log(b);


function Circle(radius)
{
	this.radius=radius;
}

Circle.prototype.getArea =
function (){
	return Math.PI* Math.pow(this.radius, 2);
};

var circle1=new Circle(20);
console.log(circle1);
console.log(circle1.getArea());


function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);*/

var array=["kusuma","Sid"];

var obj={
	name:"kusuma",
	color:"green"
};

for(var p in array)
{
	console.log(array[p]);
}



