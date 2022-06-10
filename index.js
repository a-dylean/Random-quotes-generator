const quotes = ["I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy", 
"When we have respect for ourselves and others, we gravitate towards connections that encourage that.", 
"Anger is the ultimate destroyer of your own peace of mind.", 
"A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful.", 
"Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.", "The fact is that grief today is a family matter as much a s it is an individual one.", 
"Emotional empathy is what motivates us to help others.", 
"Make the decision, make another. Remake one past, you cannot",
"Memories, pressed between the pages of my mind. Memories, sweetened through the ages just like wine."]

const thougths = ["Your healing is a process that takes time, sometimes a great deal of time. So be gentle and patient with yourself. Give yourself space and time for healing to unfold. Don't pressure yourself with unreasonable expectations.",
"When we discipline ourselves to keep our ordinary desires under control, we make a habit of virtuous living and practice the reality.",
"Every day you have a chance to fill your life with wonder. Life is magical. The magic in you comes from what you say and what you do. It comes from what you create. It comes from how you think.",
"Karma acts in the universe's timing, not ours. So, next time you get to imagining that the Karma fairy will show up with those front-row tickets, rest assured that Karma will be fulfilled.",
"Meditation soothes your mind and brings the right peace. It's often been proved to be the single most effective way to live happily.",
"Never let yourself be lost in the crowd or buried in oblivion. Stand out! Make yourself a magnet of attention by appearing larger, more colourful, more mysterious than the bland masses.",
"We must remain faithful in our actions even, if we have lost our voices. If you can't speak or you're not being heard, then let your actions do the talking.",
"Time is the most undefinable yet paradoxical of things; the past is gone, the future is not come, and the present becomes the past, even while we attempt to define it, and, like the flash of the lightning, at once exists and expires."]

const jokes = ["Which bear is the most condescending? A pan-duh!", "What kind of noise does a witchs vehicle make? Brrrroooom, brrroooom",
"What is brown and sticky? A stick.", "Two guys walked into a bar. The third guy ducked.", "How do you get a country girls attention? A tractor.", "Why are elevator jokes so classic and good? They work on many levels.", "What do you call a pudgy psychic? A four-chin teller.", 
"What did the police officer say to his belly-button? You are under a vest.",
"What do you call it when a group of apes starts a company? Monkey business.", "My wife asked me to stop singing “Wonderwall” to her. I said maybe…"]


Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

console.log ("Random words for today")
console.log("Quote of the day: " + quotes.sample());
console.log("Thought of the day: " + thougths.sample());
console.log("Joke of the day: " + jokes.sample());