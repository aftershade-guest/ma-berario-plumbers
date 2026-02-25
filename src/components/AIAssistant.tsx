import React, {useState, useRef, useEffect} from 'react';
import {Bot, Send, User, Minimize2, Maximize2, X, MessageSquare} from 'lucide-react';
import {getAIAssistantResponse} from '../services/geminiService.ts';
import {ChatMessage} from '../types.ts';

const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: 'assistant',
            content: 'Hi! I’m your MA Berario Assistant. Have a plumbing or electrical issue? Ask me anything!'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, {role: 'user', content: userMessage}]);
        setIsLoading(true);

        const response = await getAIAssistantResponse(userMessage);
        setMessages(prev => [...prev, {role: 'assistant', content: response}]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
            {isOpen ? (
                <div
                    className="w-full max-w-[360px] sm:max-w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden h-[500px] mb-4 transition-all duration-300 transform scale-100 origin-bottom-right">
                    {/* Header */}
                    <div className="bg-blue-700 p-4 text-white flex justify-between items-center shrink-0">
                        <div className="flex items-center gap-2">
                            <Bot className="text-orange-400"/>
                            <div>
                                <h4 className="font-bold text-sm">Service Assistant</h4>
                                <p className="text-[10px] text-blue-200">AI Powered Troubleshooting</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-blue-600 p-1 rounded">
                            <X size={20}/>
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                                    msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-sm'
                                }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div
                                    className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none flex gap-1 shadow-sm">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                                    <div
                                        className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t flex gap-2 shrink-0">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Describe your issue..."
                            className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors disabled:opacity-50"
                        >
                            <Send size={18}/>
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-xl flex items-center gap-3 transition-all transform hover:scale-110 group relative"
                >
          <span
              className="hidden group-hover:block absolute right-16 bg-blue-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
            Ask AI Assistant
          </span>
                    <MessageSquare size={28}/>
                </button>
            )}
        </div>
    );
};

export default AIAssistant;
