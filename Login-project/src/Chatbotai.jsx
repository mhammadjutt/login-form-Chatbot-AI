import React, { useEffect } from 'react';

const ChatbotApp = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.Chatbot = async function () {
        try {
          const inputRef = document.querySelector("#query");
          const queryValue = inputRef.value.trim();
          if (!queryValue) return;

          const responseDivRef = document.querySelector("#response");

          const queryDiv = document.createElement("div");
          queryDiv.innerHTML = queryValue;
          queryDiv.classList.add("user-div");
          responseDivRef.appendChild(queryDiv);

          const response = await window.axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDTff0xOjTCaSDgICeTMhEJ9yJqmZGbMh4",
            {
              contents: [{ parts: [{ text: queryValue }] }],
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const aiReply = response.data.candidates[0].content.parts[0].text;
          const aiDiv = document.createElement("div");
          aiDiv.innerHTML = aiReply;
          aiDiv.classList.add("ai-div");
          responseDivRef.appendChild(aiDiv);

          inputRef.value = ""; // Clear input
        } catch (err) {
          console.error("Chatbot error:", err);
          const responseDivRef = document.querySelector("#response");
          const errorDiv = document.createElement("div");
          errorDiv.innerHTML = "Something went wrong.";
          errorDiv.classList.add("ai-div");
          responseDivRef.appendChild(errorDiv);
        }
      };
    };
  }, []);

  return (
    <div className="chatbot-form">
      <form 
        onSubmit={(e) => {
          e.preventDefault(); // prevent reload
          if (window.Chatbot) {
            window.Chatbot();
          }
        }}
      >
        <h1 className='heading1'>Chatbot AI</h1>
        <div id="response"></div>
        <div>
          <input type="text" name="query" id="query" placeholder="Ask anything" />
        </div>
        <button type="submit">Run</button>
      </form>
    </div>
  );
};

export default ChatbotApp;
