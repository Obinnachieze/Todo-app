function upLoad() {
  return new Promise((resolve) => {
    console.log("uploading...");
    setTimeout(() => {
      resolve("done uploading");
    }, 2000);
  });
}
async function logUpLoad() {
  try {
    const result = await upLoad();
    console.log(result);
  } catch (error) {}
}
logUpLoad();

function fetchData() {
  return new Promise((resolve) => {
    console.log("fetching data...");
    setTimeout(() => {
      resolve("data fetched");
    }, 5000);
  });
}

const fetchDataAsync = async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {}
};
fetchDataAsync();

const notifyUser = () => {
  return new Promise((resolve) => {
    console.log("notifying user....");
    setTimeout(() => {
      resolve("User notified");
    }, 6000);
  });
};
const notice = async () => {
  try {
    const newResult = await notifyUser();
    console.log(newResult);
    setTimeout(() => {
      console.log("All steps completed");
    }, 7000);
  } catch (error) {}
};
notice();
