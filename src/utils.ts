export function getCookie(cname: string) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function validateInput(element: any) {
  let floatValue, isEmpty, isFloat, value;

  if (element.format === 'fractional') {
    if (element.value) {
      value = element.value.trim();
      isEmpty = value.length == 0;
    }

    try {
      if (value.includes('/')) {
        let result: number;
        const numerator = value.split('/')[0];
        let denominator = 1;
        if (value.split('/')[1].trim().length > 0) {
          denominator = value.split('/')[1];
        }
        result = numerator / denominator;
        floatValue = parseFloat(result.toString());
        return floatValue;
      } else {
        floatValue = parseFloat(value);
      }
      isFloat = !isNaN(floatValue);
    } catch (e) {
      floatValue = NaN;
      isFloat = false;
    }
  } else {
    if (element.value) {
      value = element.value.trim();
    }
    return (floatValue = parseFloat(value));
  }
}

export function calculate(value: any, format: any) {
  let odds: {
    decimal: number;
  } = { decimal: 1 };

  if (format == 'decimal') {
    odds.decimal = value;
  } else if (format == 'fractional') {
    odds.decimal = value + 1;
  } else if (format == 'american') {
    if (value < 0) {
      odds.decimal = -100 / value + 1;
    } else {
      odds.decimal = value / 100 + 1;
    }
  }

  return odds.decimal;
}
