class Storage {
  // getItem
  getLocalFoodRecipeToken() {
    return localStorage.getItem("foodRecipeToken");
  }
  getSessionFoodSearch = () => {
    const storedData = sessionStorage.getItem("foodSearch");
    return storedData ? JSON.parse(storedData) : [];
  };
  getSessionInputValue = () => {
    const storedData = sessionStorage.getItem("inputValue");
    return storedData ? JSON.parse(storedData) : [];
  };

  // setItem
  updateLocalFoodRecipeToken(foodRecipeToken) {
    localStorage.setItem("foodRecipeToken", foodRecipeToken);
  }
  updateSessionFoodSearch = (foodSearch) => {
    sessionStorage.setItem("foodSearch", JSON.stringify(foodSearch));
  };
  updateSessionInputValue = (inputValue) => {
    sessionStorage.setItem("inputValue", JSON.stringify(inputValue));
  };

  // removeItem
  removeFoodRecipeToken() {
    localStorage.removeItem("foodRecipeToken");
  }
  removeSessionFoodSearch() {
    sessionStorage.removeItem("foodSearch");
  }
  removeSessionInputValue() {
    sessionStorage.removeItem("inputValue");
  }

  clearLocal() {
    this.removeFoodRecipeToken();
    this.removeSessionFoodSearch();
    this.removeSessionInputValue();
  }
}

const storageInstance = new Storage();
export default storageInstance;
