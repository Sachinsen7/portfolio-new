import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { motion, AnimatePresence } from "framer-motion";

const quickQuestions = [
  "What technologies do you use?",
  "Tell me about your experience",
  "What projects have you worked on?",
  "How can I contact you?",
  "What services do you offer?",
  "Are you available for freelance work?",
];

const responses = {
  "What technologies do you use?": "I'm a Senior Full Stack Developer specializing in Next.js 15, React 19, TypeScript, Node.js, AWS, Docker, MongoDB, Prisma, and modern cloud technologies. I build enterprise-grade SaaS platforms with AI integration and scalable architecture.",
  "Tell me about your experience": "I'm a Full Stack Developer at ADRS Technosoft with 1 years of experience. I've delivered 15+ projects including enterprise SaaS platforms, AI-powered media processing systems, and complex business management solutions. I've achieved 90% operational efficiency improvements and reduced manual overhead by 85% in enterprise systems.",
  "What projects have you worked on?": "My portfolio includes: Cloud SaaS Media Platform (AI-powered with Cloudinary & Azure AI), Yadav Bus Service Platform (multi-service booking with WhatsApp API), ADRS Gem Control (jewelry business management), Class Crew (student collaboration platform), EndPointHub (API testing platform), and many more innovative solutions!",
  "How can I contact you?": "For professional inquiries, reach me at sachinsen1920@gmail.com or connect on LinkedIn/GitHub @Sachinsen7. I'm always excited to discuss enterprise projects, SaaS development, and innovative web solutions!",
  "What services do you offer?": "I provide enterprise SaaS development, AI integration (Cloudinary, Azure AI, OpenAI), cloud architecture (AWS, Docker), full-stack applications (Next.js, React, Node.js), API development, database design (MongoDB, Prisma, PostgreSQL), and modern web solutions with TypeScript.",
  "Are you available for freelance work?": "Yes! I'm available for enterprise projects, SaaS development, and complex web applications. With 4+ years of experience and expertise in modern tech stack, I can help bring your vision to life. Contact me at sachinsen1920@gmail.com!",
};

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="flex justify-start"
  >
    <div className="max-w-[85%] rounded-sm border border-gray-200/80 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-start gap-2">
        <Bot className="mt-0.5 h-4 w-4 text-accent" />
        <div className="flex space-x-1">
          <motion.div
            className="h-2 w-2 rounded-full bg-accent"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-accent"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-accent"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Sachin's AI assistant. I'm a Full Stack Developer with 1 year of experience in enterprise SaaS development. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const shouldAutoScrollRef = useRef(true);

  const scrollToBottom = (behavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior, block: "end" });
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const container = messagesContainerRef.current;
    if (!container) {
      return undefined;
    }

    const updateScrollLock = () => {
      const distanceFromBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight;
      shouldAutoScrollRef.current = distanceFromBottom < 96;
    };

    updateScrollLock();
    container.addEventListener("scroll", updateScrollLock, { passive: true });

    return () => container.removeEventListener("scroll", updateScrollLock);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (shouldAutoScrollRef.current) {
      scrollToBottom(messages.length > 1 ? "smooth" : "auto");
    }
  }, [isOpen, isTyping, messages]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (
        panelRef.current?.contains(event.target) ||
        triggerRef.current?.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: Date.now(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text:
          responses[question] ||
          "Thanks for your question! Feel free to explore the website or use the contact form for more specific inquiries.",
        sender: "bot",
        timestamp: new Date(),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 1500 + Math.random() * 1000); // 1.5-2.5 seconds delay
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    let botResponseText = "Thanks for your message! For detailed inquiries about enterprise projects or SaaS development, reach me at sachinsen1920@gmail.com or connect on LinkedIn/GitHub.";

    const lowerInput = currentInput.toLowerCase();
    if (
      lowerInput.includes("technology") ||
      lowerInput.includes("tech") ||
      lowerInput.includes("stack") ||
      lowerInput.includes("skills")
    ) {
      botResponseText = responses["What technologies do you use?"];
    } else if (
      lowerInput.includes("experience") ||
      lowerInput.includes("work") ||
      lowerInput.includes("background") ||
      lowerInput.includes("career")
    ) {
      botResponseText = responses["Tell me about your experience"];
    } else if (lowerInput.includes("project") || lowerInput.includes("portfolio") || lowerInput.includes("work")) {
      botResponseText = responses["What projects have you worked on?"];
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email") || lowerInput.includes("hire")) {
      botResponseText = responses["How can I contact you?"];
    } else if (lowerInput.includes("service") || lowerInput.includes("offer") || lowerInput.includes("development")) {
      botResponseText = responses["What services do you offer?"];
    } else if (lowerInput.includes("freelance") || lowerInput.includes("available") || lowerInput.includes("hire") || lowerInput.includes("contract")) {
      botResponseText = responses["Are you available for freelance work?"];
    } else if (lowerInput.includes("saas") || lowerInput.includes("enterprise") || lowerInput.includes("ai")) {
      botResponseText = "I specialize in enterprise SaaS platforms with AI integration! I've built cloud-native solutions using Next.js, TypeScript, AWS, and AI services like Cloudinary and Azure AI. My recent Cloud SaaS Media Platform handles advanced media processing, facial analysis, and document conversion. Let's discuss your enterprise needs!";
    } else if (lowerInput.includes("next") || lowerInput.includes("react") || lowerInput.includes("typescript")) {
      botResponseText = "I'm an expert in Next.js 15, React 19, and TypeScript! I build scalable, type-safe applications with modern architecture. My tech stack includes Node.js, AWS, Docker, Prisma, and MongoDB for full-stack enterprise solutions.";
    }

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };



  return (
    <>
      <motion.div
        ref={triggerRef}
        className="fixed bottom-24 right-4 z-40 sm:bottom-8 sm:right-6"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="button"
            size="lg"
            onClick={() => setIsOpen((prev) => !prev)}
            className="h-14 w-14 rounded-sm border border-gray-200/80 bg-white/92 text-foreground shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all duration-300 hover:border-gray-300 hover:bg-white hover:text-black  dark:border-white/10 dark:bg-[#101113]/92 dark:hover:border-white/20 "
            aria-label={isOpen ? "Close chat" : "Open chat"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -12 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 12 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, rotate: 12 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -12 }}
                  transition={{ duration: 0.18 }}
                >
                  <MessageCircle className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-40 right-4 z-40 flex h-[min(34rem,calc(100vh-8.5rem))] w-[calc(100vw-2rem)] max-w-[24rem] flex-col overflow-hidden rounded-sm border border-gray-200/80 bg-white/92 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f1012]/94 sm:bottom-24 sm:right-6"
          >
            <div className="flex items-center justify-between border-b border-gray-200/80 px-4 py-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-gray-200/80 bg-gray-50/80 dark:border-white/10 dark:bg-white/[0.04]">
                  <Bot className="h-4.5 w-4.5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Chat with Sachin</p>
                  <p className="text-xs text-foreground-muted">Ask about work, projects, or hiring</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 px-2.5 py-1 text-[11px] text-foreground-muted dark:border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Online
              </span>
            </div>

            <div
              ref={messagesContainerRef}
              className="flex-1 space-y-3 overflow-y-auto px-3 py-3 min-h-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[86%] rounded-sm border px-3.5 py-3 ${
                      message.sender === "user"
                        ? "border-accent/20 bg-accent text-white shadow-sm"
                        : "border-gray-200/80 bg-white/78 text-foreground shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {message.sender === "bot" && (
                        <Bot className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      )}
                      {message.sender === "user" && (
                        <User className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/90" />
                      )}
                      <p className="text-sm leading-6">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-200/80 px-3 py-3 dark:border-white/10">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {quickQuestions.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleQuickQuestion(question)}
                    className="whitespace-nowrap rounded-sm border border-gray-200/80 bg-gray-50/80 px-3 py-1.5 text-xs text-foreground-muted transition-colors hover:border-gray-300 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 rounded-sm border border-gray-200/80 bg-gray-50/70 p-2 dark:border-white/10 dark:bg-white/[0.03]">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="h-10 border-0 bg-transparent px-2 text-foreground shadow-none ring-0 placeholder:text-foreground-muted focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="button"
                  onClick={handleSendMessage}
                  size="sm"
                  className="h-10 w-10 rounded-sm bg-accent px-0 text-white hover:bg-accent/90"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
