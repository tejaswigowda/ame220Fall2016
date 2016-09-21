var Sets = {
    union: function (setA, setB){
        var setR = [];
        var pointer = 0;
        while(pointer < setA.length){
          var currEle = setA[pointer]
          if(setR.indexOf(currEle) < 0){
              // currEle is not in setR
            setR[setR.length] = currEle;
          }
          pointer++;
        }        

        pointer = 0;
        while(pointer < setB.length){
          var currEle = setB[pointer]
          if(setR.indexOf(currEle) < 0){
              // currEle is not in setR
            setR[setR.length] = currEle;
          }
          pointer++;
        }        
        return setR;
    },
    intersection: function(setA, setB){
        var setR = [];
        /*
        var pointer = 0;
        while(pointer < setA.length){
          var currEle = setA[pointer]
          if(setB.indexOf(currEle) >= 0){
            setR[setR.length] = currEle;
          }
          pointer++;
        }        
        */
        for(var pointer = 0; pointer < setA.length; pointer ++){
          var currEle = setA[pointer]
          if(setB.indexOf(currEle) >= 0){
            setR[setR.length] = currEle;
          }
        }
    
        return setR;
    }

}
