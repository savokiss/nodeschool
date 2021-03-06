var str = html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`;
    
function html(strings, ...values){
    var result = strings[0];
    for(var i=0;i<values.length;i++){
        result += escape(values[i]) + strings[i+1];
    }
    return result;
}

function escape(s){
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}

console.log(str);