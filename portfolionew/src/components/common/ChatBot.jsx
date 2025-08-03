import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/DIalog";
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
  "What technologies do you use?": "I specialize in React, JavaScript, Node.js, Tailwind CSS, MongoDB, and Vercel. I'm passionate about crafting modern, scalable web applications with exceptional user experiences.",
  "Tell me about your experience": "I'm currently working as a Front End Developer intern at ADRS Technosoft since May 2025, where I've architected innovative bus management platforms and sophisticated jewelry business management systems.",
  "What projects have you worked on?": "I've crafted diverse projects including an E-commerce platform, Recipe Finder app, Netflix clone, Music Player, and LearnSphere educational platform. Each project showcases my commitment to excellence and innovation!",
  "How can I contact you?": "For work inquiries, you can reach me at sachinsen1920@gmail.com, or connect on X or LinkedIn. I'm always excited to discuss new opportunities and collaborate on amazing projects!",
  "What services do you offer?": "I deliver premium front-end development, full-stack web applications, responsive design, seamless API integration, and cutting-edge web solutions using React and Node.js.",
  "Are you available for freelance work?": "Absolutely! I'm enthusiastic about freelance opportunities and exciting projects. Let's connect at sachinsen1920@gmail.com to discuss how we can bring your vision to life!",
};

// Typing indicator component
const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="flex justify-start"
  >
    <div className="max-w-[80%] p-3 rounded-lg bg-glass backdrop-blur border border-white/10">
      <div className="flex items-start gap-2">
        <Bot className="h-4 w-4 mt-0.5 text-accent" />
        <div className="flex space-x-1">
          <motion.div
            className="w-2 h-2 bg-accent rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-accent rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-accent rounded-full"
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
      text: "Hi! I'm Sachin's assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: Date.now(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: responses[question] || "Thanks for your question! Feel free to explore the website or use the contact form for more specific inquiries.",
        sender: "bot",
        timestamp: new Date(),
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
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

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);

    // Clear input and show typing
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Simple keyword-based responses
    let botResponseText = "Thanks for your message! For detailed inquiries, reach me at sachinsen1920@gmail.com or connect on X/LinkedIn.";

    const lowerInput = currentInput.toLowerCase();
    if (lowerInput.includes("technology") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
      botResponseText = responses["What technologies do you use?"];
    } else if (lowerInput.includes("experience") || lowerInput.includes("work")) {
      botResponseText = responses["Tell me about your experience"];
    } else if (lowerInput.includes("project")) {
      botResponseText = responses["What projects have you worked on?"];
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email")) {
      botResponseText = responses["How can I contact you?"];
    } else if (lowerInput.includes("service")) {
      botResponseText = responses["What services do you offer?"];
    } else if (lowerInput.includes("freelance") || lowerInput.includes("available")) {
      botResponseText = responses["Are you available for freelance work?"];
    }

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1500 + Math.random() * 1000); // 1.5-2.5 seconds delay
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };



  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.6
        }}
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: isOpen ? 0.9 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                size="lg"
                className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
              </Button>
            </motion.div>
          </DialogTrigger>

          <DialogContent className="max-w-md h-[600px] p-0 overflow-hidden">
            <motion.div
              initial={{
                scale: 0.1,
                opacity: 0,
                y: 100,
                rotateX: -30,
                rotateY: 10
              }}
              animate={{
                scale: [0.1, 1.05, 1],
                opacity: [0, 0.8, 1],
                y: [100, -10, 0],
                rotateX: [-30, 5, 0],
                rotateY: [10, -2, 0]
              }}
              exit={{
                scale: [1, 0.95, 0.1],
                opacity: [1, 0.5, 0],
                y: [0, 20, 100],
                rotateX: [0, 10, 30],
                rotateY: [0, -5, -10]
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.6,
                times: [0, 0.6, 1]
              }}
              className="h-full flex flex-col"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
            {/* Header - Fixed */}
            <DialogHeader className="flex-shrink-0 p-4 border-b border-white/10">
              <DialogTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-accent" />
                Chat with Sachin
              </DialogTitle>
            </DialogHeader>

            {/* Chat Messages - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide min-h-0">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 0.3
                  }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-accent text-white"
                        : "bg-glass backdrop-blur border border-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 text-accent" />}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && <TypingIndicator />}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Section - Fixed */}
            <div className="flex-shrink-0 border-t border-white/10">
              {/* Quick Questions */}
              <div className="p-3">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {quickQuestions.slice(0, 4).map((question, index) => (
                    <Button
                      key={index}
                      size="sm"
                      className="text-xs h-6 px-2 bg-accent/10 hover:bg-accent/20 text-foreground border-none"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-3 border-t border-white/5">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 backdrop-blur border-white/10 text-gray-300 placeholder:text-gray-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-accent hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </>
  );
}
