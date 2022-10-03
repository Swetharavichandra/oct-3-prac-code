let arr=[1,2,3,4,4,3,1,8,9]
let count={};
for(let result of arr){
    if(count[result]){
        count[result]+=1
    }
    else{
        count[result]=1
    }
}
console.log(count);