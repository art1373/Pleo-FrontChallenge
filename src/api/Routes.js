const BaseUrl = "http://localhost:3000";

const Routes = {
  GetExpenses: BaseUrl + "/expenses/",
  AddComment: BaseUrl + "/expenses/", //id at the end
  AddReciept: BaseUrl + "/expenses/receipts/" //reciept id before slash reciept
};

export default Routes;
