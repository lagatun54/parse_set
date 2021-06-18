const parse = (arg) => {
    const reg = /^.={[a-z,{},<>]*}$/gm
    const res1 = arg[0].trim().match(reg);
    const res2 = res1.reduce((acc,i)=>{
        return [...acc,i.match(/[a-z]/g)];
 
    },[])

    const difference = res2[0].filter(x => !res2[1].includes(x));
    const result = difference.reduce((acc,i,ind,arr)=>{
        if(arr.length === ind + 1){
            acc+= `${i}`;
            acc += '}'
            return acc;
        }
        return acc+= `${i}`
    },'{');
    console.log(result)
}
parse`
A={a,b,{c,{d,e}}}
B={f,g,{{d,e},c}}`