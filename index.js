let arr = [1, -1, 2, -2, 3, -3];
// thao tac voi mang
// do dai mang 

// console.log(a.length);

//them phan tu: cuoi, dau, giua

// a.push();// them vao duoi
// a.unshift();//them vao dau
// a.splice(); //them vao giua, xoa phan tu

//a.pop(); xoa duoi
//a.shift(): xoa dau
// a.splice(); xoa giua

//Cut Array
// let b= a.slice(1,2);
// console.log(b);

//Gop mang
// let b = ['a', 'b', 'c'];
// console.log(a.concat(b));



//duyet mang 
// for
// for(let i= 0; i<a.length; i++){
//     console.log(a[i]);
// }
// // for...of
// for(let element of a){
//     console.log(element);
// }
// // forEach
// a.forEach(function(element){
//     console.log(element);
// });
//for...in(chu yeu voi Object)


//Tim trong mang
// Tim dung gia tri
// console.log(a.includes(5));//tim trong mang a co gia tri 5 hay khong
// console.log(a.indexOf(5));
// console.log(a.lastIndexOf(5));

//Tim co dieu kien(thuong xay ra voi mang chua object)
// console.log(a.findIndex(function(element){
//     return element == 5;
// }));



//Loc mang
// let c=[];
// for(let element of a){
//     if(element > 5){
//         c.push(element);
//     }
// }
// console.log(c);

// let c= a.filter(function(element) {
//     return element> 5;
// })


//sap xep
// arr.sort(function(a, b){
//     return a-b;
// });

// console.log(arr);

//chuyen mang -> string
// console.log(arr.toString());
// console.log(arr.join('/'));


//anh xa
// let result= arr.map(function(element){
//     if(element > 0){
//         return element*element;
//     }else{
//         return element;
//     }
// });

// console.log(result);

//String
// let str= "   This's a stringg    ";

// let str= `
//         hello
//         ${name}
// `;

// console.log(str);
// let result= str.trim();
// console.log(result);

// cut string: slice, substring, substr

// tim kiem string con: indexOf, includes, .../ search, match

// thay the: replace
// let result= str.replace("a", "two");
// console.log(result);

//string --> array
// let string= "1,2,3,4,5,6,7,8,9";
// let arr1= string.split(",");
// let nums= arr1.map(function(element){
//     return Number(element);
// })
// //ham convert tu string--> number: Number();
// console.log(nums);


// function myFunction(a){
//     if(a==1){
//         return 1
//     }
//     return a*myFunction(a-1);
// }

// console.log(myFunction(5));




// function myFunction1(a, b, c) {
//     let delta = b * b - 4 * a * c;

//     if (delta < 0) {
//         return null;
//     } else if (delta == 0) {
//         return Number(- b / (a * 2));
//     } else {
//         delta = Math.sqrt(delta);
//         return [
//             (-b + delta) / (2 * a), (-b - delta) / (2 * a)
//         ];
//     }
// }

// console.log(myFunction1(1, 0, 0));
console.log("hello");