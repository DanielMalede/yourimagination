const generateImage = async () => {
  if (form.prompt) {
    try {
      setGeneratingImg(true);
      const response = await fetch("http://localhost:8080/dalle/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: form.prompt,
        }),
      });
      const data = await response.json();

      return data;
    } catch (error) {
        alert(error);
    }
    finally{
        setGeneratingImg(false);
    }
  }
};

export default generateImage