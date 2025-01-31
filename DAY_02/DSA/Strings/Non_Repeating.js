function firstNonRepeating(str) {

    let map=new Map();

    for(let c of str){
        if(map.has(c)){
            map.set(c,map.get(c)+1);
        }
        else{
            map.set(c,1);
        }
    }

    for(let c of str){
        if(map.get(c)===1){
            return c;
        }
    }

    return NULL;
    // Your code here
  }
  console.log(firstNonRepeating("swiss"));  // Output: "w"