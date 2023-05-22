// function getAverage(a: number,b: number,c?: number): string{
//     let total = a+b;
//     let count = 2;

//     if(typeof c !== 'underfined'){
//         total +=c;
//         count++;
//     }
    
//     const result = total/count;
//     return 'result : ' + result;
// }

// function getAverage(a...: number[]): string{
//     let total = 0;
//     let count = 0;

//     for(let i=0; i<a.length;i++){
//         total+=a[i];
//         count++;
//     }
    
//     const result = total/count;
//     return 'result : ' + result;
// }

const getAverage = (a...: number[]): string =>{
    let total = 0;
    let count = 0;

    for(let i=0; i<a.length;i++){
        total+=a[i];
        count++;
    }
    
    const result = total/count;
    return 'result : ' + result;
}

getAverage(10,20,30);
getAverage(10,20);   //c?: number burada ? ni bırakmasak hata verecekti
getAverage(10,20,30,50,60,80);
