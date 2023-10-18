<script>
    var str=prompt("Enter a sentence");
    function reverse(str){
        var words=str.split(' ');
        var rev=words.map(function(word){
            return word.split('').reverse().join('');
        });
        var ans=rev.join(' ');
        return ans;
    }
    console.log(reverse(str));
</script>