import React, { useMemo, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hi! I am Laxa Assistant. Ask me about services, pricing, timelines, or contact details.',
  },
];

const serviceCatalog = [
  {
    name: 'AI Websites',
    keywords: ['website', 'web site', 'landing page', 'portfolio', 'next.js'],
    description: 'We design and build high-converting, fast websites tailored for startups and creators.',
  },
  {
    name: 'Web App Development',
    keywords: ['web app', 'app', 'dashboard', 'saas', 'mvp'],
    description: 'We develop scalable web apps and MVPs with modern UX and clean architecture.',
  },
  {
    name: 'AI Automation',
    keywords: ['automation', 'ai', 'chatbot', 'workflow', 'agent'],
    description: 'We automate repetitive operations using AI workflows, assistants, and integrations.',
  },
  {
    name: 'Product Engineering',
    keywords: ['product', 'build', 'development', 'feature', 'integration'],
    description: 'We support end-to-end product development from planning to production rollout.',
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = useMemo(
    () => [
      {
        match: ['service', 'services'],
        reply: 'We build AI-powered websites, web apps, automations, and product MVPs.',
      },
      {
        match: ['price', 'pricing', 'cost'],
        reply: 'Pricing depends on scope. Share your project in the contact section and we will send a custom quote.',
      },
      {
        match: ['time', 'timeline', 'delivery'],
        reply: 'Typical delivery is 2-6 weeks, depending on complexity and revisions.',
      },
      {
        match: ['contact', 'call', 'email'],
        reply: 'Use the Contact Us button and we will get back quickly.',
      },
    ],
    []
  );

  const getServiceReply = (userText) => {
    const normalizedText = userText.toLowerCase();
    const matchedServices = serviceCatalog.filter((service) =>
      service.keywords.some((keyword) => normalizedText.includes(keyword))
    );

    if (!matchedServices.length) {
      return null;
    }

    const serviceDetails = matchedServices
      .slice(0, 2)
      .map((service) => `${service.name}: ${service.description}`)
      .join(' ');

    return {
      text: `Based on your request, here is how we can help. ${serviceDetails} Share your goals, deadline, and budget so we can suggest the right solution.`,
      showContactButton: true,
    };
  };

  const getBotReply = (userText) => {
    const normalizedText = userText.toLowerCase();
    const serviceReply = getServiceReply(userText);

    if (serviceReply) {
      return serviceReply;
    }

    const matchedReply = quickReplies.find((item) =>
      item.match.some((keyword) => normalizedText.includes(keyword))
    );

    if (matchedReply) {
      return {
        text: matchedReply.reply,
        showContactButton: true,
      };
    }

    return {
      text: 'Thanks for your message. Tell us your goal and budget, and our team will guide you with a clear plan.',
      showContactButton: false,
    };
  };

  const handleContactRedirect = () => {
    setIsOpen(false);
    window.location.hash = 'contact';

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sendMessage = () => {
    const trimmedText = inputValue.trim();
    if (!trimmedText) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: trimmedText,
    };

    const botReply = getBotReply(trimmedText);

    const botMessage = {
      id: Date.now() + 1,
      sender: 'bot',
      text: botReply.text,
      showContactButton: botReply.showContactButton,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInputValue('');
  };

  const onInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="w-[92vw] max-w-sm rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-2xl bg-apple-blue px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot size={18} />
              <p className="text-sm font-semibold">Laxa Assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 transition hover:bg-white/15"
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-72 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  message.sender === 'user'
                    ? 'ml-auto bg-apple-blue text-white'
                    : 'bg-gray-100 text-apple-dark'
                }`}
              >
                <p>{message.text}</p>
                {message.sender === 'bot' && message.showContactButton && (
                  <button
                    type="button"
                    onClick={handleContactRedirect}
                    className="mt-3 rounded-lg bg-apple-blue px-3 py-2 text-xs font-medium text-white transition hover:brightness-95"
                  >
                    Contact Us
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Type your message..."
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-apple-blue"
              />
              <button
                type="button"
                onClick={sendMessage}
                className="rounded-lg bg-apple-blue p-2 text-white transition hover:brightness-95"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-apple-blue px-4 py-3 text-white shadow-xl transition hover:brightness-95"
          aria-label="Open chatbot"
        >
          <MessageCircle size={18} />
          <span className="text-sm font-medium">Chat</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
