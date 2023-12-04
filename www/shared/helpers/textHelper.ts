export const convertMoneyType = function(value: string){
    value = (value && value != 'null' && value != 'undefined') ? value + '₽' : '';
    value = value.replace(/ /g, '');
    return (value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };
  
  export const convertMoneyTypeWithoutRuble = function(value: string){
    value = (value && value != 'null' && value != 'undefined') ? value : '';
    value = value.replace(/ /g, '');
    return (value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };