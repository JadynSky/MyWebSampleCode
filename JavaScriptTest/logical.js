
/******************************************
JS变量 
*******************************************/
/********** 声明问题 *************/
//1. 变量声明不赋值
var str3;
console.log(str3);//输出undefined
//2. 变量在声明成非undefined后再声明，里面的值还在
var num4 = 1;
var num4;
console.log(num4);//输出1
//3. 变量重复声明等于赋值
var x1;
console.log(x1);//undefined
var x1 = 1;
console.log(x1);//1
var x1 = "name";
console.log(x1);//name
//4. 变量无法多个赋同一个值
var x2,y2=1;
console.log(x2);//输出undefined
console.log(y2);//输出1
//5. undefined是指未定义，而null是一个对象，只被清空的变量
x2 = null;
console.log(x2);//输出null
//6. 使用new来声明对象类型，声明成对象类型的对象即使没有值也不是undefined了
var stringNew = new String;
var numberNew = new Number;
var boolNew = new Boolean;
var arrayNew = new Array;
var objNew = new Object;
console.log(stringNew);
console.log(numberNew);
console.log(boolNew);
console.log(arrayNew);
console.log(objNew);

/*********** Number字面量 *************/
var num1, num2, num3;
num1 = 5.12;//小数
num2 = 1e5;//科学计数法
num3 = 1000;//整数

/************ Bool字面量 *************/
var bool1, bool2;
bool1 = true;
bool2 = false;

/************* String字面量 **********/
var str1, str2;
//可以是用单引号，也可以使用双引号
str1 = "Jadyn Wu";
str2 = 'Jadyn Wu';
//单双引号作用一样，可以互相嵌套
var str4 = " John";
var str5 = "It's good!!!";
var str6 = 'It\'s nice!!!';
var str7 = 'my nick name is "TianTian"';
var str8 = "my wechat name is 'Jadyn'";
var str9 = " first line\nsecond line1\\second line2\n"
console.log(str9[3]);//字符串中第3个字符
//对象属性
console.log(str9.length);//字符串的长度
console.log(str9.constructor);//string的函数引用
console.log(str4);
//对象方法
console.log(str9.charAt(3));//字符串哪种第3个字符
console.log(str9.charCodeAt(3));//字符串中第3个字符的unicode码
console.log(str4.toUpperCase());//转化成大写
console.log(str4.trim());//去掉首尾空格
console.log(str4.toLowerCase());//转换成小写
console.log(str4.substring(1,3));//index=1到index=3的三个字符串
console.log(str4.substr(1,3));//index=1开始包括在内数3个字符
console.log(str4.slice(1,3));//同substring
console.log(str4.split("o"));//john被o分成了j和hn
console.log(str4.search("h"));//查找h字符
console.log(str4.concat(str5));//str4拼接上str5
console.log(str4.indexOf("n"));//n字符所在的index
console.log(str7.lastIndexOf("m"));//m字符最后所在的index
//包装方法 写在write中的，给str加上改变样式的标签
console.log(str4.anchor("anchorName"));
console.log(str4.big());

//创建了string对象
var str10 = new String("John");
console.log(str10);
console.log(str10.toString());
var bool3 = (str10 == str4);
var bool4 = (str10 === str4);
console.log(bool3);//str10和str4的值相等
console.log(bool4);//str10和str4的类型不相等



/************* 数组 **************/
//1.
var arr1 = [10,'dd',345];
//2.
var arr2 = new Array();//声明空数组的方式
console.log(arr2);
arr2[1] = "firstobj";//添加元素，可以不按顺序，空位会被占，不会报错。
console.log(arr2);
//3.
var arr3 = new Array("one","two","three");


/************* 对象 *************/
//1. 声明对象
var obj1 = {
    firstName:"zhongtian", 
    lastName:"wu", 
    sexBoy:true,
    age:25,
    fullName:function() {
        return this.lastName + " " + this.firstName;
    },
    cars:["ford","volkswagen"]
};
//读取对象的value
var name = obj1.lastName;
name = obj1["lastName"];
console.log(name);
//读取对象方法的表达式-不加括号
var fullNameFunction = obj1.fullName;
//读取对象方法的结果-加括号
var fullNameResult = obj1.fullName();
console.log(fullNameFunction);
console.log(fullNameResult);
//2. 先创建对象，再添加属性
var obj2 = new Object;
obj2.firstName = "wu";
obj2.lastName = "zhongtian";
obj2.fullName = function(){
    return this.firstName + " " + this.lastName; 
}

/************* 函数 ***************/
//1. 一个没有输入值也没有返回值的函数
function myFunction1(){alert("something");};
//2. 一个有输入值但没有返回值的函数
function myFunction2(){return 100;};
//3. 一个没有输入值但有返回值的函数
function myFunction3(a,b){a+b;};
//4. 一个有输入值也有返回值的函数
function myFunfction4(a,b) {
    alert(a+b);
    return a + b;
};
//5. 声明一个函数对象
var func1 = function(){
    alert("something2");
};

/************* 变量 ***************/
//var声明的全局变量
var variable1 = "first variable";
//向未声明的变量赋值
variable2 = "second variable";
console.log(this);//window
console.log(this.variable1);//first variable
console.log(window.variable1);//first variable
console.log(this.variable2);//second variable
console.log(window.variable2);//second variable
delete variable1;
delete variable2;
console.log(window.variable1);//first variable
console.log(window.variable2);//undefined

var myFunction5 = function(){
    var variable3 = "third variable";
    variable4 = "fourth variable";
}
myFunction5();
console.log(window.variable3);//undefined
console.log(window.variable4);//fourth variable
delete variable4;
console.log(window.variable4);//fourth variable


/************* 运算符 ***************/
var xb = 1, y = 17;
var string11 = xb + y < 18 ? "未成年" : "成年";
console.log(string11);
switch(y)
{
    case 10:
        console.log("is 10");
        break;
    default:
        console.log("is not 10");
        break;
}

//普通情况
var string2 = "";
for (var i = 0; i < 10; i++)
{
    string2 = string2 + i;
}
console.log(string2);

//当i已经声明的情况
var string3 = "1";
var i = 0, len = 8;
for (; i < len; i++) {
    string3 = string3 + i;
}
console.log(string3);

//当i和len都没有声明的情况
var string4 = "2";
for (var i = 0, len = 5; i < len; i++) {
    string4 = string4 + i;
}
console.log(string4);

var string5 = "";
var person={fname:"John",lname:"Doe",age:25}; 
for (let x in person) {
    //x是person对象中的key
    string5 = string5 + (string5.length == 0 ? "" : " ") + person[x];
}
console.log(string5);

/************* 类型 ***************/
//1. 判断类型
var a = "1.46";
var b = 1.123;
var c = NaN;
var d = true;
var e = ["one","two","three"];
var f = {first:"firstValue",second:"secondValue",third:"thirdValue"};
var g = null;
var h;
var i = new Date();
var j = function(){};

//获取类型
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));
console.log(typeof(i));
console.log(typeof(j));

//获取类型的构造函数
console.log(a.constructor);
console.log(b.constructor);
console.log(c.constructor);
console.log(d.constructor);
console.log(e.constructor);
console.log(f.constructor);
// console.log(g.constructor);//null的类型不能调用constructor
// console.log(h.constructor);//undefined的类型不能调用constructor
console.log(i.constructor);
console.log(j.constructor);

//通过获取类型的构造函数判断类型
//判断是否是数组
function isArray(array1) {
    return array1.constructor.toString.indexOf("Array") > -1;
}
//判断是否是date
function isData(date1) {
    return date1.constructor.toString.indexOf("Date") > -1;
}

/************* 类型转换 ***************/
//Number to String
console.log(b.toString());
console.log(String(b));
console.log(b.toExponential());//对象值转换为指数计数法
console.log(b.toFixed(2));//转化成字符串，结果的小数点后有执行位数字
console.log(b.toPrecision(2));//格式化数字为指定长度

// String to Number 
console.log(Number(a));
console.log(parseFloat(a) + " " + typeof(parseFloat(a)));
console.log(parseInt(a) + " " + typeof(parseInt(a)));
var s = "abc";
console.log(+ "1");//1 使用一元+运算符可以将String转换成Number类型
console.log(+ s);//NaN 使用一元+运算符可以将String转换成Number类型

//Bool to String
console.log(d.toString());
console.log(String(d));

//Bool to Number
console.log(Number(true));
console.log(Number(false));

//date to String
date1 = new Date();
console.log(date1.toString());
console.log(String(new Date()));

//Date to Number
date2 = new Date();
console.log(Number(date2));//将时间转换成时间戳
console.log(date2.getTime());
console.log(date2.getDate());//获取一个月中的第几天
console.log(date2.getDay() + " " + typeof(date2.getDay()));//获取一个星期中的第几天

//自动转换类型
console.log(5 + null);//null转化为0
console.log("5" + null);//null转换成了"null"
console.log("5" + 1);//当用+运算符时，数字会转化成字符串
console.log("5" - 1);//当用-运算符时，字符串会转化成数字
//当用/运算符时，字符串会转化成数字
console.log("5" / 2);
console.log("5" % 2);//当用*运算符时，字符串会转化成数字

//当对象或者变量输出时，会自动调用toStirng（）转换成字符串。
myvar1 = {name:"wuzhongtian"};
document.getElementById("myvar1").innerHTML=myvar1;
myvar2 = [1,2,3,4];
document.getElementById("myvar2").innerHTML=myvar2;
myvar3 = new Date();
document.getElementById("myvar3").innerHTML=myvar3;


/************* 正则表达式 ***************/
var baseString = "I am a lOng paragraph, and I ha|ve 25 some content 31 to write";
//声明一个正则表达式
var reg = new RegExp(/ar/g);
//查询ar这个字符串
var regedIndex = baseString.search(reg);
console.log(regedIndex);
//替换所有的on为后面的字符串
var regedStr1 = baseString.replace(/on/g,"<repacewords>");
console.log(regedStr1);
//替换所有的on为后面的字符串，忽略on的大小写
var regedStr2 = baseString.replace(/on/gi,"<repacewords>");
console.log(regedStr2);
//分别替换所有a r p h字母为m
var regedStr3 = baseString.replace(/[arph]/g,"m");
console.log(regedStr3);
//分别替换所有的0-3的数字为5
var regedStr4 = baseString.replace(/[0-3]/g,"4");
console.log(regedStr4);
//替换所有的a|v为4|4
var regedStr5 = baseString.replace(/a|v/g,"4");
console.log(regedStr5);
//分别替换所有的数字为0
var regedStr6 = baseString.replace(/\d/g,"0");
console.log(regedStr6);
//分别替换所有的空格为“  ”
var regedStr7 = baseString.replace(/\s/g,"  ");
console.log(regedStr7);
//分别替换所有的单词边界为’
var regedStr8 = baseString.replace(/\b/g,"'");
console.log(regedStr8);
//匹配任何包含>=1个n的对象，将n换成'
var regedStr9 = baseString.replace(/n+/g,"'");
console.log(regedStr9);
//匹配0个或者>1个n的对象，将其换成'
var regedStr10 = baseString.replace(/n*/g,"'");
console.log(regedStr10);
//匹配0个或1个n的对象，将其换成'
var regedStr11 = baseString.match(/n?/g);
console.log(regedStr11);
//关于正则表达式的方法 test()
reg = /v/g;
var result = reg.test(baseString);
console.log(result);
//关于正则表达式的方法 exec()
var result = reg.exec(baseString);
console.log(result);
// debugger;
//返回正则表达式的字符串
var resul = reg.toString(baseString);
console.log(resul);

/************* 错误 ***************/
try {
    if (reg == "/v/g") throw {message:"错误的正则表达式"};
} catch (error) {
    console.log(error);
}

try {
    allert("i am alert info");
} catch (error) {
    console.log(error);
}


/************* 表单 ***************/
//表单验证方法
function validateFunction() {
    var inputValue = document.forms["myForm1"]["inputName1"].value;
    if (inputValue == "" || inputValue == undefined || inputValue == null) {
        alert("请输入内容");
        return false;
    }  
    return true;
}
//JS验证API
function validateFunction2() {
    var inputElement = document.getElementById("inputid1");
    //checkValidate方法用来判断inputElement元素输入的合法性，合法性要求在input的属性中规定
    if (inputElement.checkValidity() == false) {
        //表单错误信息
        var errorMessage = inputElement.validationMessage;
        //表单内容是否过大
        var isRangeOverflow = inputElement.validity.rangeOverflow;
        //表单内容是否过小
        var isRangeUnderflow = inputElement.validity.rangeUnderflow;

        var isTooLong = inputElement.validity.tooLong;
        alert("表单输入有误" + inputElement.validationMessage + " " + inputElement.validity.rangeOverflow + " " + inputElement.validity.rangeUnderflow + " " + inputElement.validity.tooLong);
        return false;
    }
    return true;
}

/************* 作用域 ***************/

//全局作用域与局部作用域
//a1具有全局作用域
var a1 = 10;
function testFunction1() {
    console.log(a1);
    //a2具有函数作用域
    var a2 = 2;
    console.log(a2);
}
testFunction1();
console.log(a1);//10
// console.log(a2);//Uncaught ReferenceError: a2 is not defined


//未var的变量为全局作用域
function testFunction2() {
    //未写var的变量具有全局作用域
    a3 = 4;
}
testFunction2();
console.log(a3);//4
//在非严格模式下可以使用delete
delete a3;
// console.log(a3);//Uncaught ReferenceError: a3 is not defined



//作用域链
var a51 = "haha";
function testFunction3(){
    var a52="xixi";
    function testFunction31(){
        console.log(a51);//haha
        console.log(a52);//xixi
        var tempName=a51;
        a52=a51;
        a51=tempName;
        console.log(a51);//xixi
        console.log(a52);//haha
        console.log(tempName);//xixi
    }
    testFunction31();
    console.log(a51);//xixi
    console.log(a52);//haha
    //console.log(tempName);抛出错误：Uncaught ReferenceError: tempName is not defined
}
testFunction3();
console.log(a51);
// console.log(a52);//抛出错误：Uncaught ReferenceError: a52 is not defined


//变量提升
// console.log(a4);//Uncaught ReferenceError: a4 is not defined
console.log(a5);//undefined 说明var a5被提升
var a5;


//初始化一个变量
var a6 = 10;
//重复声明一个变量
var a6;
function testFunction4() {
    //在函数中声明变量，与在外部声明的同名全局变量不是一个变量
    var a6 = 5;
    //由于函数中有a6，所以就不会去全局找a6
    //打印的是局部变量a6
    console.log("a6 = " + a6);
}
testFunction4();
console.log("a6 = " + a6);



var a7="haha2";
function changeName(){
    console.log("a7 = " + a7);//undefined
    var a7="xixi2";
}
changeName();
console.log("a7 = " + a7);//xixi2

/************* 块级作用域 let const ***************/
var arr = ["1","2","3"];
console.log("s2 = " + s2);
if (arr.length == 3) {
    let s1 = "123";
    var s2 = "456";
}
// console.log("s1 = " + s1);

// 结论: 在全局作用域中let不能重新声明var声明过的变量
// var x = 1;
// let x = 2;//Uncaught SyntaxError: Identifier 'x' has already been declared

// 结论: 在全局作用域中var不能重新声明let声明过的变量
// let x = 1;
// var x = 2;//Uncaught SyntaxError: Identifier 'x' has already been declared

// 结论: 在全局作用域中let不能重新声明let声明过的变量
// let x = 1;
// let x = 2;//Uncaught SyntaxError: Identifier 'x' has already been declared

// 结论: 在全局作用域中var可以重新声明var声明过的变量
// var x = 1;
// var x = 2;



// 结论: 在不同作用域内，let
// let x = 1;
// console.log(x);//1
// {
//     let x = 2;
//     console.log(x);//2
// }
// {
//     let x = 3;
//     console.log(x);//3
// }
// console.log(x);//1


// 结论: 在不同作用域内，let
// console.log(x);//undefined
// {
//     var x = 1;
//     console.log(x);//1
// }
// {
//     var x = 2;
//     console.log(x);//2
// }
// console.log(x);//2



//合法
// var x = 1;
// {
//     let x = 2;
// }

//合法
// let x = 1;
// {
//     var x = 2;
// }


// {
//     var x = 1;//Uncaught SyntaxError: Identifier 'x' has already been declared
//     let x = 2;
// }


/************* JSON ***************/
var text = '{ "obj1" : [' + '{"name":"jadyn"},' + '{"age":13, "birth":"19940315"}' + ']}';
var obj3 = JSON.parse(text);
console.log(obj3);
var text2 = JSON.stringify(obj3);
console.log(text2);



/************* 函数 ***************/
//声明函数的三种方式
//函数表达式
function funcname1() {
    console.log("i am the funcname1");
}
//函数声明为变量
var funcname2 = function() {
    console.log("i am the funcname2");
}
//构造函数
var funcname3 = new Function("p","q","console.log(p*q)");

funcname1();
funcname2();
funcname3(2,3);


//只有函数表达式的方式创建函数可以使用函数提升，先调用后声明
function myTest1(){ 
    func(); 
    function func(){ 
        console.log("我可以被提升"); 
    } 
} 
myTest1();


//自调用函数
(function(){console.log("i am the funcname4");})();

//可变参数函数
function findMax(){
    if (arguments.length == 0) return NaN;
    var firstNum = arguments[0];
    for (let i = 0; i < arguments.length; i ++) {
        if (firstNum < arguments[i]) {
            firstNum = arguments[i];
        }
    }
    return firstNum;
}
console.log(findMax(1,4,5,3,5,123,43,2,343));
console.log(findMax(3,1,3,4,2,5,5,5,6));


//函数的参数传递：可以用指针的方式理解，外部参数传入到函数内部时，函数的参数相当于是一个新指针指向了外部参数指向的地址，如果函数参数赋值操作，就是指针指向了其他地方，外部参数指向的地址不变。但是如果是函数参数改变原来地址的内容，则外部参数也会被改变。
//函数的值传递
var s1 = 10;
function funcname5(p) {
    //p只是拷贝了一份s1，s1没有被改变
    p = 5;
    console.log(s1);//10
}
funcname5(s1);//10
//函数的对象传递
var obj1 = {"kk":"mm"};
function funcname6(k) {
    //k将对象的内容改变了，导致obj的内容也改变了
    k.kk = "oo";
    console.log(k);//{"kk":"oo"}
    console.log(obj1);//{"kk":"oo"}
}
funcname6(obj1);
//函数的值传递
var obj2 = {"kk":"mm"};
function funcname7(k) {
    //k指向了其他的地址
    k = 6;
    console.log(k);//6
    console.log(obj2);//{"kk":"mm"}
}
funcname7(obj2);

//构造函数
function funname8(arg1,arg2) {
    this.firstName1 = arg1;
    this.lastName1 = arg2;
    console.log(this);
    console.log(this.firstName1);
    console.log(this.lastName1);
}
funname8();
var fc = new funname8("hha","hhi");
// console.log(fc);
// console.log(fc.firstName1);
// console.log(fc.lastName1);


//函数闭包
//自调用函数是没有名字的
var add = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        console.log(counter);
        return counter;
    };
})();
add();
add();
add();

/************* DOM ***************/
//写入html文档
document.write("<h1>我是一个JS中write的标题</h1><p>我是一个JS中write的一段话</p>");
//查找html元素
var ele1 = document.getElementById("demoID1");
var ele2 = document.getElementsByClassName("demoClass1")[0];
var ele3 = document.getElementsByName("demoName1")[0];
var ele4 = document.getElementsByTagName("button")[0];
//向HTML中写入内容
ele1.innerHTML="我是被JS通过查找ID写入到p元素的一句话";
ele2.innerHTML="我是被JS通过查找Class写入到p元素的一句话";
ele3.innerHTML="我是被JS通过查找Name写入到p元素的一句话";
ele4.innerHTML = "dinadinadiandian";
//更改html元素的属性
ele1.style = "background-color:#53aadd";//在引号中直接使用css的名称
ele2.style.backgroundColor = "#53aadd";//在点语法后面无法识别'-'，需要改成驼峰命名
// ele4.onclick = myFunction1;
ele4.onmousedown = function(){ele1.style.color = "red";};
ele4.onmouseup = function(){ele1.style.color = "green";};
//添加event listener
ele4.addEventListener("click",myFunction1);

//增加html元素
var newparam = document.createElement("p");
var noteTXT = document.createTextNode("我是内容2");
newparam.appendChild(noteTXT);
var ele = document.getElementsByTagName("div")[0];
ele.appendChild(newparam);

//插入html元素
var newparam2 = document.createElement("p");
newparam2.appendChild(noteTXT);
ele.insertBefore(newparam2,ele1);

//删除html元素
ele.removeChild(ele1);

//HTMLCollection
//这是一个HTMLCollection而不是数组，有length属性并且可以使用[n]取元素，但是不能使用数组的方法
var ele2 = document.getElementsByTagName("p")
console.log(ele2.length);
console.log(ele2[0]);

//node list
//这是一个HTMLCollection而不是数组，有length属性并且可以使用[n]取元素，但是不能使用数组的方法
var nodeList = document.querySelectorAll("p");
console.log(nodeList.length);
console.log(nodeList[0]);




