emp={
    "eid":101,
    "ename":"Rahul",
    "sal":45000
}
console.log(typeof emp)
let emp_str=JSON.stringify(emp)
console.log(typeof emp_str)
emp=JSON.parse(emp_str)