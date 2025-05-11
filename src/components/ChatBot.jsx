import React, { useState } from "react";


const exampleQuestions = [
  "How do I sell my license?",
  "What types of licenses are accepted?",
  "How long does payment take?",
];

export default function ChatBot(){
    const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me anything about SoftSell." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const botResponse = {
        text: getMockResponse(input),
      };
      setMessages((prev) => [...prev, { from: "bot", text: botResponse.text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { from: "bot", text: "Sorry, something went wrong." }]);
    }

    setInput("");
  };

  const getMockResponse = (question) => {
    if (question.toLowerCase().includes("sell")) return "You can sell your license by clicking 'Sell' in the navbar and filling out the form.";
    if (question.toLowerCase().includes("types")) return "We accept most enterprise software licenses including Adobe, Autodesk, Microsoft, and more.";
    if (question.toLowerCase().includes("payment")) return "Once your license is verified, payment is processed within 2-3 business days.";
    return "That's a great question! We're processing it...";
  };

    return(
        <div className="fixed bottom-5 right-10 z-50">
      {isOpen ? (
        <div className="w-80 bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="bg-purple-500 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
            <span>SoftSell Assistant</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded-lg max-w-xs ${
                  msg.from === "user"
                    ? "bg-blue-100 text-right ml-auto"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="px-3 py-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border px-2 py-1 rounded text-sm"
              placeholder="Type a question..."
            />
            <button
              onClick={sendMessage}
              className="text-sm bg-purple-600 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
          <div className="p-2 text-xs bg-gray-50">
            Try:
            <ul className="list-disc pl-5">
              {exampleQuestions.map((q, idx) => (
                <li key={idx} onClick={() => setInput(q)} className="cursor-pointer hover:underline">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-700 text- p-3 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
    </div>
    )
}