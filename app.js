try {
  const get = async () => {
    const response = await fetch(
      "https://apis.scrimba.com/jsonplaceholder/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Holiday Plans",
          body: "when i fought off the dragons",
          userId: 10000,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    // const firstPostId = [];
    // const para = document.createElement("p");
    // para.innerHTML = data.title;

    // para.innerHTML = data.body;
  };
  get();
} catch (error) {
  console.log("error", error);
} finally {
  console.log("fetch attempt finished");
}
