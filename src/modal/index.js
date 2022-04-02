export const formatDate = (date)=>{
    return date.toISOString().slice(0, 10)
}
export const sortItem = (array)=>{
    // return array.sort(function(a, b){
    //   console.log('a,b',a + b)
    // });
    return array.slice().sort((a,b)=>{
        return (new Date(a.dueDate)-new Date(b.dueDate))
    })
}

