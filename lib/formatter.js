/**
 *  Contains helper methods 
 */

// appends a delemeter after every array items
export const appendCommas = (values) => {
    if(Array.isArray(values)){
      let formattedValue = values.map( value => `${value}`).join(', ') 
      return formattedValue;  
    }
    return values;
}

// get the firts character of the string
export const getInitailLetter = value => value.toString().charAt(0);

// returns a modified array
export const arrayResolver = (array) => {
    let temp = [];
    if(Array.isArray(array)){
      array.map(item => {
        temp.push(item.value);
      })
      return temp;
    }
    return array.value;
}