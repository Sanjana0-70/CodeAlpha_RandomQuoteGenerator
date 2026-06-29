const quotes = [
  { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
  { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { quote: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { quote: "Push yourself, because no one else will.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Don’t watch the clock; do what it does.", author: "Sam Levenson" },
  { quote: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { quote: "Success is not how high you have climbed, but how you make others feel when standing next to you.", author: "Zig Ziglar" },
  { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "Whether you think you can, or you think you can't—you're right.", author: "Henry Ford" },
  { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { quote: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
  { quote: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
  { quote: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  { quote: "The only person who can pull you down is yourself, and you're the only one who can lift yourself up.", author: "Chris Freytag" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Strive for progress, not perfection.", author: "Unknown" }
];

let currentQuote = quotes[0];

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];

  document.getElementById("quote").innerText = currentQuote.quote;
  document.getElementById("author").innerText = "— " + currentQuote.author;
}

function copyToClipboard() {
  const quoteText = currentQuote.quote + " — " + currentQuote.author;
  navigator.clipboard.writeText(quoteText).then(() => {
    const button = event.target;
    const originalText = button.innerText;
    button.innerText = "✅ Copied!";
    setTimeout(() => {
      button.innerText = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// Load initial quote on page load
window.addEventListener('load', generateQuote);