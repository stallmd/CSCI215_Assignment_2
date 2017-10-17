function calculate() {
    var input = document.getElementById("user_input").value;
    var output = "";
    input = input.toUpperCase();
    input = input.replace(/\./g, "");
    input = input.split(" ");
    for (var i = 0; i < input.length; i++) {
        var currentWord = input[i];
        var wordCount = 0;
        for (var x = 0; x < input.length; x++) {
            if (input[x] == currentWord && !output.includes(currentWord)) {
                wordCount = wordCount + 1;
            }
        }
        if (!output.includes(currentWord)) {
            output = output + currentWord + " -> " + wordCount + " <br> ";
        }
    }
    document.getElementById("result").innerHTML = output;
}