var possibleStringCount = function(word) {
    let n = word.length;
    let ans = 1; // no mistake case

    let count = 1;
    for (let i = 1; i < n; i++) {
        if (word[i] === word[i - 1]) {
            count++;
        } else {
            ans += (count - 1);
            count = 1;
        }
    }
    ans += (count - 1);

    return ans;
};
