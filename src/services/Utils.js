import { environmentAPIs } from '../helpers/environmentAPIs';

class Utils {
  static toUppercase(str) {
    let words = [];
    for (let word of str.split(" ")) {
      words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(" ");
  }

  static getEnvironmentApi(nodeEnvVariable) {
    switch(nodeEnvVariable) {
      case 'production':
        return environmentAPIs.production;
      case 'development':
        return environmentAPIs.development;
      case 'qa':
        return environmentAPIs.qa;
      default:
        return environmentAPIs.production;
    }
  }
}

export default Utils;
