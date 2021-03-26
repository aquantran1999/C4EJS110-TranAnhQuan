// // // Bài 1: Give at least 2 examples to demonstrate you have acquired variable swap
// // // 1.1
// // // let a = 8;
// // // let b = 9;
// // // [a, b] = [b, a]; 
// // // console.log(a, b);
// // // // 1.2
// // // let a = 50;
// // // let b = 100;
// // // [a, b] = [b, a]; 
// // // console.log(a, b);
// // // // Bài 2: Example to demonstrate Split String 
// // // let a = "Hi my friend";
// // // let b = a.split(" ");
// // // console.log(b);
// // // // Bài 3: Log (print out) an array without using loops
// // // const a = [4, 5, 7, -8];
// // // console.log(...a);
// // // // Bài 4: Write a script to simulate a clothes shop, asking and performing certain tasks from users

// // // Bài 5
// {
//     let a = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) để tính tổng dãy số đó');
//     let b = a.split(",");
//     let sum = 0;
    
//     for(i=0;i<b.length;i++)
//     {
//         b[i] = Number(b[i]);
//         sum +=b[i];   
//     }
//     console.log(`Tổng của dãy số đó là ${sum}`);
// }

// // // Bài 6
// // {
// //     let inNum = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) tìm số nhỏ nhất của dãy số đó');
// //     let arNum = inNum.split(",");
    
// //     var maxInNumbers = Math.max.apply(Math, arNum); 
// //     var minInNumbers = Math.min.apply(Math, arNum);
 
// //     // In giá trị ra màn hình
// //     console.log("Giá trị lớn nhất là " +maxInNumbers);
// //     console.log("Giá trị nhỏ nhất là " +minInNumbers);
// // }
