// simple-emoji-library.js

const emojiData = [
    { name: "grinning", emoji: "😀" },
    { name: "smiling", emoji: "😊" },
    { name: "heart_eyes", emoji: "😍" },
    // Add more emojis as needed
  ];
  
  function searchEmoji(query) {
    query = query.toLowerCase();
    return emojiData.filter((emoji) => emoji.name.includes(query));
  }
  
  function getEmojiByName(name) {
    const foundEmoji = emojiData.find((emoji) => emoji.name === name);
    return foundEmoji ? foundEmoji.emoji : null;
  }
  
  module.exports = { searchEmoji, getEmojiByName };
  