'use strict';

function Cse4050TemplateProcessor(string){
  this.tempString = string;
  this.fillIn = (dictionary) => {
    for(const [key, value] of Object.entries(dictionary))
      this.tempString = this.tempString.replace(`{{${key}}}`, value);
    return this.tempString;
  }
  return this.tempString;
}