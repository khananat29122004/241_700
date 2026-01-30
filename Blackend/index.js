//ทำการ อิมพอดโมดูลhtpp
const http= require ('http');
const host = 'localhost';
const port = 8000;

const reqesttlistener = function(req,res){
    res.weiteHead(200);
    res.end('Hello word this is first server');
}

const server = http.createServer(reqesttlistener);
server.listen(port,host,()=> {
     console.log('Server is running on http://${host}:${port}');

});
