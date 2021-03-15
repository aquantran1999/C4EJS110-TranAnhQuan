// // Bài 1
// {
//     // Bai tap 1.1: What are var and const in JavaScript?
//     console.log('var, let và const là dùng để khai báo biến so với khởi tạo, phạm vi (cụ thể là phạm vi chức năng) và lưu trữ.');
//     // Bai tap 1.2: What are the differences between let and var?
//     console.log('var khai báo là phạm vi toàn tục hoặc phạm vi chức năng trong khi let là phạm vi khối,');
//     console.log('var: các biến có thể cập nhật và khai báo lại, let: các biến không được khai báo lại')
//     // Bai tap 1.3: What are the differences between let and const?
//     console.log('let có thể được khai báo mà không cần khởi tạo giá trị, còn const phải được khởi tạo giá trị khi khai báo');
//     // Bai tap 1.4: What to use in what cases?
//     console.log('const dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.');
//     console.log('let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với var - tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.');
//     }
    
// // Bài 2
//     {
//         // Bai tap 2.1: What is Boolean?
//         console.log('Là kiểu logic sử dụng để lưu trữ các giá trị có / không');
//         // Bai tap 2.2: What results in Boolean?
//         console.log('Bao gồm giá trị True/False.');
//     }
    
    
// // Bài 3
//     {
//         // Bai tap 3.a: 7 numbers, starting from 0 (no user input)
//         let n = Number (prompt('Enter a number'));
//         for (let i = 0; i < 7; i++)
//         {
//             console.log(i);
//         }
    
//         // Bai tap 3.b: n numbers, starting from 0, n entered by user
//         let n = Number (prompt('Enter a number'));
//         for (let i = 0; i < n ; i++)
//         {
//             console.log(i);
//         }
//         // Bai tap 3.c: A sequence of numbers, starting from 3, ending before n, n entered by user
//         let n = Number (prompt('Enter a number'));
//         for (let i = 3 ; i < n; i++)
//         {
//             console.log(i);
//         }
//         // Bai tap 3.d: A sequence of numbers, starting from c, ending before n, c and n entered by user
//         let n = Number (prompt('Enter a number'));
//         let c = Number (prompt('Enter a number'));
//         for (c; c < n; c++)
//         {
//             console.log(c);
//         }
//         // Bai tap 3.e: A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
//         let n = Number (prompt('Enter a number'));
//         let c = Number (prompt('Enter a number'));
//         while (c < n) 
//         {
//             console.log(c);
//             c += 3;
//         }
//         // Bai tap 3.f: A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
//         let n = Number (prompt('Enter a number'));
//         let c = Number (prompt('Enter a number'));
//         let s = Number (prompt('Enter a number'));
//         while (c < n) 
//         {
//             console.log(c);
//             c = c+s;
//         }
//     }   
    
    
//  // Bài 4: Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
//     {
//         let n = Number(prompt('Enter a number'));
//         var fa = 1;
//         for(let i=1;i<=n;i++)
//         {
//             fa = fa * i;
//         }
//         alert(`The factorial of ${n} is ${fa}`);
//     }
    
// Bài 5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content
    
        let n = age(prompt('How old are you?'));
        if (age<14)
        {
        alert(`You are not old enough to view this content`);
        }
        else
        {
        alert('Enjoy');
        }
    
    
// // Bài 6: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range

// // Bài 7: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
    
// // Bài 8: Write a script to check if a number is even (divisible by 2) or odd number
    
    