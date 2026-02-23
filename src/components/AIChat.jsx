"use client";
import { useState } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    setLoading(true);
    setResponse("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.reply);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-3 rounded-lg bg-zinc-900 text-white"
        rows="3"
        placeholder="Ask about Kelvin's projects..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="px-6 py-2 bg-white text-black rounded-lg font-semibold"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {response && (
        <div className="bg-zinc-900 p-4 rounded-lg mt-4">
          {response}
        </div>
      )}
    </div>
  );
}