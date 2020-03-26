const hostname = window && window.location && window.location.hostname;
let apiUri = "https://localhost:2000/";
let callback = "https://localhost:2000/";


switch (true) {
  case hostname.includes("dev-"): {
    
    break;
  }

  case hostname.includes("qa-"): {
   
    break;
  }
  case hostname.includes("localhost"): {
    apiUri = "https://localhost:2000/";    
    callback = "https://localhost:2000/";

    break;
  }
  default: {
    break;
  }
}

const config = {
  apiUri,
  callback,
 
};

export default config;

