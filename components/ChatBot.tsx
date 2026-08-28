
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { MessageIcon, CloseIcon, SendIcon, CarIcon } from '../constants';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
          setMessages([{ role: 'model', parts: [{ text: "The assistant is unavailable because no Gemini API key is configured." }] }]);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        chatRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                tools: [{ googleSearch: {} }],
                systemInstruction: 'You are a helpful and knowledgeable car mechanic assistant for the AutoHub community. Provide concise, accurate, and safe information. If you use information from Google Search, mention it.',
            },
        });
        setMessages([{ role: 'model', parts: [{ text: "Hi! I'm the AutoHub Assistant. How can I help you with your car today?" }]}]);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chatRef.current || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const result = await chatRef.current.sendMessageStream({ message: input });
        let modelResponse: ChatMessage = { role: 'model', parts: [{ text: '' }], sources: [] };
        setMessages(prev => [...prev, modelResponse]);

        for await (const chunk of result) {
            const chunkText = chunk.text;
            const groundingChunks = chunk.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
            
            setMessages(prev => prev.map((msg, index) => {
                 if (index === prev.length - 1) {
                    const updatedMsg = { ...msg };
                    updatedMsg.parts[0].text += chunkText;
                    const newSources = groundingChunks
                        .filter(gc => gc.web)
                        .map(gc => gc.web)
                        .filter(source => !(updatedMsg.sources ?? []).some(s => s.uri === source.uri));
                    updatedMsg.sources = [...(updatedMsg.sources || []), ...newSources];
                    return updatedMsg;
                }
                return msg;
            }));
        }
    } catch (error) {
        console.error("Chat error:", error);
        const errorMessage: ChatMessage = { role: 'model', parts: [{ text: "Sorry, I encountered an error. Please try again." }]};
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-accent-red text-white flex items-center justify-center shadow-lg hover:bg-accent-red-hover transition-transform hover:scale-110 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} aria-label="Open Chat">
        <MessageIcon className="w-8 h-8" />
      </button>

      <div className={`fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] sm:w-96 h-[70vh] bg-metallic-gray rounded-lg shadow-2xl flex flex-col transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center gap-2">
            <CarIcon className="w-6 h-6 text-accent-red"/>
            <h3 className="font-bold text-lg text-white">AutoHub Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close Chat">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                         {msg.role === 'model' && <CarIcon className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />}
                         <div className={`p-3 rounded-lg max-w-xs sm:max-w-sm ${msg.role === 'user' ? 'bg-accent-red text-white' : 'bg-jet-black text-gray-200'}`}>
                            <p className="text-sm whitespace-pre-wrap">{msg.parts[0].text}</p>
                            {msg.sources && msg.sources.length > 0 && (
                                <div className="mt-2 border-t border-gray-500 pt-2">
                                    <h4 className="text-xs font-semibold text-gray-400">Sources:</h4>
                                    <ul className="text-xs space-y-1 mt-1">
                                    {msg.sources.map((source, i) => (
                                        <li key={i}><a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline truncate block">{source.title || source.uri}</a></li>
                                    ))}
                                    </ul>
                                </div>
                            )}
                         </div>
                    </div>
                ))}
                 {isLoading && (
                    <div className="flex gap-3">
                        <CarIcon className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />
                        <div className="p-3 rounded-lg bg-jet-black text-gray-200">
                           <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                           </div>
                        </div>
                    </div>
                 )}
                <div ref={messagesEndRef} />
            </div>
        </div>
        
        <form onSubmit={handleSend} className="p-4 border-t border-gray-600">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about car repairs..."
                    className="w-full px-4 py-2 bg-jet-black text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-red"
                    disabled={isLoading}
                />
                <button type="submit" className="bg-accent-red p-2 rounded-full text-white hover:bg-accent-red-hover disabled:bg-gray-500" disabled={isLoading || !input.trim()}>
                    <SendIcon className="w-5 h-5"/>
                </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
