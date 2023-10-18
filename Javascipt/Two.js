<script>
    var arr=[33,66,43,62,22];
    var n=arr.length;
    for(var i=0;i<n;i++){
        var flag=false;
        for(var j=0;j<n-i;j++){
            if(arr[j]<arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=true;
            }
        }
        if(!flag)
            break;
    }
    console.log(arr);
    
</script>