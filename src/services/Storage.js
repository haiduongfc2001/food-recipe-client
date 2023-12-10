class Storage {
  // getItem
  getSessionFoodSearch = () => {
    const storedData = sessionStorage.getItem("foodSearch");
    return storedData ? JSON.parse(storedData) : [];
  };
  getSessionInputValue = () => {
    const storedData = sessionStorage.getItem("inputValue");
    return storedData ? JSON.parse(storedData) : [];
  };

  // setItem
  updateSessionFoodSearch = (foodSearch) => {
    sessionStorage.setItem("foodSearch", JSON.stringify(foodSearch));
  };
  updateSessionInputValue = (inputValue) => {
    sessionStorage.setItem("inputValue", JSON.stringify(inputValue));
  };

  // removeItem
  removeSessionFoodSearch() {
    sessionStorage.removeItem("foodSearch");
  }
  removeSessionInputValue() {
    sessionStorage.removeItem("inputValue");
  }

  clearLocal() {
    this.removeSessionFoodSearch();
    this.removeSessionInputValue();
  }
}

const storageInstance = new Storage();
export default storageInstance;
