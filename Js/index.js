// // // // datatypes
// // // // Number
// // // let x=10
// // // console.log(typeof(x));

// // // // String
// // // let names = "Arun"
// // // console.log(typeof(names));

// // // // boolean
// // // let todayClass = true
// // // // undefined
// // // let num = undefined
// // // console.log(typeof(num));

// // // // Null
// // // let newValue = null
// // // console.log(typeof(newValue));

// // // // Nan
// // // // not an number
// // // console.log("Hello"*x);


// // // // complex data types or non premitive
// // // //array
// // // let arr = [20,30,30,40,true,undefined,"userName",null]
// // // // length - >8
// // // // 0 index ->20
// // // // 1 index ->30
// // // // 2 index ->30
// // // // 3 index ->40
// // // // 4 index ->true
// // // // 5 index ->undefined
// // // // 6 index ->userName
// // // // 7 index ->null
// // // console.log(arr[0]);
// // // console.log(arr[1]);
// // // console.log(arr[2]);
// // // console.log(arr[3]);
// // // console.log(arr[4]);
// // // console.log(arr[5]);
// // // console.log(arr[8]);

// // // console.log(arr.length);

// // // //object
// // // // key value pair
// // // const person = {
// // //     userName:"Bala",
// // //     age:30,
// // //     address:"CBE",
// // //     family:{
// // //         dad:"muthu",
// // //         mom:"mani",
// // //         siblings:{
// // //             brothers:["raja","ravi"],
// // //             Sisters:["divya","deepa"]
// // //         }
// // //     }
// // // }

// // // // console.log("The userName is:",person.userName+"The user Age is:"+person.age);
// // // // end->\n
// // // // sep->,

// // // console.log(person.family.siblings.Sisters);
// // // console.log(person["family"]["siblings"]);



// // // // array
// // // let c =[10,20,30,40]


// // // Arithmetic
// // // // +,-,*,/,%,++,--
// // // console.log(10+5);
// // // console.log(10-5);
// // // console.log(10*5);
// // // console.log(10/5);
// // // console.log(10%5);
// // // var a =10
// // // // a++
// // // // console.log(a);
// // // // a--
// // // // console.log(a);
// // // // // 10
// // // // post increment
// // // console.log(a++);//10 a=11
// // // // pre increment
// // // console.log(++a);//12
// // // // pre decrement
// // // console.log(--a);//11
// // // // post decrement
// // // console.log(a--);//11 a=10
// // // console.log(a);//10



// // BODMAS
// // bracket o ->of D-div m-multiplication A-addition s- subs
// // console.log((10+2)/2*3+5+(6+20));
// // 12/2*3+5+26
// // 6*3+5+26
// // 18+5+26
// // 49


// // // comparison operator
// // // >,<.<=,>=,!=,==,===
// // console.log(10<15);
// // console.log(10>15);
// // console.log(10!=15);
// // console.log(10>=10);
// // console.log(10<=15);
// // console.log(10=="10");  // True
// // console.log(10==="10"); //false 


// // logical 
// // && and 
// // || or
// // // !
// // let age = 18
// // let state = "TN"
// // console.log(age>=18 && state=="KL" && age==18);

// // // login
// // let username = "Anandh"
// // let pass = "Pass"
// // // js -> variable and value both are case sensitive

// // // console.log(username=="Anandh" && pass=="pass");

// // // console.log(username=="Anand" || pass=="pass");

// // console.log(!(pass=="pass"));


// // assignmnet operator
// // =,+=,-=,*=,/=.%=
// // right side value going to assign left side variable

// // let x =20
// // console.log(x);
// // x+=5
// // // x=x+5
// // console.log(x);
// // x-=2
// // console.log(x);
// // x*=2;
// // console.log(x);
// // x/=2
// // console.log(x);
// // x%=3
// // console.log(x);

// // ternary 
// // let temp = 31

// // syntax of ternary
// // condition ? "true" : "false"
// // console.log(temp>32 ? "Swith on the Ac" : "Swith on the Fan");


// // function
// // function functionName(parameter){

// // }

// // without parameter
// // function greet(){
// //     console.log("Welcome to Functions");
    
// // }
// // greet()
// // greet()
// // greet()
// // greet()
// // greet()
// // greet()
// // // arrow
// // const arrow = ()=>console.log("Arrow is working")
// // arrow()
// // // IIFI(Immeditate involked function expression)
// // const all = (function(){
// //     console.log("Welcome to IIFI");
    
// // });

// // all();
// // // Ananoums
// // let great = function(){
// //     console.log("Welcome to Ananoums");
    
// // }

// // // great()
// // const add = (a,b)=>console.log(a+b)


// // add(90,60)
// // add(80,60)


// // const multi = (a,b)=>console.log(a*b);

// // multi(10,7)


// // const divs = (a,b)=>console.log(a/b);

// // divs(4,2)

// // const sub = (a,b)=>console.log(a-b);
// // sub(15,10)


// // const great = (a,b)=>console.log(a>b);

// // great(10,5)



// // return
// // const add = (x,y)=>{return x+y}


// // // let total = add(10,5)
// // console.log(add(10,5));

// // // callback function
// // const avg =(tot)=>{
// //     let average = tot/3
// //     return average
// // }
// // const total = (s1,s2,s3)=>{
// //     const res = s1+s2+s3
// //     const stuAvg = avg(res)
// //     return stuAvg
// // }

// // console.log(total(63,71,89));

// //conditonal statements
// // if
// // let pass = 123
// // // if(pass==1234){
// // //     console.log("Mobile unlocked");    
// // // }
// // // if else
// // //     if(pass==1234){
// // //     console.log("Mobile unlocked");    
// // // }else{
// // //     console.log("Password invalid");
    
// // // }
// // // age<13 -> child age>13 age<19-> teenager age>19-> adult
// // else if
// // let age = 63
// // if(age<13){
// //     console.log("Child");    
// // }
// // else if(age>19 && age<60){
// //     console.log("Adult");
    
// // }
// // else if(age>60){
// //     console.log("Senior Citizens");
    
// // }
// // else{
// //     console.log("Teenager");
    
// // }

// // nested if
// // let player = "completed"

// // if(player=="completed"){
// //     if(player=="completed"){
// //         if(player=="completed"){
// //             console.log("Players is on Level 3");            
// //         }
// //     }
// // }

// // let sslc = "Fail"
// // let hsc = "pass"

// // if(sslc=="Pass"){
// //     console.log("SSLC Cleared");
// //     if(hsc=="pass"){
// //         console.log("He is moving to Colledge");        
// //     }    
// // }

// // switch
// // >,<,=,>=,
// // switch(condition){
// //     case 1:
// //         // code
// //     case 2:
// //         // code
// //     case 3:
// //         //code
// //     default:
// // //         //code
// // // }



// // we cannot use any operator in switch cases
// // let today = "Wednesday"

// // switch(today){
// //     case "Monday":
// //         console.log("Today is Monday");
// //         break
// //     case "Tuesday":
// //         console.log("Today is Tuesday");
// //         break
// //     case "Wednesday":
// //         console.log("Today is Wednesday");
// //         break
// //     case "Thursday":
// //         console.log("Today is Thursday");
// //         break
// //     case "Friday":
// //         console.log("Today is Friday");
// //         break
// //     case "Saturday":
// //         console.log("Today is Saturday");
// //         break
// //     default:
// //         console.log("Today is Sunday");        
// // }


// // loops
// // while
// // condition must be failure to stop loop

// // while(condition){
// // code
// // // }

// // let a =1
// // while(a<6){ //6<6
// //     console.log("Hello Welcome"); 
// //     a++  //6
// // }

// // string iteration
// let name = "Suriya"
// // name[0] = S
// // name[1] = u
// // name[2] = r
// // name[3] = i
// // // name[4] = y
// // // name[5] = a
// // console.log(name[0]);
// // console.log(name[1]);
// // console.log(name[2]);
// // console.log(name[3]);
// // console.log(name[4]);
// // console.log(name[5]);

// // // array iteration
// let arr = [10,20,30,40,50]
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);

// // let x=0
// // while(x<6){ //1<6
// //     console.log(name[x]); //name[x]
// //     x++    //x=1
// // }
// // let x=0
// // while(x<6){ //1<6
// //     console.log(arr[x]); //name[x]
// //     x++    //x=1
// // }

// // console.log("Anandh");
// // console.log("Anandh");
// // console.log("Anandh");
// // // console.log("Anandh");
// // // console.log("Anandh");
// // let a =1
// // while(a<=5){ //6<=5
// //     console.log("Anandh"); //5
// //     a++ //a=6
// // }
// // do while
// // exist condition
// // do{
// //     console.log("Do while");
    
// // }while(10>15)
// // let chance = 3
// // let pass = "@nand#akumar123"
// // let enterPassword ="@nand#akumar121"
// // do{
// //     if(pass==enterPassword){
// //         console.log("Mobile is unlocked");
        
// //     }
// //     else{
// //         console.log("Attempt" + chance + "is Failed");
        
// //     }
// //     chance++
// // }while(chance<=3)
// // for
// // for(let x =0;x<5;x++){
// //     console.log(x);    
// // }


// // let arr1 = [10,20,30,40,50]

// // for(let x =4;x>=0;x--){ //4-1 =3
// //     console.log(x);    
// // }
// // 50
// // 40
// // 30
// // 20
// // 10

// // length of the array-> no of elements in array
// // 5

// let arr1 = [10,20,30,40,50]
// let len = arr1.length
// console.log(len);

// for(let i=0;i<arr1.length;i++){ //5-> 1<5
//     console.log(arr1[i]);  //arr[0]->10    arr[1]->20 
// }


// // name reverse
// let names = "Pranesh"

// let a =names.length-1
// while(a>=0){
//     console.log(names[a]);
//     a--
    
// }

// //find the total of array
// // let array = [55,77,88,99,66]
// // let sum;

// // for(let i=0;i<array.length;i++){
// //     sum=0
// //     sum+=array[i]  //0+88
// // }
// // // console.log(sum);
// // let largest = array[0]
// // for(let x=1;x<array.length;x++){
// //     if(array[x]>largest){ //array[1] = 99 >>66
// //         largest = array[x]
// //     }
// // }

// // console.log(largest);


// // // types of for
// // // for of
// // for(let x of array){ //x-array[0]
// //     console.log(x);    
// // }
// // // for in
// // for(let x in array){ //x-array[0]
// //     console.log(array[x]);    
// // }
// // // forEach
// // array.forEach((x)=>console.log(x))

// // array methods
// // map
// let array = [55,77,88,99,66]
// array.map((x)=>console.log(x))
// // 55
// // 77
// // 88
// // 99
// // 66
// // reduce
// let total = array.reduce((x,y)=>x+y)
// // x=0,y=55->55
// // x=55 y=77->132
// // x=132 y = 88 ->220
// // x=220 y =99->319
// // x=319 y =66 ->385
// // total = 385
// console.log(total);

// // filter
// let even = array.filter((x)=>x%2==0)
// let odd = array.filter((x)=>x%2!=0)
// console.log("Even Numbers are:",even);
// console.log("Odd Numbers are:",odd);

// // push
// even.push(24)
// console.log(even);

// // pop
// even.pop()
// console.log(even);

// // shift
// odd.shift()
// console.log(odd);

// // unshift
// odd.unshift(81)
// console.log(odd);

// // find
// let finds = array.find((x)=>x==53)
// console.log(finds);

// // indexOf
// console.log(array.indexOf(53));

// // includes
// console.log(array.includes(53));

// // slice
// console.log(array.slice(0,3));
// // slice(startingPoint,next to end point)

// // splice
// // remove and replace
// // array[2] = 37
// // console.log(array);
// array.splice(2,1,47)
// console.log(array);
// // split
// let text = "Hello-welcome"
// let newtext = text.split("-")
// console.log(newtext);

// // join
// let news = newtext.join(" ")
// console.log(news);

// // sort
// console.log(array.sort());




// let num = Number(prompt("Enter the number to Proceed"))
// console.log(num);


// setTimeout
setTimeout((a,b)=>{
    a =70
    b=20
    let x = a*b
    console.log("The Multiplication is:",x);
    console.log("Hello Welcome to setTimeout");
},5000)
// setInterval
// setInterval((a,b)=>{
//     a =70
//     b=20
//     let x = a*b
//     console.log("The Multiplication is:",x);
//     console.log("Hello Welcome to setInterval");
// },5000)
// destrcture

const prod =  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
}
const {title,price,description} = prod

// console.log(title);
// console.log(price);
// console.log(description);


// rest operator
let arr = [10,20,30,40,50,60,70,80,90,100]
let [one,two,...c] = arr
// console.log(one);
// console.log(two);
// console.log(c); 

const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
]
let [first,second,...rest] = products
// console.log(first);
// console.log(second);
// console.log(rest);

//spread operator
let adds = [...rest,...c]
// console.log(adds);

// template literals
console.log(`The adds value is:${c}`);

// Object methods
console.log(Object.keys(first));
console.log(Object.values(first));
console.log(second);


