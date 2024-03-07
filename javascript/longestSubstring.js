function lengthOfLongestSubstring(s) {
    let maxLength = 0; // Keeps track of the length of the longest substring without repeating characters
    let start = 0; // Represents the start index of the current substring
    let charIndexMap = {}; // A map where the keys are characters from the string, and the values are their indices in the string

    for (let end = 0; end < s.length; end++) {
        let char = s[end]; // Current character being examined

        // If the current character is already in the map and its index is greater than or equal to start,
        // move the start pointer to the right of the index of the repeated character.
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        // Update the index of the current character in the map
        charIndexMap[char] = end;

        // Update the maximum length if needed
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3
