try {
  const get = async () => {
    const response = await fetch(
      "https://apis.scrimba.com/jsonplaceholder/posts",
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);

    const para = document.createElement("p");
    para.innerHTML = data[0].title;

    para.innerHTML = data.body;

    document.body.appendChild(para);
  };
  get();
} catch (error) {
  console.log("error", error);
} finally {
  console.log("fetch attempt finished");
}
