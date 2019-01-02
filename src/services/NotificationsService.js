import { delay } from "redux-saga";

export default {
  async GetNotifications( ) {
    console.warn("REAL NOTIFICATION SERVICE");
    await delay(1000);
    return {count: 42};
  }
}