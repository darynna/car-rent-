export const splitAddressCity = (address) => {
    if (address) {
    const adressArray = address.split(",");
    adressArray.shift();
    return adressArray[0];
    }
    return
  };
  export const splitAddressCountry = (address) => {
    if (address) {
    const adressArray = address.split(",");
    adressArray.shift();
    return adressArray[1].trim();
    }
    return 
  };
  
  export const firstLetterUpCase = (type) => {
    const lowerCaseType = type.toLowerCase();
    return lowerCaseType[0].toUpperCase() + lowerCaseType.slice(1);
  };
  
  export const shortestSentence = (sentences) => {
      if (!sentences || sentences.length === 0) {
          return null;
      }
  
      let shortest = sentences[0]; 
  
      for (let i = 1; i < sentences.length; i++) {
          if (sentences[i].length < shortest.length) {
              shortest = sentences[i]; 
          }
      }
  
      return shortest;
  }