export const validateName = new RegExp("([\\w\\s'-çãÀ-ÖØ-öø-ÿ]{1,50})")
export const validateEmail = new RegExp("([a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]{2,3})")
export const validatePhone = new RegExp("([(]*\\d{2}[)]*)(9\\d{4}[-]*)(\\d{4})")
export const validateCep = new RegExp("(\\d{5})([-]*)(\\d{3})")
